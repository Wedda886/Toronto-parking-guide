"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface ParkingCardData {
  id: string;
  name: string;
  icon: LucideIcon;
  bestFor: string;
  pros: string[];
  cons: string[];
  price: string;
  index: number;
}

export function ParkingCard({ name, icon: Icon, bestFor, pros, cons, price, index }: ParkingCardData) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-cn-tower-blue/5 dark:bg-cn-tower-blue/10 rounded-bl-full" />
      <div className="relative p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-cn-tower-blue/10 dark:bg-cn-tower-blue/20 text-cn-tower-blue">
              <Icon size={24} strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">{name}</h3>
              <span className="inline-block mt-1 px-2.5 py-0.5 text-xs font-medium rounded-full bg-safety-yellow/20 text-cn-tower-blue dark:bg-safety-yellow/30 dark:text-safety-yellow border border-safety-yellow/40">
                Best for {bestFor}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-5">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Pros
            </h4>
            <ul className="space-y-1.5">
              {pros.map((pro) => (
                <li key={pro} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-green-500 mt-0.5">✓</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Cons
            </h4>
            <ul className="space-y-1.5">
              {cons.map((con) => (
                <li key={con} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-red-500 mt-0.5">✗</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-bold text-sm shadow-md"
          style={{ backgroundColor: "#003399", color: "#ffffff" }}
        >
          <span className="text-safety-yellow font-semibold">Live Price</span>
          <span>{price}</span>
        </div>
      </div>
    </motion.article>
  );
}
