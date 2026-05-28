"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const SpecialOfferCard = () => {
  return (
    <div className="mt-8 relative mx-auto max-w-2xl px-4 sm:px-6 overflow-hidden">
      {/* Animated Border Wrapper */}
      <div className="relative overflow-hidden rounded-xl p-[2px]">
        
        {/* Rotating Line (Only #38bdf8) */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background: "conic-gradient(from 0deg, transparent 70%, #38bdf8 90%, transparent 100%)",
          }}
          className="absolute inset-[-100%] z-0"
        />

        {/* Original Design Content */}
        <div className="relative z-10 bg-white rounded-xl p-6 text-center border-2 border-transparent">
          <p className="font-bold text-lg mb-2" style={{ color: '#38bdf8' }}>
            <CheckCircle className="inline mr-2 h-5 w-5" /> Special Offer:
          </p>
          <p className="text-slate-700">
            Get a free landing website with Travel CRM!
          </p>
          <p className="text-slate-400 mt-2 text-sm">
            Deploy our solutions on your own domain instantly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferCard;

