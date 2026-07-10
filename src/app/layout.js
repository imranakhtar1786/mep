import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://poweronelectrotech.in"),

  title: {
    default:
      "POWERON ELECTROTECH SOLUTIONS PRIVATE LIMITED | Powering Solutions, Energizing Futures",
    template: "%s | POWERON ELECTROTECH",
  },

  description:
    "POWERON ELECTROTECH SOLUTIONS PRIVATE LIMITED delivers professional Electrical Engineering, MEP Engineering, Power Distribution, Fire Alarm Systems, Infrastructure Solutions, Industrial Automation, and Energy-Efficient Engineering Services.",

  keywords: [
    "POWERON ELECTROTECH",
    "Electrical Engineering",
    "MEP Engineering",
    "Industrial Electrical Solutions",
    "Power Distribution",
    "Electrical Design",
    "Fire Alarm System",
    "Infrastructure Engineering",
    "Industrial Automation",
    "Commercial Electrical Services",
    "Engineering Consultants",
    "India Engineering Company",
  ],

  authors: [
    {
      name: "POWERON ELECTROTECH SOLUTIONS PRIVATE LIMITED",
      url: "https://poweronelectrotech.in",
    },
  ],

  creator: "POWERON ELECTROTECH SOLUTIONS PRIVATE LIMITED",
  publisher: "POWERON ELECTROTECH SOLUTIONS PRIVATE LIMITED",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://poweronelectrotech.in",
  },

  openGraph: {
    title:
      "POWERON ELECTROTECH SOLUTIONS PRIVATE LIMITED | Powering Solutions, Energizing Futures",

    description:
      "Advanced Electrical, MEP, Fire Alarm, Infrastructure, and Engineering Solutions for Commercial, Industrial, and Institutional Projects.",

    url: "https://poweronelectrotech.in",

    siteName: "POWERON ELECTROTECH",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "POWERON ELECTROTECH SOLUTIONS PRIVATE LIMITED",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "POWERON ELECTROTECH SOLUTIONS PRIVATE LIMITED",

    description:
      "Premium Electrical, MEP, Infrastructure & Engineering Solutions.",

    images: ["/logo.png"],
  },

  category: "Engineering",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-matte-black selection:bg-gold selection:text-matte-black">
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        <Analytics/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "POWERON ELECTROTECH SOLUTIONS PRIVATE LIMITED",
              url: "https://poweronelectrotech.in",
              logo: "https://poweronelectrotech.in/logo.png",
              description:
                "Professional Electrical Engineering, MEP Engineering and Infrastructure Solutions.",
              sameAs: [
                "https://www.instagram.com/poweronelectrotech/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
