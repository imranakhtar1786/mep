"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const container = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // GSAP ANIMATION
  useEffect(() => {
    const ctx = gsap.context(() => {

      // HERO
      gsap.fromTo(
        ".hero-content",
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      );

      // LEFT CONTENT
      gsap.fromTo(
        ".contact-left > *",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          delay: 0.3,
        }
      );

      // FORM FIELDS
      gsap.fromTo(
        ".form-field",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.5,
          clearProps: "opacity,transform",
        }
      );

      // BUTTON
      gsap.fromTo(
        ".submit-btn",
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 1,
          ease: "power3.out",
        }
      );

    }, container);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      ref={container}
      className="bg-white text-black min-h-screen overflow-hidden"
    >

      {/* HERO */}
      <section className="relative h-[70vh] md:h-[85vh] flex items-center overflow-hidden">

        {/* BG IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* GRADIENT */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-white" /> */}

        {/* HERO CONTENT */}
        <div className="hero-content relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">

          <p className="text-white text-xs md:text-sm tracking-[0.35em] uppercase mb-6">
            Premium MEP Engineering
          </p>

          <h1 className="text-white text-5xl md:text-8xl leading-none font-light max-w-5xl">
            Let’s Build
            <span className="block text-[#C8A45D] italic mt-2">
              Smarter Infrastructure
            </span>
          </h1>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

          {/* LEFT */}
          <div className="contact-left lg:col-span-5 flex flex-col gap-10">

            <div>
              <p className="text-[#C8A45D] text-xs tracking-[0.3em] uppercase mb-4">
                Contact Information
              </p>

              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                Engineering Excellence Starts Here
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed text-base">
              Connect with our MEP engineering specialists for premium
              residential, commercial, and infrastructure projects.
            </p>

            {/* INFO LIST */}
            <div className="flex flex-col gap-8">

              {/* ADDRESS */}
              <div className="flex gap-5">
                <div className="w-12 h-12 border border-[#C8A45D] flex items-center justify-center text-[#C8A45D]">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="uppercase tracking-[0.2em] text-xs font-semibold mb-2">
                    Office Address
                  </h4>

                  <p className="text-gray-600">
                    100 Architectural Plaza, London
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex gap-5">
                <div className="w-12 h-12 border border-[#C8A45D] flex items-center justify-center text-[#C8A45D]">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4 className="uppercase tracking-[0.2em] text-xs font-semibold mb-2">
                    Phone
                  </h4>

                  <p className="text-gray-600">
                    +44 20 7946 0958
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex gap-5">
                <div className="w-12 h-12 border border-[#C8A45D] flex items-center justify-center text-[#C8A45D]">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="uppercase tracking-[0.2em] text-xs font-semibold mb-2">
                    Email
                  </h4>

                  <p className="text-gray-600">
                    contact@aura-mep.com
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-7">

            <form
              onSubmit={handleSubmit}
              className="bg-[#fafafa] border border-black/10 p-8 md:p-14 shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
            >

              {/* ROW 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="form-field w-full border-b border-black/20 bg-transparent py-4 outline-none text-black placeholder:text-gray-500 focus:border-[#C8A45D] transition-all"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className="form-field w-full border-b border-black/20 bg-transparent py-4 outline-none text-black placeholder:text-gray-500 focus:border-[#C8A45D] transition-all"
                />

              </div>

              {/* ROW 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="form-field w-full border-b border-black/20 bg-transparent py-4 outline-none text-black placeholder:text-gray-500 focus:border-[#C8A45D] transition-all"
                />

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  required
                  className="form-field w-full border-b border-black/20 bg-transparent py-4 outline-none text-black placeholder:text-gray-500 focus:border-[#C8A45D] transition-all"
                />

              </div>

              {/* MESSAGE */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Tell us about your project..."
                required
                className="form-field w-full border-b border-black/20 bg-transparent py-4 mt-8 outline-none text-black placeholder:text-gray-500 resize-none focus:border-[#C8A45D] transition-all"
              />

              {/* BUTTON */}
              <button
                type="submit"
                className="submit-btn inline-block mt-10 bg-black text-white hover:bg-[#C8A45D] hover:text-black transition-all duration-500 px-10 py-5 uppercase tracking-[0.25em] text-xs font-semibold"
              >
                Send Message
              </button>

              {/* SUCCESS */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 text-[#C8A45D] text-sm tracking-[0.15em] uppercase"
                >
                  Message submitted successfully.
                </motion.div>
              )}

            </form>

          </div>

        </div>

      </section>

    </div>
  );
}