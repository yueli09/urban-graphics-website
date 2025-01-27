"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      // Show navbar when near top of page
      if (current < 0.05) {
        setVisible(true);
      } else {
        // Show navbar when scrolling up, hide when scrolling down
        const prevScroll = scrollYProgress.getPrevious() ?? 0;
        setVisible(current - prevScroll < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-5 inset-x-0 mx-auto bg-white/70 dark:bg-zinc-800/70 backdrop-blur-lg border border-white/[0.2] dark:border-white/[0.1] rounded-full shadow-[0_2px_20px_-2px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_20px_-2px_rgba(255,255,255,0.1)] px-8 py-3 items-center justify-center space-x-6 z-[5000]",
          className
        )}
      >
        {navItems.map((item: NavItem, index: number) => (
          <Link
            key={`link-${index}`}
            href={item.link}
            className={cn(
              "relative items-center flex space-x-1 text-zinc-800 dark:text-zinc-200 hover:text-primary dark:hover:text-primary transition-colors duration-200"
            )}
          >
            <span className="block sm:hidden">{item.icon}</span>
            <span className="hidden sm:block text-sm font-medium">{item.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}; 