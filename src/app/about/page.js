"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiCheckCircle, FiShield, FiTrendingUp, FiSettings } from "react-icons/fi";

export default function About() {
  const scrollRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elReveals = document.querySelectorAll(".about-reveal");
    elReveals.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const features = [
    {
      icon: <FiSettings className="text-gold text-2xl" />,
      title: "Technical Rigor",
      desc: "Our designs undergo multiple rounds of computational simulation and engineering validation.",
    },
    {
      icon: <FiShield className="text-gold text-2xl" />,
      title: "Bespoke Design",
      desc: "Every HVAC grid, power loop, and piping framework is engineered to align with the unique structural contours.",
    },
    {
      icon: <FiTrendingUp className="text-gold text-2xl" />,
      title: "Evolving Sustainability",
      desc: "Optimizing thermal efficiency and water reuse schemes to achieve Net-Zero energy certification standard.",
    },
    {
      icon: <FiCheckCircle className="text-gold text-2xl" />,
      title: "Seamless Compliance",
      desc: "Aligning perfectly with municipal requirements, safety codes, and international structural standards.",
    },
  ];

  return (
    <div className="bg-white text-matte-black pt-28 md:pt-36 overflow-hidden" ref={scrollRef}>
      
      {/* 1. HEADER HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 border-b border-gray-100">
        <p className="text-gold font-sans text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          Corporate Legacy
        </p>
        <h1 className="text-4xl md:text-7xl font-light tracking-wide max-w-4xl leading-tight">
          Crafting the silent lifelines of <span className="text-gold italic">extraordinary</span> architecture.
        </h1>
      </section>

      {/* 2. OVERVIEW & IMAGE */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="about-reveal flex flex-col gap-6">
            <h2 className="text-2xl md:text-4xl font-light tracking-wide text-matte-black">
              Engineering with Architectural Precision
            </h2>
            <div className="w-16 h-[1px] bg-gold"></div>
            <p className="font-sans text-sm font-light text-gray-500 leading-relaxed">
              Founded in 2001, AURA MEP Engineering has stood at the crossroads of artistic architecture and heavy infrastructure logic. We believe that mechanical, electrical, and plumbing engineering isn’t merely about utility—it’s the circulatory system of a building.
            </p>
            <p className="font-sans text-sm font-light text-gray-500 leading-relaxed">
              Our multidisciplinary team of engineers collaborates directly with global architects to integrate complex services within minimal aesthetics. From luxury penthouses in London to mega resorts in the Maldives, we ensure total operational performance.
            </p>
          </div>

          <div className="about-reveal relative h-[450px] overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
              alt="Premium office layout"
              className="w-full h-full object-cover grayscale transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-matte-black/20" />
            <div className="absolute inset-4 border border-gold/20" />
          </div>

        </div>
      </section>

      {/* 3. MISSION & VISION (Glassmorphism Cards) */}
      <section className="bg-soft-gray py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Mission Card */}
            <motion.div
              whileHover={{ y: -6 }}
              className="glass-card p-10 flex flex-col gap-6"
            >
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-gold uppercase">
                Our Mission
              </span>
              <h3 className="text-3xl font-light text-matte-black">
                Pioneering Smart Efficiency
              </h3>
              <p className="font-sans text-xs font-light text-gray-500 leading-relaxed">
                To create highly efficient, smart, and sustainable MEP layouts that maximize architectural freedom while operating at Peak COP (Coefficient of Performance). We strive for a zero-failure rate across all building parameters.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              whileHover={{ y: -6 }}
              className="glass-card p-10 flex flex-col gap-6"
            >
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-gold uppercase">
                Our Vision
              </span>
              <h3 className="text-3xl font-light text-matte-black">
                Redefining MEP Limits
              </h3>
              <p className="font-sans text-xs font-light text-gray-500 leading-relaxed">
                To become the global standard for luxury MEP systems integration, proving that high capacity mechanical grids can co-exist invisibly within minimalist, ultra-high-end physical structures.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20 about-reveal">
          <p className="text-gold font-sans text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            The Aura Benchmark
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide text-matte-black">
            Why Discerning Architects Partner With Us
          </h2>
          <div className="w-16 h-[1px] bg-gold mt-6 mb-6"></div>
          <p className="font-sans text-sm font-light text-gray-500 leading-relaxed">
            We operate beyond standard code lists. Our work is driven by design principles that value efficiency, silence, aesthetics, and longevity.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="about-reveal border border-gray-100 p-8 hover:border-gold/30 transition-colors duration-500 flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-none bg-gold/5 flex items-center justify-center">
                {feat.icon}
              </div>
              <h3 className="text-xl font-medium tracking-wide text-matte-black mt-2">
                {feat.title}
              </h3>
              <p className="font-sans text-xs font-light text-gray-500 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. EXPERIENCE STATS BAR */}
      <section className="bg-matte-black text-white py-16 border-t border-gold/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col md:flex-row justify-between items-center gap-8">
          <h3 className="font-serif text-2xl md:text-3xl font-light tracking-wide max-w-md md:text-left text-center leading-relaxed">
            Delivering engineering solutions built to outlast generations.
          </h3>
          <div className="flex gap-12">
            <div>
              <p className="font-serif text-4xl text-gold font-light">250+</p>
              <p className="font-sans text-[9px] tracking-widest text-gray-400 uppercase mt-1">In-house Engineers</p>
            </div>
            <div className="border-l border-gold/20 pl-12">
              <p className="font-serif text-4xl text-gold font-light">98%</p>
              <p className="font-sans text-[9px] tracking-widest text-gray-400 uppercase mt-1">Client Retention</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
