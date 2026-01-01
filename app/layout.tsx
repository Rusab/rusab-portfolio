import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rusab Sarmun | Portfolio",
  description: "Portfolio of Rusab Sarmun, Machine Learning Researcher specializing in medical image analysis, deep learning, and AI-driven healthcare solutions.",
  keywords: ["Machine Learning", "Deep Learning", "Medical Imaging", "AI Research", "Computer Vision", "Healthcare AI"],
  authors: [{ name: "Rusab Sarmun" }],
  openGraph: {
    title: "Rusab Sarmun | Portfolio",
    description: "Machine Learning Researcher specializing in medical image analysis and healthcare AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#050505] text-white selection:bg-blue-500/30 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
