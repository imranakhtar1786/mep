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
      title: "Integrated MEP Solutions",
      desc: "Complete Electrical, HVAC, Plumbing and Fire Fighting engineering services.",
    },

    {
      icon: <FiShield className="text-[#C8A45D] text-2xl" />,
      title: "Reliable Project Execution",
      desc: "Efficient planning and seamless execution for residential and commercial projects.",
    },

    {
      icon: <FiTrendingUp className="text-[#C8A45D] text-2xl" />,
      title: "Energy Efficient Systems",
      desc: "Modern sustainable infrastructure focused on performance and energy optimization.",
    },

    {
      icon: <FiCheckCircle className="text-[#C8A45D] text-2xl" />,
      title: "Quality Engineering Standards",
      desc: "Delivering precision engineering solutions with safety and quality compliance.",
    },
  ];

  return (
    <div
      ref={pageRef}
      className="bg-[linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.6)),url('https://i.pinimg.com/736x/f4/30/50/f430503b03ce88471ba04b47e89e8c29.jpg')] bg-[length:300px_auto] bg-repeat bg-right-top text-black overflow-hidden"
    >

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('/pul.jpg')",
          }}
        />

        {/* OVERLAY */}
        <div className="hero-overlay absolute inset-0 bg-black/65" />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6 max-w-5xl">

          <p className="hero-subtitle text-[#C8A45D] uppercase tracking-[0.35em] text-xs md:text-sm mb-6">
            POWERON ELECTROTECH SOLUTIONS PRIVATE LIMITED
          </p>

          <h1 className="hero-title text-white text-4xl sm:text-5xl md:text-7xl leading-tight font-light">
            Engineering Modern
            <span className="italic text-[#C8A45D]">
              {" "}MEP Infrastructure
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
              Smart Engineering For Future Infrastructure
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              POWERON ELECTROTECH SOLUTIONS PRIVATE LIMITED delivers
              advanced MEP engineering services including Electrical,
              HVAC, Plumbing, Fire Fighting, Solar Energy and Industrial
              Automation systems.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We focus on innovative engineering, sustainable infrastructure,
              and high-performance systems for residential, commercial and
              industrial developments.
            </p>
          </div>

          {/* IMAGE */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="about-reveal relative overflow-hidden rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.25)]"
          >

            <img
              src="/elecrical.png"
              alt="About"
              className="w-full h-[500px] object-cover rounded-3xl"
            />

            <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>

            <div className="absolute inset-5 border border-[#C8A45D]/40 rounded-2xl"></div>

          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="pt-5 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* HEADER */}
          <div className="text-center mb-20 about-reveal">

            <p className="text-[#C8A45D] uppercase tracking-[0.3em] text-xs mb-4">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-light">
              Excellence In MEP Engineering
            </h2>
          </div>

          {/* GRID */}
          <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">

            {features.map((item, index) => (
              <div
                key={index}
                className="feature-card opacity-0 bg-white/95 backdrop-blur-sm border border-black/5 p-8 rounded-3xl hover:border-[#C8A45D]/40 hover:-translate-y-2 transition-all duration-500 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
              >

                <div className="mb-5">
                  {item.icon}
                </div>

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
      <section className="director-section max-w-7xl mx-auto px-6 mb-10">

        <div className="text-center mb-20 about-reveal">

          <p className="text-[#C8A45D] uppercase tracking-[0.3em] text-xs mb-4">
            Leadership Team
          </p>

          <h2 className="text-4xl md:text-5xl font-light">
            Driving Engineering Innovation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* DIRECTOR 1 */}
          <div className="director-card bg-white border border-black/10 p-10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

            <div className="mb-6 overflow-hidden">
              <img
                src="/s1.jpeg"
                alt="Director"
                className="w-full h-[520px] object-cover"
              />
            </div>

            <h3 className="text-3xl font-light mb-2">
              Savan Kumar
            </h3>

            <p className="text-[#C8A45D] uppercase tracking-[0.25em] text-xs mb-5">
              Electrical Engineering Director
            </p>

            <p className="text-gray-600 leading-relaxed text-sm">
              Managing advanced electrical systems, smart power infrastructure
              and integrated automation solutions for modern developments.
            </p>
          </div>
          <div className="director-card bg-white border border-black/10 p-10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
            <div className="mb-6 overflow-hidden">
              <img
                src="/a.jpeg"
                alt="Director"
                className="w-full h-[520px] object-cover"
              />
            </div>

            <h3 className="text-3xl font-light mb-2">
              Aman Kushwaha
            </h3>

            <p className="text-[#C8A45D] uppercase tracking-[0.25em] text-xs mb-5">
              Mechanical Engineering Director
            </p>

            <p className="text-gray-600 leading-relaxed text-sm">
              Leading HVAC, ventilation and sustainable mechanical
              engineering systems with a focus on high-efficiency infrastructure.
            </p>
          </div>

          {/* DIRECTOR 2 */}


        </div>
      </section>
    </div>
  );
}