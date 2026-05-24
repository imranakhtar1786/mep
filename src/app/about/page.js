"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FiCheckCircle,
  FiShield,
  FiTrendingUp,
  FiSettings,
} from "react-icons/fi";

export default function About() {
  const pageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // HERO ANIMATION
      gsap.from(".hero-overlay", {
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

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
        duration: 1.4,
        delay: 0.4,
        ease: "power4.out",
      });

      gsap.from(".hero-line", {
        width: 0,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
      });

      // NORMAL REVEAL
      gsap.utils.toArray(".about-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // FEATURE CARDS
      gsap.fromTo(
        ".feature-card",
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // DIRECTORS
      gsap.fromTo(
        ".director-card",
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".director-section",
            start: "top 80%",
          },
        }
      );

      ScrollTrigger.refresh();
    }, pageRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const features = [
    {
      icon: <FiSettings className="text-[#C8A45D] text-2xl" />,
      title: "Technical Excellence",
      desc: "Advanced MEP systems engineered for modern smart infrastructure.",
    },
    {
      icon: <FiShield className="text-[#C8A45D] text-2xl" />,
      title: "Reliable Execution",
      desc: "Precision planning and seamless project implementation.",
    },
    {
      icon: <FiTrendingUp className="text-[#C8A45D] text-2xl" />,
      title: "Sustainable Systems",
      desc: "Energy-efficient HVAC and smart utility engineering.",
    },
    {
      icon: <FiCheckCircle className="text-[#C8A45D] text-2xl" />,
      title: "Global Standards",
      desc: "Built according to international engineering compliance.",
    },
  ];

  return (
    <div
      ref={pageRef}
      className="bg-white text-black overflow-hidden"
    >
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80&w=1600')",
          }}
        />

        {/* OVERLAY */}
        <div className="hero-overlay absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <p className="hero-subtitle text-[#C8A45D] uppercase tracking-[0.35em] text-xs md:text-sm mb-6">
            About Our Company
          </p>

          <h1 className="hero-title text-white text-4xl sm:text-5xl md:text-7xl leading-tight font-light">
            Engineering the Future of
            <span className="italic text-[#C8A45D]">
              {" "}
              Smart Infrastructure
            </span>
          </h1>

          <div className="hero-line w-24 h-[1px] bg-[#C8A45D] mx-auto mt-8"></div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* TEXT */}
          <div className="about-reveal">
            <p className="text-[#C8A45D] uppercase tracking-[0.3em] text-xs mb-4">
              Company Overview
            </p>

            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              Premium MEP Engineering Solutions
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              We provide advanced Mechanical, Electrical, and Plumbing
              engineering systems for commercial, residential, and industrial
              infrastructure projects.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Combining precision engineering with sustainability and modern
              architecture for future-ready developments.
            </p>
          </div>

          {/* IMAGE */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="about-reveal relative overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&q=80&w=1200"
              alt="About"
              className="w-full h-[500px] object-cover"
            />

            <div className="absolute inset-0 bg-black/10"></div>

            <div className="absolute inset-5 border border-[#C8A45D]/40"></div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#faf7f2] py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* HEADER */}
          <div className="text-center mb-20 about-reveal">
            <p className="text-[#C8A45D] uppercase tracking-[0.3em] text-xs mb-4">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-light">
              Engineering Excellence
            </h2>
          </div>

          {/* GRID */}
          <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="feature-card opacity-0 bg-white border border-black/5 p-8 hover:border-[#C8A45D]/40 hover:-translate-y-2 transition-all duration-500 shadow-sm"
              >
                <div className="mb-5">{item.icon}</div>

                <h3 className="text-xl mb-4 font-medium">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTORS */}
      <section className="director-section max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="text-center mb-20 about-reveal">
          <p className="text-[#C8A45D] uppercase tracking-[0.3em] text-xs mb-4">
            Leadership
          </p>

          <h2 className="text-4xl md:text-5xl font-light">
            Meet The Directors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* DIRECTOR 1 */}
          <div className="director-card bg-white border border-black/10 p-10">
            <div className="mb-6 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800"
                alt="Aman Kushwaha"
                className="w-full h-[420px] object-cover"
              />
            </div>

            <h3 className="text-3xl font-light mb-2">
              Aman Kushwaha
            </h3>

            <p className="text-[#C8A45D] uppercase tracking-[0.25em] text-xs mb-5">
              ME
            </p>

            <p className="text-gray-600 leading-relaxed text-sm">
              Leading mechanical engineering operations with expertise in HVAC
              and energy systems.
            </p>
          </div>

          {/* DIRECTOR 2 */}
          <div className="director-card bg-white border border-black/10 p-10">
            <div className="mb-6 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
                alt="Savan Kumar"
                className="w-full h-[420px] object-cover"
              />
            </div>

            <h3 className="text-3xl font-light mb-2">
              Savan Kumar
            </h3>

            <p className="text-[#C8A45D] uppercase tracking-[0.25em] text-xs mb-5">
              EE
            </p>

            <p className="text-gray-600 leading-relaxed text-sm">
              Managing electrical engineering systems focused on scalable smart
              infrastructure.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}