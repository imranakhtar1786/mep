"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  // Determine if the navbar should be white or transparent initially
  // Home page starts transparent. Others can have a clean thin border/white background.
  const isHomePage = pathname === "/";
  const navbarBg = scrolled
    ? "bg-white/80 backdrop-blur-md border-b border-gold/20 shadow-xl py-4 bg-[linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url('https://i.pinimg.com/736x/f4/30/50/f430503b03ce88471ba04b47e89e8c29.jpg')] bg-[length:300px_auto] bg-repeat bg-right-top"
    : isHomePage
      ? "bg-transparent py-6 border-b border-transparent"
      : "bg-white border-b border-gold/10 py-6 bg-[linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url('https://i.pinimg.com/736x/f4/30/50/f430503b03ce88471ba04b47e89e8c29.jpg')] bg-[length:300px_auto] bg-repeat bg-right-top";

  const textColor = scrolled
    ? "text-matte-black "
    : isHomePage
      ? "text-white"
      : "text-matte-black";

  const goldAccent = "text-gold";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${navbarBg} `}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img src="/icon1.png" alt="Logo" className="w-10" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative font-sans text-[14px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300 hover:text-gold ${isActive ? "text-gold" : textColor
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Call-to-action button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/7256815100"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-dark transition-colors text-4xl"
              title="Chat on WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <Link
              href="/contact"
              className={`font-sans text-xs font-semibold tracking-[0.15em] uppercase px-5 py-2.5 rounded-none border transition-all duration-500 ${scrolled
                  ? "border-matte-black text-matte-black hover:bg-matte-black hover:text-white"
                  : isHomePage
                    ? "border-white text-white hover:bg-white hover:text-matte-black"
                    : "border-matte-black text-matte-black hover:bg-matte-black hover:text-white"
                }`}
            >
              Inquire Now
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-5xl focus:outline-none transition-colors duration-300"
            style={{ color: scrolled || !isHomePage ? "var(--color-matte-black)" : "#FFFFFF" }}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX className="text-matte-black" /> : <FiMenu />}
          </button>

        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between p-8 pt-28 md:hidden bg-[linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url('https://i.pinimg.com/736x/f4/30/50/f430503b03ce88471ba04b47e89e8c29.jpg')] bg-[length:300px_auto] bg-repeat bg-right-top"
          >
            {/* Fine architectural guidelines background lines */}
            <div className="absolute inset-0 grid grid-cols-3 pointer-events-none opacity-5">
              <div className="border-r border-gold"></div>
              <div className="border-r border-gold"></div>
              <div></div>
            </div>

            <nav className="flex flex-col gap-6 relative z-10">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    className={`font-serif text-3xl font-light tracking-wide hover:text-gold block transition-colors duration-300 ${pathname === link.href ? "text-gold" : "text-matte-black"
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex flex-col gap-6 relative z-10 border-t border-gold/15 pt-6">
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400">
                Aura Engineering MEP
              </p>
              <div className="flex gap-4">
                <a
                  href="https://wa.me/7256815100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-green-500 hover:bg-green-600 text-white font-sans text-xs font-semibold tracking-widest uppercase transition-colors"
                >
                  <FaWhatsapp className="text-base" /> WhatsApp Us
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full py-3 border border-matte-black text-matte-black font-sans text-xs font-semibold tracking-widest uppercase hover:bg-matte-black hover:text-white transition-all"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
