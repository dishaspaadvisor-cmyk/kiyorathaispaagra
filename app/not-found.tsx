import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Page Not Found | Kiyora Thai Spa",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">Page Not Found</h1>
    </div>
  );
}