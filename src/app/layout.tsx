import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#050505",
};

export const metadata: Metadata = {
  title: "Vijay Jewellery | B2C Jewellery Portal",
  description: "Exclusive B2C Jewellery Ecommerce Platform by Vijay Jewellery",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://pub-ce8688bc6c654bcfb99716f7c9373bcd.r2.dev"
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch"
          href="https://pub-ce8688bc6c654bcfb99716f7c9373bcd.r2.dev"
        />
      </head>
      <body className="bg-[#050505] text-white min-h-screen selection:bg-gold/30 selection:text-gold-light antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
