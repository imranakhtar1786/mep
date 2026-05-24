"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MainSections() {
  const container = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // =========================
      // HERO ANIMATION
      // =========================
      gsap.from(".hero-subtitle", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".hero-title", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        delay: 0.4,
        ease: "power3.out",
      });

      gsap.from(".hero-desc", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.7,
        ease: "power3.out",
      });

      gsap.from(".hero-btn", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.to(".hero-image", {
        scale: 1.1,
        duration: 8,
        ease: "none",
      });

      // =========================
      // SECTION STACK ANIMATION
      // =========================
      const sections = gsap.utils.toArray(".section");

      if (!sections.length) return;

      ScrollTrigger.matchMedia({
        "(min-width: 768px)": () => {
          const desktopSections = [...sections];
          desktopSections.pop();

          desktopSections.forEach((panel) => {
            let tl = gsap.timeline({
              scrollTrigger: {
                trigger: panel,
                start: "top top",
                end: "+=100%",
                scrub: true,
                pin: true,
                pinSpacing: false,
              },
            });

            tl.to(panel, {
              scale: 0.96,
              opacity: 0.9,
              ease: "none",
            });

            gsap.from(panel.querySelectorAll(".fade-up"), {
              y: 80,
              opacity: 0,
              duration: 1,
              stagger: 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 70%",
              },
            });
          });
        },

        // MOBILE RESET
        "(max-width: 767px)": () => {
          ScrollTrigger.getAll().forEach((trigger) =>
            trigger.kill()
          );

          gsap.set(".section", {
            clearProps: "all",
          });

          gsap.set(".section-inner", {
            clearProps: "all",
          });

          gsap.set(".section img", {
            clearProps: "all",
          });
        },
      });

      ScrollTrigger.refresh();
    }, container);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={container}
      className="relative w-full overflow-hidden bg-white"
    >
      {/* ========================= */}
      {/* HERO SECTION */}
      {/* ========================= */}
      <section
        ref={heroRef}
        className="relative w-full h-screen overflow-hidden flex items-center"
      >
        {/* BG IMAGE */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80&w=1800"
            alt="Hero"
            className="hero-image w-full h-full object-cover scale-105"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/55" />

          {/* GOLD GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 w-full">
          <div className="max-w-3xl">

            <span className="hero-subtitle inline-block text-[#C8A45D] uppercase tracking-[0.3em] text-xs md:text-sm mb-6 mt-20">
              Premium MEP Engineering
            </span>

            <h1 className="hero-title text-5xl sm:text-6xl md:text-8xl leading-none text-white font-serif mb-8">
              Intelligent
              <br />
              Infrastructure
            </h1>

            <p className="hero-desc text-white/80 text-sm md:text-lg leading-relaxed max-w-xl mb-10">
              Advanced Mechanical, Electrical & Plumbing solutions
              engineered for modern residential and commercial
              developments.
            </p>
          </div>
        </div>

        {/* SCROLL */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <div className="w-[1px] h-16 bg-white/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-8 bg-[#C8A45D] animate-bounce" />
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* SECTION 1 */}
      {/* ========================= */}
      <div className="w-full relative mt-20">
        <section className="section relative z-10 w-full h-auto md:h-screen bg-white flex items-center overflow-hidden">
          <div className="section-inner relative z-20 w-full h-auto md:h-full flex flex-col-reverse md:flex-row">

            {/* TEXT */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-20 py-8 md:py-16 text-left">

              <span className="fade-up text-[11px] sm:text-sm tracking-[0.25em] uppercase text-[#C8A45D] mb-3 md:mb-4">
                Mechanical
              </span>

              <h2 className="fade-up text-3xl sm:text-4xl md:text-6xl text-black leading-tight mb-5 md:mb-6 font-serif">
                Smart Mechanical Systems
              </h2>

              <p className="fade-up text-sm md:text-base text-gray-600 leading-relaxed max-w-md mb-8 md:mb-10">
                Advanced HVAC and energy-efficient infrastructure
                solutions for modern residential and commercial
                projects.
              </p>

              <a
                href="/services/mechanical"
                className="fade-up inline-block text-[#C8A45D] border-b border-[#C8A45D] pb-2 text-[11px] sm:text-sm uppercase tracking-[0.2em] w-fit"
              >
                Explore
              </a>
            </div>

            {/* IMAGE */}
            <div className="w-full md:w-1/2 h-[320px] sm:h-[420px] md:h-screen overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200"
                alt="Mechanical"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>
      </div>

      {/* ========================= */}
      {/* SECTION 2 */}
      {/* ========================= */}
      <div className="w-full relative">
        <section className="section relative z-10 w-full h-auto md:h-screen bg-white flex items-center overflow-hidden">
          <div className="section-inner relative z-20 w-full h-auto md:h-full flex flex-col md:flex-row">

            {/* IMAGE */}
            <div className="w-full md:w-1/2 h-[320px] sm:h-[420px] md:h-screen overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                alt="Electrical"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* TEXT */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-20 py-8 md:py-16 text-left md:text-right">

              <span className="fade-up text-[11px] sm:text-sm tracking-[0.25em] uppercase text-[#C8A45D] mb-3 md:mb-4">
                Electrical
              </span>

              <h2 className="fade-up text-3xl sm:text-4xl md:text-6xl text-black leading-tight mb-5 md:mb-6 font-serif">
                Intelligent Power Networks
              </h2>

              <p className="fade-up text-sm md:text-base text-gray-600 leading-relaxed max-w-md md:ml-auto mb-8 md:mb-10">
                High-performance electrical infrastructure engineered
                for smart and scalable modern buildings.
              </p>

              <a
                href="/services/electrical"
                className="fade-up inline-block text-[#C8A45D] border-b border-[#C8A45D] pb-2 text-[11px] sm:text-sm uppercase tracking-[0.2em] w-fit md:ml-auto"
              >
                Explore
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* ========================= */}
      {/* SECTION 3 */}
      {/* ========================= */}
      <div className="w-full relative">
        <section className="section relative z-10 w-full h-auto md:h-screen bg-white flex items-center overflow-hidden">
          <div className="section-inner relative z-20 w-full h-auto md:h-full flex flex-col-reverse md:flex-row">

            {/* TEXT */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-20 py-8 md:py-16 text-left">

              <span className="fade-up text-[11px] sm:text-sm tracking-[0.25em] uppercase text-[#C8A45D] mb-3 md:mb-4">
                Plumbing
              </span>

              <h2 className="fade-up text-3xl sm:text-4xl md:text-6xl text-black leading-tight mb-5 md:mb-6 font-serif">
                Sustainable Water Systems
              </h2>

              <p className="fade-up text-sm md:text-base text-gray-600 leading-relaxed max-w-md mb-8 md:mb-10">
                Smart plumbing infrastructure with efficient water
                management and sustainable engineering systems.
              </p>

              <a
                href="/services/plumbing"
                className="fade-up inline-block text-[#C8A45D] border-b border-[#C8A45D] pb-2 text-[11px] sm:text-sm uppercase tracking-[0.2em] w-fit"
              >
                Explore
              </a>
            </div>

            {/* IMAGE */}
            <div className="w-full md:w-1/2 h-[320px] sm:h-[420px] md:h-screen overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=1200"
                alt="Plumbing"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}