import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Chima Labs · Signal Processing & Neural Geometry",
    template: "%s · Chima Labs"
  },
  description: "Personal website & computational research lab of Chima Emmanuel. Signal processing, Lagrangian optimization, autoencoders, and neural geometry.",
  keywords: ["Signal Processing", "Machine Learning", "Neural Networks", "Optimization", "Lagrangian Geometry", "Autoencoders", "Chima Emmanuel"],
  authors: [{ name: "Chima Emmanuel" }],
  openGraph: {
    title: "Chima Labs · Signal Processing & AI Research",
    description: "Computational research, publications, software tools, and articles by Chima Emmanuel.",
    url: "https://chimalabs.org",
    siteName: "Chima Labs",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
