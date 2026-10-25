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
    default: "Chima Emmanuel · ML Research & Open Models",
    template: "%s · Chima Emmanuel"
  },
  description: "Personal website of Chima Emmanuel, founder of Modular: ML research, open models, publications, and articles.",
  keywords: ["Signal Processing", "Machine Learning", "Neural Networks", "Optimization", "Lagrangian Geometry", "Autoencoders", "Chima Emmanuel"],
  authors: [{ name: "Chima Emmanuel" }],
  openGraph: {
    title: "Chima Emmanuel · ML Research & Open Models",
    description: "Computational research, publications, software tools, and articles by Chima Emmanuel.",
    url: "https://chimaemmanuel.xyz",
    siteName: "Chima Emmanuel",
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
