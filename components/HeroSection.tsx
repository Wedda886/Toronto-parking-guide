"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { DarkModeToggle } from "./DarkModeToggle";

export function HeroSection() {
  return (
    <section className="relative min-h-[50vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cn-tower-blue/10 via-transparent to-safety-yellow/10 dark:from-cn-tower-blue/20 dark:to-safety-yellow/5" />
      <div className="absolute top-6 right-6">
        <DarkModeToggle />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-center max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-safety-yellow/20 dark:bg-safety-yellow/30 text-cn-tower-blue dark:text-safety-yellow border border-safety-yellow/50 mb-6"
        >
          <MapPin size={18} />
          <span className="text-sm font-semibold">Downtown Toronto 2026</span>
        </motion.div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
          Park Smart, Toronto
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
        >
          Street parking in 2026 now tops{" "}
          <span className="font-bold text-cn-tower-blue dark:text-safety-yellow">$7.00/hr</span>.
          Compare your options and save.
        </motion.p>
      </motion.div>
    </section>
  );
}
