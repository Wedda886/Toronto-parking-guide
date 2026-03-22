"use client";

import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

const TIPS = [
  "Avoid King St Pilot zones! Restricted access can lead to tickets.",
  "Parking is free on certain streets after 9 PM—check the signs!",
];

export function ProTipBox() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="sticky top-6 px-6 py-12"
    >
      <div className="max-w-md mx-auto rounded-2xl border-2 border-safety-yellow/50 bg-safety-yellow/10 dark:bg-safety-yellow/5 p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-safety-yellow/30 text-cn-tower-blue dark:text-safety-yellow">
            <Lightbulb size={22} />
          </div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white">
            Expert 2026 Tips
          </h3>
        </div>
        <ul className="space-y-4">
          {TIPS.map((tip, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cn-tower-blue text-white text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <span className="text-sm leading-relaxed">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.aside>
  );
}
