"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight, FiActivity, FiCpu, FiCompass } from "react-icons/fi";
import { FaBuilding, FaHotel, FaIndustry } from "react-icons/fa";

export default function Home() {
  const containerRef = useRef(null);
  const heroTextRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero title typing/fading animation
    gsap.fromTo(
      heroTextRef.current.querySelectorAll(".char-fade"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.1, ease: "power4.out" }
    );

    // Stats counter animation
    const statsElements = statsRef.current?.querySelectorAll(".stat-number");
    if (statsElements) {
      statsElements.forEach((stat) => {
        const targetValue = parseInt(stat.getAttribute("data-target"), 10);
        gsap.fromTo(
          stat,
          { textContent: 0 },
          {
            textContent: targetValue,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: stat,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }

    // Scroll reveal for sections
    const reveals = document.querySelectorAll(".scroll-reveal");
    reveals.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Framer Motion scroll hook for hero parallax
  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.4]);

  const stats = [
    { number: "25", suffix: "+", label: "Years of Engineering Excellence", target: 25 },
    { number: "450", suffix: "+", label: "Premium Projects Completed", target: 450 },
    { number: "12", suffix: "", label: "Global Offices & Hubs", target: 12 },
    { number: "99", suffix: ".9%", label: "MEP System Operational Uptime", target: 99 },
  ];

  const previewServices = [
    {
      icon: <FiCompass className="text-gold text-2xl" />,
      title: "Mechanical Systems",
      desc: "Precision heating, cooling, ventilation, and energy distribution systems designed to scale.",
      link: "/services#mechanical",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    },
    {
      icon: <FiActivity className="text-gold text-2xl" />,
      title: "Electrical Infrastructure",
      desc: "Robust power grid designs, sustainable illumination, backup grids, and safety schematics.",
      link: "/services#electrical",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    },
    {
      icon: <FiCpu className="text-gold text-2xl" />,
      title: "Smart Building Automation",
      desc: "Integrated BMS & IoT systems linking sensors, control panels, and automation grids.",
      link: "/services#automation",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const featuredProjects = [
    {
      title: "The Obsidian Tower",
      category: "Commercial & Corporate",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      icon: <FaBuilding className="text-white text-lg" />,
    },
    {
      title: "Luminary Resort & Spa",
      category: "Luxury Hotel & Hospitality",
      location: "Maldives",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800",
      icon: <FaHotel className="text-white text-lg" />,
    },
    {
      title: "AeroSmart Logistics Hangar",
      category: "Industrial Facility",
      location: "Munich, Germany",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
      icon: <FaIndustry className="text-white text-lg" />,
    },
  ];

  return (
    <div className="relative overflow-hidden w-full bg-white" ref={containerRef}>

      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* Background Parallax Visual */}
        <motion.div
          style={{ y: heroBgY, opacity: heroOpacity }}
          className="absolute inset-0 z-0 bg-cover bg-center"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600')",
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />

          {/* Bottom Black Shadow Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </motion.div>

        {/* Fine Architectural Grid Lines */}
        <div className="absolute inset-0 z-1 pointer-events-none opacity-10">
          <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-4 px-6 md:px-12">
            <div className="border-r border-white h-full"></div>
            <div className="border-r border-white h-full"></div>
            <div className="border-r border-white h-full"></div>
            <div className="h-full"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-white mt-16" ref={heroTextRef}>
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gold font-sans text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-4"
            >
              Mastery in Engineering Design
            </motion.p>

            <h1 className="text-4xl md:text-7xl font-light tracking-wide leading-tight mb-8">
              <span className="char-fade block">Engineering</span>
              <span className="char-fade block text-gold italic">Intelligent</span>
              <span className="char-fade block">Infrastructure</span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link
                href="/services"
                className="btn-gold px-8 py-4 bg-gold text-matte-black font-sans text-xs font-bold tracking-[0.2em] uppercase transition-all hover:bg-gold-dark hover:border-gold-dark text-center"
              >
                Our Services
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 border border-white text-white font-sans text-xs font-bold tracking-[0.2em] uppercase transition-all hover:bg-white hover:text-matte-black text-center"
              >
                View Portfolio
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          >
            <span className="font-sans text-[9px] tracking-[0.25em] text-gray-400 uppercase">Scroll Down</span>
            <div className="w-[1px] h-10 bg-gold/50"></div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section
        className="relative z-10 py-10 md:py-10 bg-[#f8f5ef] border-t border-b border-[#C8A45D]/60 overflow-hidden"
        ref={statsRef}
      >

        {/* Grid Background */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(200,164,93,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(200,164,93,0.35)_1px,transparent_1px)] bg-[size:90px_90px]" />

        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C8A45D]/10 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#C8A45D]/10">

            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center p-4 ${index > 0 ? "pt-8 md:pt-4" : ""
                  }`}
              >

                <div className="font-serif text-3xl md:text-5xl text-[#C8A45D] font-light mb-3 flex items-center">

                  <span
                    className="stat-number"
                    data-target={stat.target}
                  >
                    0
                  </span>

                  <span>{stat.suffix}</span>

                </div>

                <div className="text-[10px] md:text-xs tracking-[0.18em] uppercase text-gray-600 leading-normal max-w-[160px]">
                  {stat.label}
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* 3. SERVICES PREVIEW SECTION */}
      <section className="bg-warm-white py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Section Header */}
          <div className="max-w-2xl mb-20 scroll-reveal">
            <p className="text-gold font-sans text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              MEP Engineering Capabilities
            </p>
            <h2 className="text-3xl md:text-5xl font-light tracking-wide leading-tight text-matte-black mb-6">
              Silent Precision, Integrated Excellence
            </h2>
            <div className="w-16 h-[1px] bg-gold mb-6"></div>
            <p className="font-sans text-sm font-light text-gray-500 leading-relaxed max-w-lg">
              We engineer the essential systems that bring architectural visions to life. Dynamic systems constructed with absolute craftsmanship, performance, and durability.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewServices.map((service, index) => (
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                key={service.title}
                className="glass-card flex flex-col justify-between overflow-hidden relative group h-[480px]"
              >
                {/* Visual Image Background on Hover */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-matte-black/85" />
                </div>

                <div className="p-8 relative z-10 flex flex-col gap-6 h-full justify-between">
                  <div className="flex flex-col gap-6">
                    <div className="w-12 h-12 rounded-none fine-border-gold flex items-center justify-center group-hover:bg-white transition-colors duration-500">
                      <span className="group-hover:text-matte-black transition-colors duration-500">
                        {service.icon}
                      </span>
                    </div>

                    <h3 className="text-2xl font-light tracking-wide text-matte-black group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="font-sans text-xs font-light text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                      {service.desc}
                    </p>
                  </div>

                  <Link
                    href={service.link}
                    className="flex items-center gap-3 font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-gold group-hover:text-white transition-colors duration-300 w-fit"
                  >
                    Explore System <FiArrowRight className="text-xs transition-transform group-hover:translate-x-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center scroll-reveal">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 font-sans text-xs font-bold tracking-[0.2em] uppercase text-matte-black hover:text-gold transition-colors duration-300"
            >
              View All Services <FiArrowRight />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. FEATURED PROJECTS */}
      <section className="bg-white py-24 md:py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 scroll-reveal">
            <div className="max-w-xl">
              <p className="text-gold font-sans text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                Selected Work
              </p>
              <h2 className="text-3xl md:text-5xl font-light tracking-wide leading-tight text-matte-black">
                Architectural Icons Engineered By Aura
              </h2>
            </div>
            <Link
              href="/projects"
              className="mt-6 md:mt-0 inline-flex items-center gap-3 font-sans text-xs font-bold tracking-[0.2em] uppercase border-b border-gold pb-1 text-matte-black hover:text-gold transition-colors duration-300"
            >
              Explore Portfolio <FiArrowRight />
            </Link>
          </div>

          {/* Projects Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <div
                key={project.title}
                className="scroll-reveal relative h-[500px] group overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:grayscale-0"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/30 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Thin gold structural border */}
                <div className="absolute inset-4 border border-gold/15 pointer-events-none group-hover:border-gold/45 transition-colors duration-500" />

                {/* Project Info */}
                <div className="absolute bottom-8 left-8 right-8 z-10 flex justify-between items-end">
                  <div className="flex flex-col gap-2">
                    <span className="font-sans text-[9px] font-semibold tracking-[0.2em] uppercase text-gold">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-light text-white tracking-wide">
                      {project.title}
                    </h3>
                    <span className="font-sans text-[10px] text-gray-400 font-light tracking-wide">
                      {project.location}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gold/10 backdrop-blur-sm border border-gold/30 flex items-center justify-center text-white group-hover:bg-gold group-hover:text-matte-black transition-all duration-500">
                    {project.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[#f8f5ef] border-t border-[#C8A45D]/20">

        {/* Luxury Grid Background */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(200,164,93,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(200,164,93,0.35)_1px,transparent_1px)] bg-[size:100px_100px]" />

        {/* Soft Gradient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C8A45D]/10 blur-3xl rounded-full" />

        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10 flex flex-col items-center gap-8 scroll-reveal">

          <p className="text-[#C8A45D] text-xs font-semibold tracking-[0.3em] uppercase">
            Let's Collaborate
          </p>

          <h2 className="text-4xl md:text-6xl font-light tracking-wide leading-tight max-w-3xl text-black">
            Ready to Architect Tomorrow's Infrastructure?
          </h2>

          <div className="w-16 h-[1px] bg-[#C8A45D]" />

          <p className="text-sm font-light text-gray-600 leading-relaxed max-w-xl">
            Inquire today to schedule a detailed design and consulting workshop.
            Partner with the leaders in MEP system engineering.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">

            <Link
              href="/contact"
              className="px-10 py-4 bg-black text-white text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#C8A45D] hover:text-black"
            >
              Start Consultation
            </Link>

            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border border-black/15 text-black text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-black hover:text-white flex items-center justify-center gap-2"
            >
              Chat on WhatsApp
            </a>

          </div>
        </div>
      </section>

    </div>
  );
}
