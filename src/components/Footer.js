"use client";

import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-matte-black text-white border-t border-gold/15 relative overflow-hidden">
      {/* Decorative architectural layout details */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

          {/* Brand Info */}
          <div className="md:col-span-1 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <img src="/logo.png" alt="Logo" className="w-70" />
            </Link>
            <p className="font-sans text-xs text-gray-400 leading-relaxed font-light tracking-wide max-w-xs">
              Engineering intelligent and sustainable infrastructure. Providing industry-leading Mechanical, Electrical, and Plumbing engineering services globally.
            </p>
            <div className="flex gap-4 mt-2">
              {/* <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={14} />
              </a> */}
              <a
                href="https://www.instagram.com/poweronelectrotech/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="https://wa.me/918507894280"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6 mt-5">
            <h4 className="font-serif text-lg text-gold font-medium tracking-wider">Navigation</h4>
            <ul className="flex flex-col gap-3 font-sans text-xs tracking-wider">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300 hover-gold-line w-fit block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300 hover-gold-line w-fit block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300 hover-gold-line w-fit block">
                  MEP Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors duration-300 hover-gold-line w-fit block">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 hover-gold-line w-fit block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Quicklist */}
          <div className="flex flex-col gap-6 mt-5" onClick={() => (window.location.href = '/services')}>
            <h4 className="font-serif text-lg text-gold font-medium tracking-wider">
              Core MEP Services
            </h4>

            <ul className="flex flex-col gap-3 font-sans text-xs tracking-wider text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">
                Electrical Systems
              </li>

              <li className="hover:text-white transition-colors cursor-pointer">
                HVAC Engineering
              </li>

              <li className="hover:text-white transition-colors cursor-pointer">
                Plumbing Systems
              </li>

              <li className="hover:text-white transition-colors cursor-pointer">
                Fire Fighting
              </li>

              <li className="hover:text-white transition-colors cursor-pointer">
                Solar Energy
              </li>

              <li className="hover:text-white transition-colors cursor-pointer">
                Automation
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6 mt-5">
            <h4 className="font-serif text-lg text-gold font-medium tracking-wider">
              Headquarters
            </h4>

            <ul className="flex flex-col gap-4 font-sans text-xs text-gray-400 tracking-wide">
              

              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-gold shrink-0" size={14} />
                <span>+91 8507894280</span>
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="text-gold shrink-0" size={14} />
                <span>info@poweronelectrotech.in</span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-gold mt-1 shrink-0" size={14} />
                <span className="leading-relaxed">
                  A-36/1, Tilpata Karanwas
                  <br />
                  Greater Noida, Dadri
                  <br />
                  Gautam Buddha Nagar - 201306
                  <br />
                  Uttar Pradesh, India
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#C8A45D]/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-[10px] tracking-[0.2em] text-gray-500 uppercase">

          <p>
            © {currentYear} POWERON ELECTROTECH SOLUTIONS PRIVATE LIMITED. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}
