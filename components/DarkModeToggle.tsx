"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  const options: { value: "light" | "dark" | "system"; icon: React.ReactNode }[] = [
    { value: "light", icon: <Sun size={16} /> },
    { value: "dark", icon: <Moon size={16} /> },
    { value: "system", icon: <Monitor size={16} /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-1 rounded-full bg-slate-200/80 dark:bg-slate-700/80 p-1 backdrop-blur-sm"
      role="group"
      aria-label="Toggle theme"
    >
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setTheme(opt.value)}
          className={`flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 ${
            theme === opt.value
              ? "bg-cn-tower-blue text-white shadow-md"
              : "text-slate-600 dark:text-slate-400 hover:bg-slate-300/50 dark:hover:bg-slate-600/50"
          }`}
          title={opt.value === "system" ? "跟随系统" : opt.value === "light" ? "浅色" : "深色"}
        >
          {opt.icon}
        </button>
      ))}
    </motion.div>
  );
}
