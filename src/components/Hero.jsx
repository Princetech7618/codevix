// "use client";
// import React from 'react';
// import Ballpit from './Ballpit';
// import { FaRocket } from 'react-icons/fa';

// function Hero() {
//   return (
// <section className="relative w-full min-h-screen flex items-center justify-center bg-sky-100 overflow-x-hidden">

//       {/* Ballpit Background - Fixed Positioning */}
// <div className="absolute inset-0 z-0 pointer-events-none">
//       {/* // Responsive wrapper — aap apni marzi se size dein */}
// <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
//   <Ballpit
//     count={100}
//     gravity={0.5}
//     friction={0.9975}
//     wallBounce={0.95}
//     followCursor
//     colors={["#5227FF","#7cff67"]}
//   />
// </div>
//       </div>

//       {/* Content Layer - Added higher z-index */}
//       <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">

//         {/* Floating Badge */}
//         <div className="inline-flex items-center gap-2 bg-gradient-to-r to-[#6fcf8c] backdrop-blur-xl border border-gray-200 text-white px-4 sm:px-6 lg:px-8 py-2 rounded-full text-xs sm:text-sm md:text-base font-bold mb-8 sm:mb-10 shadow-lg animate-bounce">
//           <FaRocket className="text-[#6fcf8c]" />
//           <span className="tracking-wide uppercase">Your Technology Partner</span>
//         </div>

//         {/* Main Title */}
//         <div className="mb-6 sm:mb-8">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight sm:tracking-tight md:tracking-tighter leading-snug sm:leading-snug md:leading-tight mb-2 sm:mb-4">
//             <span className="text-[#4fa8f7]">Codevix</span>{" "}
//             <span className="bg-gradient-to-r from-[#4fa8f7] to-[#6fcf8c] bg-clip-text text-transparent">
//               Gentech
//             </span>
//           </h1>
//           <p className="text-base sm:text-lg md:text-xl text-gray-600 font-bold tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] uppercase">
//             Smart IT Solutions
//           </p>
//         </div>

//         {/* Slogan */}
//         <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 font-bold tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] mb-8 sm:mb-10">
//           INNOVATE • TRANSFORM • SUCCEED
//         </p>

//         {/* Action Buttons */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-10">
//           <a
//             href="/services"
//             className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#4fa8f7] to-[#6fcf8c] text-white rounded-full font-bold text-sm sm:text-lg shadow-xl hover:shadow-[#6fcf8c]/40 transition-all duration-300 hover:scale-105"
//           >
//             Explore Services
//           </a>

//           <a
//             href="/contact"
//             className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-gray-900 rounded-full font-bold text-sm sm:text-lg border hover:bg-[#6fcf8c] hover:text-white transition-all duration-300 shadow-md"
//           >
//             Get Started
//           </a>
//         </div>
//       </div>

//     </section>
//   );
// }

// export default Hero;


"use client";
import React from 'react';
import Ballpit from './Ballpit';
import { FaRocket } from 'react-icons/fa';

function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center bg-sky-100 overflow-x-hidden"
      style={{ minHeight: '80svh' }}
    >

      {/* Ballpit Background */}
      <div className="absolute inset-0 z-0">
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Ballpit
            count={100}
            gravity={0.5}
            friction={0.9975}
            wallBounce={0.95}
            followCursor
colors={["#38BDF8", "#38BDF8"]}
          />
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">

        {/* Floating Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r to-[#38BDF8] backdrop-blur-xl border border-gray-200 text-white px-4 sm:px-6 lg:px-8 py-2 rounded-full text-xs sm:text-sm md:text-base font-bold mb-6 sm:mb-8 lg:mb-10 shadow-lg animate-bounce">
          <FaRocket className="text-[#38BDF8]" />
          <span className="tracking-wide uppercase">Your Digital Agency</span>
        </div>

        {/* Main Title */}
        <div className="mb-4 sm:mb-6 lg:mb-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-snug md:leading-tight mb-2 sm:mb-4">
            <span className="text-[#38BDF8]">Codevix</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-gray-600 font-semibold tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] uppercase">
            Digital Growth Agency
          </p>
        </div>

        {/* Slogan */}
        <p className="text-xs sm:text-base md:text-lg lg:text-xl text-gray-800 font-semibold tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] mb-6 sm:mb-8 lg:mb-10">
          INNOVATE • TRANSFORM • SUCCEED
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-4 sm:mt-8 lg:mt-10">
          <a
            href="/services"
            className="w-full sm:w-auto px-7 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#38BDF8] to-[#38BDF8] text-white rounded-full font-semibold text-sm sm:text-lg shadow-xl hover:shadow-[#38BDF8]/40 transition-all duration-300 hover:scale-105 pointer-events-auto"
          >
            Explore Services
          </a>

          <a
            href="/contact"
            className="w-full sm:w-auto px-7 sm:px-10 py-3 sm:py-4 bg-white text-gray-900 rounded-full font-semibold text-sm sm:text-lg border hover:bg-[#38BDF8] hover:text-white transition-all duration-300 shadow-md pointer-events-auto"
          >
            Get Started
          </a>
        </div>
      </div>

    </section>
  );
}

export default Hero;