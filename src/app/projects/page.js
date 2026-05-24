"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMaximize2 } from "react-icons/fi";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { name: "All Projects", slug: "all" },
    { name: "Residential", slug: "residential" },
    { name: "Commercial", slug: "commercial" },
    { name: "Hotels & Hospitality", slug: "hotels" },
    { name: "Industrial", slug: "industrial" },
  ];

  const projectList = [
    {
      title: "The Obsidian Tower",
      category: "commercial",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      systems: ["Electrical Power Grids", "HVAC Chilled Loops", "Smart Automation"],
    },
    {
      title: "Luminary Resort & Spa",
      category: "hotels",
      location: "Maldives",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800",
      systems: ["Reverse Osmosis Plumbing", "Geothermal Cooling", "Fire Fighting"],
    },
    {
      title: "AeroSmart Logistics Hangar",
      category: "industrial",
      location: "Munich, Germany",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
      systems: ["Heavy Ventilation", "Deluge Fire Protection", "High-Load Electrical Grid"],
    },
    {
      title: "Aura Residence & Gardens",
      category: "residential",
      location: "Milan, Italy",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      systems: ["BMS Home Automation", "Energy recovery HVAC", "Domestic Sanitation"],
    },
    {
      title: "Gold-Coast Corporate Hub",
      category: "commercial",
      location: "Sydney, Australia",
      image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=800",
      systems: ["Chilled Water Plant", "Smart Lighting Controls", "Structured Fiber Gird"],
    },
    {
      title: "Apex High-Rise Hotel",
      category: "hotels",
      location: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
      systems: ["High-Pressure Water Supply", "District Heating Integration", "Smoke Containment"],
    },
  ];

  const filteredProjects = filter === "all"
    ? projectList
    : projectList.filter(proj => proj.category === filter);

  return (
    <div className="bg-white text-matte-black pt-18 md:pt-16 min-h-screen">

      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
        <p className="text-gold font-sans text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          Global Portfolio
        </p>
        <h1 className="text-4xl md:text-7xl font-light tracking-wide max-w-4xl leading-tight">
          Where engineering logic meets <span className="text-gold italic">luxury</span> architecture.
        </h1>
      </section>

      {/* 2. FILTER BAR */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-wrap gap-4 md:gap-8 border-b border-gray-100 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setFilter(cat.slug)}
              className={`font-sans text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 pb-2 relative ${filter === cat.slug ? "text-gold" : "text-gray-400 hover:text-matte-black"
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

      {/* 3. PROJECTS GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-36">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                key={project.title}
                className="relative h-[480px] group overflow-hidden cursor-pointer bg-soft-gray border border-gray-100"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:grayscale-0"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute inset-4 border border-gold/15 pointer-events-none group-hover:border-gold/45 transition-colors duration-500" />

                {/* Focus/Maximize Icon */}
                <div className="absolute top-8 right-8 z-10 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:bg-gold hover:text-matte-black hover:border-gold">
                  <FiMaximize2 size={12} />
                </div>

                {/* Project details card */}
                <div className="absolute bottom-8 left-8 right-8 z-10 flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-sans text-[8px] font-semibold tracking-[0.25em] uppercase text-gold">
                      {project.category}
                    </span>
                    <h2 className="text-2xl font-light text-white tracking-wide">
                      {project.title}
                    </h2>
                    <span className="font-sans text-[10px] text-gray-400 font-light tracking-wide">
                      {project.location}
                    </span>
                  </div>

                  {/* Systems overlay on hover */}
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden border-t border-white/10 pt-3 flex flex-wrap gap-2">
                    {project.systems.map((sys) => (
                      <span key={sys} className="font-sans text-[9px] text-gray-300 font-light tracking-wide bg-white/5 border border-white/10 px-2 py-0.5 rounded-none">
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
  );
}
