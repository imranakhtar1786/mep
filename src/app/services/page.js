"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MainSections() {
  const container = useRef(null);
  const heroRef = useRef(null);

  const services = [
    {
      category: "Electrical Systems",
      title: "Intelligent Power Networks",
      desc: "Complete LT/HT electrical infrastructure, lighting automation, smart power distribution and energy-efficient systems for modern buildings.",
      image: "/elecrical.png",
      link: "/services/electrical",
    },

    {
      category: "HVAC Engineering",
      title: "Smart Climate Solutions",
      desc: "Advanced HVAC and ventilation systems engineered for thermal comfort, airflow optimization and sustainable performance.",
      image: "/hvac.jpg",
      link: "/services/hvac",
    },

    {
      category: "Plumbing Systems",
      title: "Sustainable Water Systems",
      desc: "Efficient plumbing and drainage infrastructure with smart water management and sustainable engineering solutions.",
      image: "/pul.jpg",
      link: "/services/plumbing",
    },

    {
      category: "Fire Fighting Systems",
      title: "Advanced Fire Protection",
      desc: "Integrated hydrant, sprinkler, smoke extraction and emergency response systems for complete building safety.",
      image: "/fire.jpg",
      link: "/services/fire-fighting",
    },

    {
      category: "Solar Energy Solutions",
      title: "Renewable Energy Infrastructure",
      desc: "Smart solar energy systems with rooftop integration, sustainable power optimization and clean energy solutions.",
      image: "/solr.jpg",
      link: "/services/solar",
    },

    {
      category: "Industrial Automation",
      title: "Smart Industrial Automation",
      desc: "IoT-enabled industrial automation, monitoring systems and intelligent operational control infrastructure.",
      image: "/auto.jpg",
      link: "/services/automation",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      // HERO ANIMATION
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
        scale: 1.08,
        duration: 8,
        ease: "none",
      });

      // SECTION ANIMATIONS
      const sections = gsap.utils.toArray(".section");

      sections.forEach((panel) => {

        gsap.from(panel.querySelectorAll(".fade-up"), {
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 75%",
          },
        });

        gsap.from(panel.querySelector(".service-image"), {
          scale: 1.2,
          opacity: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 75%",
          },
        });
      });

      // STACK EFFECT DESKTOP
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": () => {

          const desktopSections = [...sections];
          desktopSections.pop();

          desktopSections.forEach((panel) => {

            gsap.timeline({
              scrollTrigger: {
                trigger: panel,
                start: "top top",
                end: "+=100%",
                scrub: true,
                pin: true,
                pinSpacing: false,
              },
            }).to(panel, {
              scale: 0.96,
              opacity: 0.92,
              ease: "none",
            });
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
      className="relative w-full overflow-hidden bg-white mb-5"
    >

      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative w-full h-screen overflow-hidden flex items-center"
      >

        {/* BG IMAGE */}
        <div className="absolute inset-0">

          <img
            src="/banner.png"
            alt="MEP Engineering"
            className="hero-image w-full h-full object-cover scale-105"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 w-full">

          <div className="max-w-3xl mt-20">

            <h1 className="hero-title text-5xl sm:text-6xl md:text-8xl leading-none text-white font-serif mb-8">
              Smart MEP
              <br />
              Infrastructure
            </h1>

            <p className="hero-desc text-white/80 text-sm md:text-lg leading-relaxed max-w-xl mb-10">
              Premium Electrical, HVAC, Plumbing, Fire Fighting,
              Solar and Automation engineering solutions for
              modern infrastructure projects.
            </p>

          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <div className="w-[1px] h-16 bg-white/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-8 bg-[#C8A45D] animate-bounce" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      {/* SERVICES */}
      {services.map((service, index) => (
        <div
          key={service.title}
          className={`w-full relative ${index === 0 ? "mt-10 md:mt-20" : ""
            }`}
        >
          <section className="section relative z-10 w-full h-auto md:h-screen bg-white flex items-center overflow-hidden">

            {/* MOBILE = IMAGE TOP / TEXT BOTTOM */}
            {/* DESKTOP = ALTERNATE LAYOUT */}
            <div
              className={`section-inner relative z-20 w-full h-auto md:h-full flex flex-col ${index % 2 === 0
                ? "md:flex-row"
                : "md:flex-row-reverse"
                }`}
            >

              {/* IMAGE */}
              <div className="w-full md:w-1/2 h-[320px] sm:h-[420px] md:h-screen overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* TEXT */}
              <div
                className={`w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-20 py-10 md:py-16 ${index % 2 !== 0
                  ? "text-left md:text-right"
                  : "text-left"
                  }`}
              >

                <span className="fade-up text-[11px] sm:text-sm tracking-[0.25em] uppercase text-[#C8A45D] mb-3 md:mb-4">
                  {service.category}
                </span>

                <h2 className="fade-up text-3xl sm:text-4xl md:text-6xl text-black leading-tight mb-5 md:mb-6 font-serif">
                  {service.title}
                </h2>

                <p
                  className={`fade-up text-sm md:text-base text-gray-600 leading-relaxed max-w-md mb-8 md:mb-10 ${index % 2 !== 0 ? "md:ml-auto" : ""
                    }`}
                >
                  {service.desc}
                </p>

                {/* <a
                  href={service.link}
                  className={`fade-up inline-block text-[#C8A45D] border-b border-[#C8A45D] pb-2 text-[11px] sm:text-sm uppercase tracking-[0.2em] w-fit ${index % 2 !== 0 ? "md:ml-auto" : ""
                    }`}
                >
                  Explore
                </a> */}

              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}