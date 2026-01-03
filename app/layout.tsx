import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

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
  title: "Rusab Sarmun | ML Researcher & AI Engineer",
  description: "Portfolio of Rusab Sarmun, Machine Learning Researcher specializing in medical image analysis, deep learning, computer vision, and AI-driven healthcare solutions. Published researcher with expertise in TensorFlow, PyTorch, and medical imaging.",
  keywords: [
    "Rusab Sarmun",
    "Machine Learning Researcher",
    "AI Researcher",
    "Medical Image Analysis",
    "Deep Learning",
    "Computer Vision",
    "Healthcare AI",
    "TensorFlow",
    "PyTorch",
    "Neural Networks",
    "Medical Imaging",
    "Brain Tumor Detection",
    "AI Research",
    "Bangladesh AI Researcher",
    "Robotics",
    "PCB Design",
    "SOLIDWORKS"
  ],
  authors: [{ name: "Rusab Sarmun", url: "https://www.linkedin.com/in/rusab-sarmun" }],
  creator: "Rusab Sarmun",
  publisher: "Rusab Sarmun",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rusabsarmun.com",
    title: "Rusab Sarmun | ML Researcher & AI Engineer",
    description: "Machine Learning Researcher specializing in medical image analysis, deep learning, and AI-driven healthcare solutions. Published researcher with 20+ publications.",
    siteName: "Rusab Sarmun Portfolio",
    images: [
      {
        url: "/Rusab_Image.png",
        width: 1200,
        height: 630,
        alt: "Rusab Sarmun - ML Researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rusab Sarmun | ML Researcher & AI Engineer",
    description: "Machine Learning Researcher specializing in medical image analysis and AI-driven healthcare solutions",
    images: ["/Rusab_Image.png"],
    creator: "@rusabsarmun",
  },
  verification: {
    google: "google-site-verification=HSl4oE7B-o4Kc7ir8VqN1c4m_bTorSyQM23D-20FPag", 
  },
  alternates: {
    canonical: "https://rusabsarmun.com",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#050505] text-white selection:bg-blue-500/30 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
