"use client";
import React from 'react';
import Ballpit from './Ballpit';
import { FaRocket } from 'react-icons/fa';

function Hero() {
  return (
<section className="relative w-full min-h-[100svh] flex items-center justify-center bg-green-100 overflow-x-hidden">

      {/* Ballpit Background - Fixed Positioning */}
<div className="absolute inset-0 z-0 pointer-events-none">
        <Ballpit
          count={100}
          gravity={0.05}
          friction={0.99}
          wallBounce={0.95}
followCursor={typeof window !== "undefined" && window.innerWidth > 768}
          colors={["#4fa8f7", "#6fcf8c", "#334155"]}
        />
      </div>

      {/* Content Layer - Added higher z-index */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">

        {/* Floating Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r to-[#6fcf8c] backdrop-blur-xl border border-gray-200 text-white px-4 sm:px-6 lg:px-8 py-2 rounded-full text-xs sm:text-sm md:text-base font-bold mb-8 sm:mb-10 shadow-lg animate-bounce">
          <FaRocket className="text-[#6fcf8c]" />
          <span className="tracking-wide uppercase">Your Technology Partner</span>
        </div>

        {/* Main Title */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight sm:tracking-tight md:tracking-tighter leading-snug sm:leading-snug md:leading-tight mb-2 sm:mb-4">
            <span className="text-[#4fa8f7]">Softnexis</span>{" "}
            <span className="bg-gradient-to-r from-[#4fa8f7] to-[#6fcf8c] bg-clip-text text-transparent">
              Gentech
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-bold tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] uppercase">
            Smart IT Solutions
          </p>
        </div>

        {/* Slogan */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 font-bold tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] mb-8 sm:mb-10">
          INNOVATE • TRANSFORM • SUCCEED
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-10">
          <a
            href="/services"
            className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#4fa8f7] to-[#6fcf8c] text-white rounded-full font-bold text-sm sm:text-lg shadow-xl hover:shadow-[#6fcf8c]/40 transition-all duration-300 hover:scale-105"
          >
            Explore Services
          </a>

          <a
            href="/contact"
            className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-gray-900 rounded-full font-bold text-sm sm:text-lg border hover:bg-[#6fcf8c] hover:text-white transition-all duration-300 shadow-md"
          >
            Get Started
          </a>
        </div>
      </div>

    </section>
  );
}

export default Hero;
