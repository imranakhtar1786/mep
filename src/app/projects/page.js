"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMaximize2 } from "react-icons/fi";

import {
  FaBuilding,
  FaHotel,
  FaIndustry,
  FaHospital,
  FaSolarPanel,
  FaHome,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function Projects() {
  const [filter, setFilter] = useState("all");

  const [selectedProject, setSelectedProject] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const categories = [
    { name: "All Projects", slug: "all" },
    // { name: "Residential", slug: "residential" },
    { name: "Commercial", slug: "commercial" },
    // { name: "Hotels & Hospitality", slug: "hotels" },
    // { name: "Industrial", slug: "industrial" },
  ];

  const projectList = [
    {
      title: "ICMR - School of Public Health",
      category: "commercial",
      displayCategory: "Electrical Engineering",
      location: "Chennai, India",
      images: [
        "/p1.jpeg",
        "/p12.jpeg",
        "/p13.jpeg",
        "/p14.jpeg",
      ],
      icon: <FaBuilding className="text-white text-lg" />,
      systems: [
        "Electrical",
        "FAS (Fire Alarm System)",
        "Lighting Layout",
        "Power Distribution",
      ],
    },
    {
      title: "CFTI - Auditorium Block & Additional Workshop Building",
      category: "commercial",
      displayCategory: "Electrical Engineering",
      location: "Guindy, Chennai, India",
      images: [
        "/cfti1.jpeg",
        "/cfti2.jpeg",
        "/cfti3.jpeg",
        "/cfti4.jpeg",
        "/cfti5.jpeg",
        "/cfti6.jpeg",
        "/cfti7.jpeg",
      ],
      icon: <FaBuilding className="text-white text-lg" />,
      systems: [
        "E&M Components",
        "Electrical Engineering",
        "E&M Inventories & Drawings",
        "Power Distribution",
        "Lighting Layout",
        "Electrical Installation",
        "Handing Over Documents",
      ],
    },

    {
      title: "Conference Room Electrical Works",
      category: "commercial",
      displayCategory: "Electrical Engineering",
      location: "Prayagraj, India",
      images: [
        "/p15.jpeg",
        "/p16.jpeg",
        "/p17.jpeg",
        "/p18.jpeg",
        "/p19.jpeg",
      ],
      icon: <FaBuilding className="text-white text-lg" />,
      systems: [
        "Electrical Wiring & Cabling",
        "Power Socket & Switch Installation",
        "Lighting Points & Fixtures",
        "Dedicated Power Supply",
        "TV/Display Power & Data Points",
        "Conference Equipment Power Points",
        "Electrical Distribution & Connections",
        "Testing & Commissioning",
      ],
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projectList
      : projectList.filter((proj) => proj.category === filter);

  return (
    <>
      <div className="bg-[linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url('/bg.jpg')] bg-[length:300px_auto] bg-repeat bg-right-top text-matte-black pt-18 md:pt-16 min-h-screen">

        {/* HEADER */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
          <p className="text-gold font-sans text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Global Portfolio
          </p>

          <h1 className="text-4xl md:text-7xl font-light tracking-wide max-w-4xl leading-tight">
            Engineering modern infrastructure with premium MEP solutions.
          </h1>
        </section>

        {/* FILTER BAR */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
          <div className="flex flex-wrap gap-4 md:gap-8 border-b border-gray-100 pb-4">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setFilter(cat.slug)}
                className={`font-sans text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 pb-2 relative ${filter === cat.slug
                  ? "text-gold"
                  : "text-gray-400 hover:text-matte-black"
                  }`}
              >
                {cat.name}

                {filter === cat.slug && (
                  <motion.span
                    layoutId="projectsFilterUnderline"
                    className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </section>

        {/* PROJECTS GRID */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-36">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  onClick={() => {
                    setSelectedProject(project);
                    setGalleryOpen(true);
                  }}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  key={project.title}
                  className="relative h-[480px] group overflow-hidden cursor-pointer bg-soft-gray border border-gray-100 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition-all duration-500"
                >
                  {/* IMAGE */}
                  <img
                    src={project.images?.[0]}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-2xl transition-all duration-700 ease-in-out group-hover:scale-110"
                  />

                  {/* OVERLAYS */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />

                  <div className="absolute inset-4 border border-gold/15 pointer-events-none group-hover:border-gold/45 transition-colors duration-500" />

                  {/* TOP ICONS */}
                  <div className="absolute top-8 left-8 z-10">
                    {project.icon}
                  </div>

                  <div className="absolute top-8 right-8 z-10 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:bg-gold hover:text-black hover:border-gold">
                    <FiMaximize2 size={12} />
                  </div>

                  {/* CONTENT */}
                  <div className="absolute bottom-8 left-8 right-8 z-10 flex flex-col gap-4">

                    <div className="flex flex-col gap-1">
                      <span className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-gold">
                        {project.displayCategory}
                      </span>

                      <h2 className="text-2xl font-light text-white tracking-wide">
                        {project.title}
                      </h2>

                      <span className="font-sans text-[12px] text-gray-100 font-light tracking-wide">
                        {project.location}
                      </span>
                    </div>

                    {/* SYSTEM TAGS */}
                    <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden border-t border-white/10 pt-3 flex flex-wrap gap-2">
                      {project.systems.map((sys) => (
                        <span
                          key={sys}
                          className="font-sans text-[9px] text-gray-300 font-light tracking-wide bg-white/5 border border-white/10 px-2 py-0.5"
                        >
                          {sys}
                        </span>
                      ))}
                    </div>

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      </div>
      <AnimatePresence>
        {galleryOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setGalleryOpen(false)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-full max-w-6xl rounded-3xl overflow-hidden border border-gold/20 bg-white/5 backdrop-blur-md shadow-[0_0_80px_rgba(255,215,0,0.1)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setGalleryOpen(false)}
                className="absolute top-5 right-5 z-30 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-gold hover:text-black transition-all duration-300"
              >
                ×
              </button>

              {/* Swiper */}
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                loop
                className="project-gallery"
              >
                {selectedProject.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="overflow-hidden">
                      <img
                        src={image}
                        alt=""
                        className="w-full h-[65vh] md:h-[80vh] object-cover transition-transform duration-[8000ms] hover:scale-110"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Info Panel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.4,
                }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-8 md:p-12"
              >
                <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">
                  {selectedProject.displayCategory}
                </span>

                <h2 className="text-white text-3xl md:text-5xl font-light mt-3">
                  {selectedProject.title}
                </h2>

                <p className="text-gray-300 mt-2">
                  {selectedProject.location}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  {selectedProject.systems.map((system) => (
                    <span
                      key={system}
                      className="px-4 py-2 text-xs uppercase tracking-wider border border-gold/30 bg-gold/10 text-gold rounded-full"
                    >
                      {system}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}