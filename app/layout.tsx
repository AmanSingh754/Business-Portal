import type { Metadata } from "next";
import "./globals.css";
import { Bricolage_Grotesque, Space_Grotesk } from "next/font/google";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
});

const body = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Akash Hardware Shop",
  description:
    "Akash Hardware Shop offers dependable tools, paints, plumbing, electricals, and fittings for every build.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen bg-sand text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
