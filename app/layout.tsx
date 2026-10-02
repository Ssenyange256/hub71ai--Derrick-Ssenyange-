import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forever Abu Dhabi | Your Abu Dhabi relocation roadmap",
  description: "Prepare your move to Abu Dhabi with tailored journeys, housing research, cultural discovery and community events.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
