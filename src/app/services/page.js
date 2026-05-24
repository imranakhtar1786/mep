"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MainSections() {
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".section");

      if (!sections.length) return;

      ScrollTrigger.matchMedia({
        // =========================
        // DESKTOP STACK ANIMATION
        // =========================
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
              scale: 0.95,
              opacity: 0.96,
              ease: "none",
            });
          });
        },

        // =========================
        // MOBILE RESET
        // =========================
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
      <div className="w-full block">

        {/* ========================= */}
        {/* SECTION 1 */}
        {/* ========================= */}
        <div className="w-full relative">
          <section className="section relative z-10 w-full h-auto md:h-screen bg-white flex items-center overflow-hidden">
            <div className="section-inner relative z-20 w-full h-auto md:h-full flex flex-col-reverse md:flex-row">

              {/* TEXT */}
              <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-20 py-8 md:py-16 text-left">
                <span className="text-[11px] sm:text-sm tracking-[0.25em] uppercase text-[#C8A45D] mb-3 md:mb-4">
                  Mechanical
                </span>

                <h2 className="text-3xl sm:text-4xl md:text-6xl text-black leading-tight mb-5 md:mb-6 font-serif">
                  Smart Mechanical Systems
                </h2>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-md mb-8 md:mb-10">
                  Advanced HVAC and energy-efficient infrastructure solutions
                  for modern residential and commercial projects.
                </p>

                <a
                  href="/services/mechanical"
                  className="inline-block text-[#C8A45D] border-b border-[#C8A45D] pb-2 text-[11px] sm:text-sm uppercase tracking-[0.2em] w-fit"
                >
                  Explore
                </a>
              </div>

              {/* IMAGE */}
              <div className="w-full md:w-1/2 h-[320px] sm:h-[420px] md:h-screen">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200"
                  alt="Mechanical"
                  className="w-full h-full object-cover"
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
              <div className="w-full md:w-1/2 h-[320px] sm:h-[420px] md:h-screen">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                  alt="Electrical"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-20 py-8 md:py-16 text-left md:text-right">
                <span className="text-[11px] sm:text-sm tracking-[0.25em] uppercase text-[#C8A45D] mb-3 md:mb-4">
                  Electrical
                </span>

                <h2 className="text-3xl sm:text-4xl md:text-6xl text-black leading-tight mb-5 md:mb-6 font-serif">
                  Intelligent Power Networks
                </h2>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-md md:ml-auto mb-8 md:mb-10">
                  High-performance electrical infrastructure engineered for
                  smart and scalable modern buildings.
                </p>

                <a
                  href="/services/electrical"
                  className="inline-block text-[#C8A45D] border-b border-[#C8A45D] pb-2 text-[11px] sm:text-sm uppercase tracking-[0.2em] w-fit md:ml-auto"
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
                <span className="text-[11px] sm:text-sm tracking-[0.25em] uppercase text-[#C8A45D] mb-3 md:mb-4">
                  Plumbing
                </span>

                <h2 className="text-3xl sm:text-4xl md:text-6xl text-black leading-tight mb-5 md:mb-6 font-serif">
                  Sustainable Water Systems
                </h2>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-md mb-8 md:mb-10">
                  Smart plumbing infrastructure with efficient water management
                  and sustainable engineering systems.
                </p>

                <a
                  href="/services/plumbing"
                  className="inline-block text-[#C8A45D] border-b border-[#C8A45D] pb-2 text-[11px] sm:text-sm uppercase tracking-[0.2em] w-fit"
                >
                  Explore
                </a>
              </div>

              {/* IMAGE */}
              <div className="w-full md:w-1/2 h-[320px] sm:h-[420px] md:h-screen">
                <img
                  src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=1200"
                  alt="Plumbing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}