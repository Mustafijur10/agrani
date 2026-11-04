export type Offering = { title: string; items?: string[] };

// TODO: the Figma only detailed "Software Development" and "Portfolio".
// Rows without `items` render as plain (non-expandable) rows. Add items to make them expand.
export const services: Offering[] = [
  {
    title: "Software Development",
    items: [
      "Custom Web & Mobile Applications",
      "Enterprise Resource Planning (ERP) System",
      "Management Information System (MIS)",
      "Document Management System",
      "Fees & Revenue Collection and Billing System",
      "Learning Management System (LMS)",
      "E-commerce Platform",
      "Payment Integration Solution",
      "Multimodal biometric solutions",
    ],
  },
  { title: "Tech Consultancy" },
  { title: "System Integration & Interoperability" },
  { title: "Comprehensive Cloud & Infrastructure Services" },
  { title: "Cybersecurity Solutions" },
  { title: "Managed ICT Services" },
  { title: "E-Governance Solutions" },
  { title: "AI-Powered Government Services" },
  { title: "Smart Transportation Ecosystem" },
  { title: "IT Training" },
  { title: "Offshore IT Services" },
];

export const products: Offering[] = [
  {
    title: "Portfolio",
    items: [
      "Revenue & Fees Collection System",
      "Enterprise Resource Planning System",
      "Management Information System",
      "Document Digitization System",
      "Transport Automation System",
      "Payment Gateway Solution",
      "Port Automation System",
      "Sales Process Solution",
      "Biometrics Solution",
      "Internet of Things",
    ],
  },
  { title: "Industries Served" },
];
