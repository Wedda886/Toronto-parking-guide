"use client";

import {
  Car,
  Calendar,
  Zap,
  Building2,
} from "lucide-react";
import { ParkingCard } from "./ParkingCard";
import { motion } from "framer-motion";

const parkingData = [
  {
    id: "greenp",
    name: "Green P",
    icon: Car,
    bestFor: "Short Stays",
    pros: ["Cheapest", "10,000+ spots"],
    cons: ["No reservations"],
    price: "$1.50 - $7.50/hr",
    index: 0,
  },
  {
    id: "spothero",
    name: "SpotHero",
    icon: Calendar,
    bestFor: "Events (Scotiabank/Rogers Centre)",
    pros: ["Pre-book & save", "Great for concerts and games"],
    cons: ["Private garages only"],
    price: "$12 - $35/day",
    index: 1,
  },
  {
    id: "honkmobile",
    name: "HonkMobile",
    icon: Zap,
    bestFor: "Universities/Hospitals",
    pros: ["Fast checkout", "Wide coverage"],
    cons: ["Small service fees"],
    price: "Varies",
    index: 2,
  },
  {
    id: "clicknpark",
    name: "Clicknpark",
    icon: Building2,
    bestFor: "Monthly/Long-term",
    pros: ["Guaranteed spots", "Predictable billing"],
    cons: ["Fewer locations"],
    price: "$200-$450/month",
    index: 3,
  },
];

export function ComparisonGrid() {
  return (
    <section className="px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
          Compare Parking Options
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          Choose the right service for your needs. All prices updated for 2026.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {parkingData.map((card) => (
          <ParkingCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}
