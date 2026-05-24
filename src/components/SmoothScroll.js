"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);
  const btnRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  // =========================
  // INIT LENIS + GSAP
  // =========================
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);

      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 10);
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    lenis.on("scroll", ({ scroll }) => {
      setVisible(scroll > 300);
    });

    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(update);
    };
  }, []);

  // =========================
  // SCROLL TO TOP ON ROUTE CHANGE
  // =========================
  useEffect(() => {
    if (!lenisRef.current) return;

    // Smooth reset on navigation
    lenisRef.current.scrollTo(0, {
      duration: 0.8,
      easing: (t) =>
        Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    window.scrollTo(0, 0);

    // important for GSAP recalculation
    ScrollTrigger.refresh();
  }, [pathname]);

  // =========================
  // BUTTON SHOW/HIDE ANIMATION
  // =========================
  useEffect(() => {
    if (!btnRef.current) return;

    if (visible) {
      gsap.to(btnRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.45,
        ease: "back.out(1.7)",
        pointerEvents: "auto",
      });
    } else {
      gsap.to(btnRef.current, {
        opacity: 0,
        y: 24,
        scale: 0.8,
        duration: 0.3,
        ease: "power2.in",
        pointerEvents: "none",
      });
    }
  }, [visible]);

  // =========================
  // SCROLL TO TOP
  // =========================
  const scrollToTop = () => {
    lenisRef.current?.scrollTo(0, {
      duration: 1.6,
      easing: (t) =>
        Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };

  return (
    <>
      {children}

      {/* SCROLL TO TOP BUTTON */}
      <button
        ref={btnRef}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          zIndex: 9999,
          width: "48px",
          height: "48px",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #000000 0%, #C8A45D 100%)",
          boxShadow:
            "0 10px 30px rgba(200,164,93,0.35)",
          opacity: 0,
          transform: "translateY(24px) scale(0.8)",
          pointerEvents: "none",
        }}
        onMouseEnter={(e) => {
          gsap.to(e.currentTarget, {
            scale: 1.1,
            duration: 0.2,
          });
        }}
        onMouseLeave={(e) => {
          gsap.to(e.currentTarget, {
            scale: 1,
            duration: 0.2,
          });
        }}
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 15V5M10 5L5 10M10 5L15 10"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  );
} 