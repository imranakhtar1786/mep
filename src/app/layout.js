import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: "AURA | Premium MEP Engineering & Infrastructure Design",
  description: "Aura is a luxury corporate MEP engineering firm specializing in intelligent mechanical, electrical, plumbing, HVAC, fire fighting, and smart building automation systems.",
  keywords: "MEP engineering, mechanical, electrical, plumbing, HVAC, smart buildings, automation, luxury infrastructure, premium construction, corporate engineering",
  robots: "index, follow",
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
      </body>
    </html>
  );
}
