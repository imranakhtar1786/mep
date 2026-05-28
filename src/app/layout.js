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
  title: "POWERON ELECTROTECH SOLUTIONS PRIVATE LIMITED | Powering Solutions, Energizing Futures",
  description: "POWERON ELECTROTECH SOLUTIONS PRIVATE LIMITED is a premier engineering firm delivering advanced electrical, technological, and infrastructure solutions for industries.",
  keywords: "POWERON ELECTROTECH SOLUTIONS PRIVATE LIMITED, POWERON ELECTROTECH, electrical engineering, industrial power solutions, tech infrastructure, power automation",
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
