import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "OmniSpark Media",
    template: "%s | OmniSpark Media",
  },
  description:
    "OmniSpark Media helps businesses grow through web development, SEO, and digital marketing.",
  keywords: [
    "Web Development",
    "Digital Marketing",
    "SEO",
    "Next.js Agency",
    "OmniSpark Media",
  ],
  openGraph: {
    title: "OmniSpark Media",
    description:
      "High-performance websites and digital marketing solutions.",
    url: "https://omnisparkmedia.com",
    siteName: "OmniSpark Media",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
