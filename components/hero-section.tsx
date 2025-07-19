import React from "react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-500 via-teal-400 to-blue-500 dark:from-neutral-900 dark:via-slate-900 dark:to-indigo-900 glass-bg"
    >
      {/* Background overlay with glassmorphism */}
      <div className="absolute inset-0 z-0 glass-bg bg-white/10 dark:bg-neutral-900/40" style={{backdropFilter:'blur(20px)'}} />
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center flex flex-col gap-8 items-center justify-center py-24">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Next-Gen SaaS Platform
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl font-medium text-white/90 mt-2 max-w-2xl mx-auto drop-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Manage, Analyze, and Grow — all in one smart dashboard. Designed for teams everywhere.
        </motion.p>
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&h=480&fit=crop&auto=format"
          alt="SaaS dashboard interface preview"
          className="rounded-3xl shadow-xl object-cover w-full aspect-video border-4 border-white/20 glass-bg"
          loading="lazy"
        />
        <a href="#pricing" className="mt-5 inline-block">
          <motion.button
            className="px-8 py-4 rounded-2xl shadow-xl bg-white/80 hover:bg-white text-lg font-bold text-indigo-700 backdrop-blur-xl transition-all ring-2 ring-white/30"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </a>
      </div>
    </section>
  );
}
