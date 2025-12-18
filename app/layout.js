import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://cleaningorganizationsolutions.com'),
  title: {
    default: "COS - Cleaning & Organization Solutions | Professional Cleaning Services in South Florida",
    template: "%s | COS Cleaning & Organization Solutions",
  },
  description: "Professional cleaning and organization services in South Florida with 7+ years of experience. Residential, commercial, deep cleaning, and more. Call (954) 654-6628 for a free estimate.",
  keywords: [
    "cleaning services",
    "professional cleaning",
    "South Florida cleaning",
    "organization services",
    "deep cleaning",
    "office cleaning",
    "residential cleaning",
    "commercial cleaning",
    "house cleaning",
    "maid service",
    "cleaning company",
    "Fort Lauderdale cleaning",
    "Miami cleaning services",
    "Broward County cleaning",
  ],
  authors: [{ name: "COS Cleaning & Organization Solutions" }],
  creator: "COS Cleaning & Organization Solutions",
  publisher: "COS Cleaning & Organization Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "COS - Cleaning & Organization Solutions",
    description: "Professional cleaning and organization services in South Florida with 7+ years of experience. Residential, commercial, deep cleaning, and more.",
    url: "https://cleaningorganizationsolutions.com",
    siteName: "COS Cleaning & Organization Solutions",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "COS Cleaning & Organization Solutions - Professional Cleaning Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "COS - Cleaning & Organization Solutions",
    description: "Professional cleaning and organization services in South Florida with 7+ years of experience.",
    images: ["/og-image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://cleaningorganizationsolutions.com",
  },
  category: "cleaning services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
