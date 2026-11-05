import { Suspense } from "react";

type ApiResponse = {
  success: boolean;
  app: string;
  message: string;
};

async function StatusData() {
  let data: ApiResponse | null = null;
  let error: string | null = null;

  try {
    const response = await fetch(`${process.env.API_URL}/api/health`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    data = await response.json();
  } catch {
    error = "Could not connect to the Laravel API.";
  }

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  return (
    <div className="space-y-3">
      <p>Connection: Connected</p>
      <p>Application: {data?.app}</p>
      <p>Message: {data?.message}</p>
      <p>Status: {data?.success ? "Success" : "Failed"}</p>
    </div>
  );
}

export default function ApiStatusPage() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="mb-6 text-3xl font-bold">Agrani — API Connection</h1>
      <Suspense fallback={<p>Checking connection...</p>}>
        <StatusData />
      </Suspense>
    </main>
  );
}