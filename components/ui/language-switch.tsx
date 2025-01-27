"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./language-context";
import { cn } from "@/lib/utils";

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      onClick={() => setLanguage(language === "en" ? "zh" : "en")}
      className={cn(
        "fixed top-5 right-5 z-[5000]",
        "px-4 py-2 rounded-full",
        "bg-white/70 dark:bg-zinc-800/70 backdrop-blur-lg",
        "border border-white/[0.2] dark:border-white/[0.1]",
        "shadow-[0_2px_20px_-2px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_20px_-2px_rgba(255,255,255,0.1)]",
        "text-sm font-medium",
        "text-zinc-800 dark:text-zinc-200",
        "hover:bg-white/80 dark:hover:bg-zinc-800/80",
        "transition-all duration-200"
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {language === "en" ? "中文" : "English"}
    </motion.button>
  );
} 