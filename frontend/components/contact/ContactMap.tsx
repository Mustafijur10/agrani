"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Styled Google Map (Saint Martin's Island) with a pulsing orange pin.
 *
 * - Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to .env.local for the styled map shown in the design.
 * - Without a key (or if the key is rejected) it falls back to a plain Google embed, so the page never breaks.
 */

export const mapLocation = {
  name: "Saint Martin's Island, Bangladesh",
  lat: 20.6276,
  lng: 92.3226,
  zoom: 14,
};

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

/* eslint-disable @typescript-eslint/no-explicit-any */
type Maps = any;

const lightStyle = [
  { elementType: "geometry", stylers: [{ color: "#f5f5f3" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#8c8c8c" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f3" }] },
  { featureType: "administrative", elementType: "geometry", stylers: [{ visibility: "off" }] },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
  { featureType: "landscape.natural", elementType: "geometry", stylers: [{ color: "#f1f1ee" }] },
  { featureType: "road", elementType: "geometry.fill", stylers: [{ color: "#ffffff" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#e4e4e1" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#cbdad3" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#9bb0a7" }] },
];

const darkStyle = [
  { elementType: "geometry", stylers: [{ color: "#1d2020" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#7d8584" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#1d2020" }] },
  { featureType: "administrative", elementType: "geometry", stylers: [{ visibility: "off" }] },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
  { featureType: "road", elementType: "geometry.fill", stylers: [{ color: "#2a2e2e" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#222626" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#26332f" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#4f625b" }] },
];

let loader: Promise<Maps> | null = null;
function loadGoogleMaps(key: string): Promise<Maps> {
  const w = window as any;
  if (w.google?.maps?.importLibrary) return Promise.resolve(w.google.maps);
  if (loader) return loader;
  loader = new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&v=weekly&loading=async`;
    s.async = true;
    s.onload = () => resolve(w.google.maps);
    s.onerror = () => { loader = null; reject(new Error("Google Maps failed to load")); };
    document.head.appendChild(s);
  });
  return loader;
}

// Orange dot + soft pulsing halo (sizes match the design: ~64px halo, 16px dot)
const pinHtml = `
  <span class="absolute left-1/2 top-1/2 block h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F05827]/20"></span>
  <span class="absolute left-1/2 top-1/2 block h-16 w-16 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#F05827]/20 [animation-duration:2.4s]"></span>
  <span class="absolute left-1/2 top-1/2 block h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#F05827] shadow-[0_2px_8px_rgba(240,88,39,0.55)]"></span>
`;

export default function ContactMap({ title }: { title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(!API_KEY);

  useEffect(() => {
    if (!API_KEY || !ref.current) return;
    let cancelled = false;
    let observer: MutationObserver | undefined;
    const w = window as any;
    w.gm_authFailure = () => setFailed(true); // invalid / restricted key → fallback embed

    loadGoogleMaps(API_KEY)
      .then(async (maps) => {
        const { Map, OverlayView } = await maps.importLibrary("maps");
        if (cancelled || !ref.current) return;

        const center = { lat: mapLocation.lat, lng: mapLocation.lng };
        const isDark = () => document.documentElement.classList.contains("dark");

        const map = new Map(ref.current, {
          center,
          zoom: mapLocation.zoom,
          disableDefaultUI: true,
          clickableIcons: false,
          gestureHandling: "cooperative",
          backgroundColor: isDark() ? "#1d2020" : "#f5f5f3",
          styles: isDark() ? darkStyle : lightStyle,
        });

        class PulsePin extends OverlayView {
          el: HTMLDivElement | null = null;
          onAdd() {
            const el = document.createElement("div");
            el.style.position = "absolute";
            el.style.width = "0";
            el.style.height = "0";
            el.setAttribute("aria-hidden", "true");
            el.innerHTML = pinHtml;
            this.el = el;
            this.getPanes().overlayLayer.appendChild(el);
          }
          draw() {
            const p = this.getProjection()?.fromLatLngToDivPixel(new maps.LatLng(center.lat, center.lng));
            if (p && this.el) {
              this.el.style.left = `${p.x}px`;
              this.el.style.top = `${p.y}px`;
            }
          }
          onRemove() { this.el?.remove(); this.el = null; }
        }
        new PulsePin().setMap(map);

        // follow the site's light/dark toggle
        observer = new MutationObserver(() =>
          map.setOptions({ styles: isDark() ? darkStyle : lightStyle, backgroundColor: isDark() ? "#1d2020" : "#f5f5f3" })
        );
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
      })
      .catch(() => !cancelled && setFailed(true));

    return () => { cancelled = true; observer?.disconnect(); };
  }, []);

  if (failed) {
    return (
      <iframe
        title={title}
        src={`https://www.google.com/maps?q=${mapLocation.lat},${mapLocation.lng}&z=${mapLocation.zoom}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="h-full w-full border-0 grayscale contrast-95 dark:invert dark:hue-rotate-180"
      />
    );
  }

  return <div ref={ref} role="region" aria-label={title} className="h-full w-full" />;
}
