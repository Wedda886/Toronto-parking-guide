"use client";

import { motion } from "framer-motion";
import { Map, ExternalLink } from "lucide-react";

// Toronto Downtown - Parking search centered on downtown
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/parking+downtown+toronto/@43.6532,-79.3832,15z";

export function MapSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="px-6 py-12"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cn-tower-blue/10 dark:bg-cn-tower-blue/20 text-cn-tower-blue mb-6">
          <Map size={32} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
          Quick Navigation Tip
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Find parking spots near your destination in Toronto Downtown.
        </p>
        <motion.a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-cn-tower-blue hover:bg-cn-tower-blue/90 shadow-lg hover:shadow-xl transition-all duration-200"
          style={{ backgroundColor: "#003399" }}
        >
          <Map size={20} />
          View Map
          <ExternalLink size={18} />
        </motion.a>
      </div>
    </motion.section>
  );
}
