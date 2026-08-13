"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight, FiActivity, FiCpu, FiCompass } from "react-icons/fi";
import { FaBuilding, FaHotel, FaIndustry } from "react-icons/fa";
import {
  FiZap,
  FiWind,
  FiDroplet,
  FiShield,
  FiSun,
  FiBell,
  FiCamera,
  FiLock,
  FiWifi,
  FiMonitor,
  FiPenTool,
} from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function Home() {
  const containerRef = useRef(null);
  const heroTextRef = useRef(null);
  const statsRef = useRef(null);
  const router = useRouter();


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
    {
      number: "24",
      suffix: "/7",
      label: "Technical Support & Consultation",
      target: 24,
    },
    {
      number: "100",
      suffix: "%",
      label: "Focus on Quality Engineering",
      target: 100,
    },
    {
      number: "05",
      suffix: "+",
      label: "Core MEP Service Solutions",
      target: 5,
    },
    {
      number: "01",
      suffix: "",
      label: "Vision Driven Engineering Brand",
      target: 1,
    },
  ];

  const previewServices = [
    {
      title: "Electrical Systems",
      desc: "Complete LT/HT electrical infrastructure, panel systems, cable routing, lighting automation, and smart power distribution engineered for modern commercial and industrial environments.",
      image:
        "/elecrical.png",
      link: "/services/electrical",
      icon: <FiZap className="text-xl" />,
    },

    {
      title: "HVAC Engineering",
      desc: "Advanced HVAC and ventilation systems designed for thermal comfort, air quality optimization, and energy-efficient climate control solutions.",
      image:
        "/hvac.jpg",
      link: "/services/hvac",
      icon: <FiWind className="text-xl" />,
    },

    {
      title: "Plumbing Systems",
      desc: "Smart plumbing infrastructure with efficient water distribution, drainage systems, pressure management, and sustainable water conservation engineering.",
      image:
        "/pul.jpg",
      link: "/services/plumbing",
      icon: <FiDroplet className="text-xl" />,
    },

    {
      title: "Fire Fighting Systems",
      desc: "Integrated fire safety systems including hydrants, sprinklers, fire alarms, smoke extraction, and emergency protection infrastructure.",
      image:
        "/fire.jpg",
      link: "/services/fire-fighting",
      icon: <FiShield className="text-xl" />,
    },
    {
      title: "Solar Energy Solutions",
      desc: "Renewable solar infrastructure including rooftop solar systems, energy optimization, and sustainable power integration for smart facilities.",
      image:
        "/solr.jpg",
      link: "/services/solar",
      icon: <FiSun className="text-xl" />,
    },

    {
      title: "Industrial Automation",
      desc: "Smart automation systems, industrial controls, IoT integrations, and intelligent monitoring solutions for efficient operational management.",
      image:
        "/auto.jpg",
      link: "/services/automation",
      icon: <FiCpu className="text-xl" />,
    },

    {
      title: "CCTV Systems",
      desc: "Advanced IP and HD CCTV surveillance solutions with remote monitoring, video analytics, recording, and security management.",
      image: "/cctv.jpg",
      link: "/services/cctv",
      icon: <FiCamera className="text-xl" />,
    },

    {
      title: "Access Control Systems",
      desc: "Secure biometric, RFID, facial recognition, and smart card access control systems for enhanced facility security.",
      image: "/acess.jpg",
      link: "/services/access-control",
      icon: <FiLock className="text-xl" />,
    },

    {
      title: "LAN & Structured Cabling",
      desc: "High-speed structured cabling, fiber optic networks, LAN infrastructure, server racks, and enterprise connectivity solutions.",
      image: "/lan.jpg",
      link: "/services/lan",
      icon: <FiWifi className="text-xl" />,
    },

    {
      title: "AV Systems",
      desc: "Professional audio-visual solutions including conference room AV, PA systems, digital signage, and multimedia integration.",
      image: "/av.avif",
      link: "/services/av",
      icon: <FiMonitor className="text-xl" />,
    },

    {
      title: "MEP Design",
      desc: "Complete MEP engineering design, BIM coordination, shop drawings, load calculations, BOQ preparation, and project consultancy.",
      image: "/mep.jpg",
      link: "/services/mep-design",
      icon: <FiPenTool className="text-xl" />,
    },
  ];

  const featuredProjects = [
    {
      title: "ICMR - School of Public Health",
      category: "Electrical Engineering",
      location: "Chennai, India",
      image: "/p1.jpeg", // Placeholder for engineering/construction project image
      icon: <FaBuilding className="text-white text-lg" />,
    },
    {
      title: "Central Footwear Training Institute (CFTI)",
      category: "Electrical Engineering",
      location: "Guindy, Chennai - 600032",
      image: "/cfti1.jpeg",
      icon: <FaBuilding className="text-white text-lg" />,
    },
    {
      title: "Conference Room Electrical Works",
      category: "Electrical Engineering",
      location: "Prayagraj, India",
      image: "/p15.jpeg",
      icon: <FaBuilding className="text-white text-lg" />,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full bg-[linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.6)),url('/bg.jpg')] bg-[length:300px_auto] bg-repeat bg-right-top"
    >

      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center overflow-hidden">

        {/* Background */}
        <motion.div
          style={{ y: heroBgY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >

          <div
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{
              backgroundImage: "url('/bb1.webp')",
            }}
          />


          {/* Overlay */}
          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

        </motion.div>




        {/* Architectural Grid */}
        <div className="absolute inset-0 z-1 opacity-[0.08] pointer-events-none">

          <div className="max-w-7xl mx-auto h-full grid grid-cols-4 px-6 md:px-12">

            <div className="border-r border-white" />
            <div className="border-r border-white" />
            <div className="border-r border-white" />
            <div />

          </div>

        </div>





        {/* Content */}
        <div
          ref={heroTextRef}
          className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          md:px-12
          w-full
          pt-[10vh]
          "
        >


          <div className="max-w-4xl">



            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="
              text-[#C8A45D]
              text-xs
              md:text-sm
              tracking-[0.45em]
              uppercase
              mb-6
              "
            >
              POWERON ELECTROTECH SOLUTIONS
            </motion.p>





            <h1
              className="
              text-5xl
              sm:text-6xl
              md:text-6xl
              font-light
              leading-[1.05]
              tracking-wide
              text-white
              "
            >

              <span className="block char-fade">
                Powering
              </span>


              <span className="
                    block
                    char-fade
                    text-[#C8A45D]
                    italic
                    ">
                Electrical Excellence
              </span>


            </h1>





            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="
                mt-7
                max-w-xl
                text-gray-300
                text-sm
                md:text-base
                leading-relaxed
                font-light
                "
            >

              Delivering advanced MEP engineering, electrical systems,
              power distribution, automation and infrastructure solutions
              for modern commercial and industrial projects.

            </motion.p>







            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="
        mt-10
        flex
        flex-wrap
        gap-8
        border-l
        border-[#C8A45D]
        pl-6
        "
            >


              <div>
                <h3 className="text-3xl text-white font-light">
                  MEP
                </h3>

                <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase">
                  Engineering
                </p>
              </div>



              <div>
                <h3 className="text-3xl text-white font-light">
                  Power
                </h3>

                <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase">
                  Solutions
                </p>
              </div>



              <div>
                <h3 className="text-3xl text-white font-light">
                  24/7
                </h3>

                <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase">
                  Support
                </p>
              </div>


            </motion.div>




            {/* Explore */}
            <Link href="/projects">

              <motion.div
                animate={{ x: [0, 15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2
                }}

                className="
      mt-8
      flex
      items-center
      gap-5
      text-[#C8A45D]
      text-[10px]
      uppercase
      tracking-[0.4em]
      cursor-pointer
      w-fit
    "
              >

                Explore Solutions

                <span className="w-16 h-[1px] bg-[#C8A45D]" />

              </motion.div>

            </Link>


          </div>


        </div>





        {/* Scroll */}
        <div className="
  absolute
  bottom-10
  left-1/2
  -translate-x-1/2
  hidden
  md:block
  ">

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5
            }}

            className="flex flex-col items-center gap-3"
          >

            <span className="
      text-[9px]
      uppercase
      tracking-[0.4em]
      text-gray-400
      ">
              Scroll
            </span>


            <div className="
      h-12
      w-[1px]
      bg-[#C8A45D]/70
      " />

          </motion.div>

        </div>


      </section>

      {/* 2. STATS SECTION */}
      <section
        className="relative z-10 py-10 md:py-10 bg-black border-t border-b border-[#C8A45D]/60 overflow-hidden"
        ref={statsRef}
      >

        {/* Grid Background */}
        {/* <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(200,164,93,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(200,164,93,0.35)_1px,transparent_1px)] bg-[size:90px_90px]" /> */}

        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C8A45D]/10 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[white]/50">

            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center p-4 
        ${index > 0 ? "pt-8 md:pt-4" : ""}
        ${index === stats.length - 1 ? "border-b border-white/50 md:border-b-0" : ""}
      `}
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

                <div className="text-[10px] md:text-xs tracking-[0.18em] text-white leading-normal max-w-[160px]">
                  {stat.label}
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* 3. SERVICES PREVIEW SECTION */}
      <section className=" py-20 md:py-20 relative">
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
            <p className="font-sans text-md font-light text-black-500 leading-relaxed max-w-lg">
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
                className="glass-card flex flex-col justify-between overflow-hidden relative group h-[480px] rounded-3xl border border-black/10 bg-white/90 backdrop-blur-sm shadow-[0_30px_90px_rgba(0,0,0,0.25)] hover:shadow-[0_45px_120px_rgba(0,0,0,0.4)] hover:-translate-y-3 transition-all duration-500"
              >

                {/* Always Show Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out "
                  />

                  <div className="absolute inset-0 bg-matte-black/75" />
                </div>


                {/* Content */}
                <div className="p-8 relative z-10 flex flex-col gap-6 h-full justify-between">

                  <div className="flex flex-col gap-6">

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-none fine-border-gold flex items-center justify-center bg-white/10 transition-colors duration-500">
                      <span className="text-white transition-colors duration-500">
                        {service.icon}
                      </span>
                    </div>


                    {/* Title */}
                    <h3 className="text-2xl font-light tracking-wide text-white">
                      {service.title}
                    </h3>


                    {/* Description */}
                    <p className="font-sans text-sm font-light leading-relaxed text-gray-300">
                      {service.desc}
                    </p>

                  </div>


                  {/* Button */}
                  <Link
                    href="/services"
                    className="flex items-center gap-3 font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-gold hover:text-white transition-colors duration-300 w-fit"
                  >
                    Explore System

                    <FiArrowRight className="text-xs transition-transform group-hover:translate-x-2" />

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
      <section className=" py-14 md:py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 scroll-reveal">

            <div className="max-w-xl">

              <p className="text-gold font-sans text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                Featured MEP Projects
              </p>

              <h2 className="text-3xl md:text-5xl font-light tracking-wide leading-tight text-matte-black">
                Engineering Modern Infrastructure With Precision
              </h2>

            </div>

            <Link
              href="/projects"
              className="mt-6 md:mt-0 inline-flex items-center gap-3 font-sans text-xs font-bold tracking-[0.2em] uppercase border-b border-gold pb-1 text-matte-black hover:text-gold transition-colors duration-300"
            >
              View All Projects <FiArrowRight />
            </Link>

          </div>

          {/* Projects Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <div
                onClick={() => router.push("/projects")}
                key={project.title}
                className="scroll-reveal relative h-[500px] group overflow-hidden cursor-pointer rounded-3xl border border-black/10 shadow-[0_25px_80px_rgba(0,0,0,0.25)] hover:shadow-[0_35px_100px_rgba(0,0,0,0.4)] transition-all duration-500"
              >

                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover  transition-all duration-700 ease-in-out group-hover:scale-110 "
                />


                {/* Dark Premium Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />


                {/* Gold Frame */}
                <div className="absolute inset-5 rounded-2xl border border-[#C8A45D]/30 group-hover:border-[#C8A45D]/80 transition-all duration-500" />


                {/* Bottom Glass Info */}
                <div className="absolute bottom-6 left-6 right-6 z-10 
                  bg-black/20 backdrop-blur-md rounded-2xl p-5 
                  border border-white/10
                  flex justify-between items-end
                  group-hover:bg-black/40
                  transition-all duration-500"
                >

                  <div className="flex flex-col gap-2">

                    <span className="font-sans text-[9px] font-semibold tracking-[0.25em] uppercase text-[#C8A45D]">
                      {project.category}
                    </span>


                    <h3 className="text-2xl font-light text-white tracking-wide">
                      {project.title}
                    </h3>


                    <span className="font-sans text-[10px] text-gray-300 font-light tracking-wide">
                      {project.location}
                    </span>

                  </div>


                  {/* Arrow Button */}
                  <div className="
                    w-12 h-12 rounded-full
                    bg-[#C8A45D]/20
                    backdrop-blur-md
                    border border-[#C8A45D]/40
                    flex items-center justify-center
                    text-white
                    group-hover:bg-[#C8A45D]
                    group-hover:text-black
                    group-hover:rotate-45
                    transition-all duration-500
                  ">
                    {project.icon}
                  </div>


                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="relative mt-10 py-24 md:py-32 overflow-hidden bg-[#f8f5ef] border-t border-[#C8A45D]/20">

        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        >
          <source src="/large.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center gap-8 scroll-reveal">

          <p className="text-[#C8A45D] text-xs font-semibold tracking-[0.3em] uppercase">
            Powering Modern Infrastructure
          </p>

          <h2 className="text-4xl md:text-6xl font-light tracking-wide leading-tight max-w-3xl text-white">
            Building Smart MEP Solutions For Tomorrow
          </h2>

          <div className="w-16 h-[1px] bg-[#C8A45D]" />

          <p className="text-md font-light text-white/80 leading-relaxed max-w-xl">
            From electrical systems to HVAC, plumbing, fire safety, and automation —
            we deliver integrated engineering solutions with precision and reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">

            <Link
              href="/contact"
              className="px-10 py-4 bg-black text-white text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#C8A45D] hover:text-black"
            >
              Get Consultation
            </Link>

            <a
              href="https://wa.me/7256815100"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border border-white/30 text-white text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white hover:text-black"
            >
              WhatsApp Us
            </a>

          </div>

        </div>

      </section>
    </div>
  );
}
