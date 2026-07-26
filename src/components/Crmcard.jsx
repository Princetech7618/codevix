"use client";
import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { 
  FaHospital,
  FaSchool,
  FaPlane,
  FaBuilding,
  FaBox,
  FaTasks,
  FaArrowRight, 
} from "react-icons/fa";

const SolutionCard = ({ item, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spotlight Effect Calculation
  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      onMouseMove={onMouseMove}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-6 sm:p-8 transition-all hover:border-slate-300 shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_2px_4px_rgba(0,0,0,0.05),0_12px_24px_rgba(0,0,0,0.05)]"
    >
      {/* Interactive Spotlight Overlay */}
      <motion.div
  className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
  style={{
    background: useTransform(
      [mouseX, mouseY],
      ([x, y]) =>
        `radial-gradient(650px circle at ${x}px ${y}px, rgba(56, 189, 248, 0.18), transparent 80%)`
    ),
  }}
/>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 text-sky-500 transition-all duration-500 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]">
            {item.icon}
          </div>
          <motion.div 
            whileHover={{ rotate: 45 }}
            className="rounded-full bg-slate-50 p-2 text-slate-400 group-hover:text-sky-500 group-hover:bg-sky-50 transition-colors"
          >
            <FaArrowRight size={20} />
          </motion.div>
        </div>

        <div className="mt-6 sm:mt-8 flex-1">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            {item.title}
          </h3>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-slate-500 font-medium">
            {item.description}
          </p>
        </div>

        <div className="mt-6 sm:mt-10">
          {item.tag ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4ea7f7] to-[#38bdf8] px-3 sm:px-4 py-1 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white shadow-xl">
              <span className="h-1 w-1 animate-pulse rounded-full bg-white" />
              {item.tag}
            </span>
          ) : (
            <div className="h-[36px]" /> // Spacer to keep alignment
          )}
        </div>
      </div>

      {/* Expensive Bottom Glow */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
};

const EnterpriseSolutions = () => {
  const solutions = [
    {
      title: "Hospital Operations",
      description: "Streamlined hospital workflows—patient records, appointments, billing, inventory, and staff management.",
      icon: <FaHospital className="w-6 h-6 sm:w-7 sm:h-7" />,
      tag: null,
    },
    {
      title: "School Management",
      description: "Admissions, attendance, grades, fee management, and parent-teacher communication in one place.",
      icon: <FaSchool className="w-6 h-6 sm:w-7 sm:h-7" />,
      tag: null,
    },
    {
      title: "Travel Booking Platform",
      description: "Booking management, itinerary planning, customer communication, and payment tracking for travel agencies.",
      icon: <FaPlane className="w-6 h-6 sm:w-7 sm:h-7" />,
      tag: "Free Landing Page",
    },
    {
      title: "Real Estate Platform",
      description: "Listings, buyer inquiries, document management, and sales tracking designed for smooth customer journeys.",
      icon: <FaBuilding className="w-6 h-6 sm:w-7 sm:h-7" />,
      tag: null,
    },
    {
      title: "Smart Inventory",
      description: "Stock tracking, order management, supplier workflows, and real-time inventory reporting.",
      icon: <FaBox className="w-6 h-6 sm:w-7 sm:h-7" />,
      tag: null,
    },
    {
      title: "Task & Team Management",
      description: "Project planning, task assignment, team collaboration, and productivity tracking tools.",
      icon: <FaTasks className="w-6 h-6 sm:w-7 sm:h-7" />,
      tag: null,
    },
  ];

  return (
    <section className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((item, index) => (
            <SolutionCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSolutions;
