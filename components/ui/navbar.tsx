"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  labelZh?: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#", labelZh: "首页" },
  { label: "Services", href: "#services", labelZh: "服务" },
  { label: "Products", href: "#products", labelZh: "产品" },
  { label: "Testimonials", href: "#testimonials", labelZh: "客户评价" },
  { label: "FAQ", href: "#faq", labelZh: "常见问题" },
  { label: "Contact", href: "#contact", labelZh: "联系我们" },
];

export function Navbar() {
  const [isZh, setIsZh] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 h-16 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm z-50 border-b border-border/50">
      <div className="container mx-auto h-full px-4">
        <div className="flex items-center justify-between h-full">
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent"
          >
            Urban Graphics
          </motion.a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {isZh ? item.labelZh : item.label}
              </motion.a>
            ))}
            <button
              onClick={() => setIsZh(!isZh)}
              className={cn(
                "px-3 py-1 rounded-full text-sm",
                "bg-gradient-to-r from-primary/10 via-blue-600/10 to-primary/10",
                "hover:from-primary/20 hover:via-blue-600/20 hover:to-primary/20",
                "border border-border/50",
                "transition-all duration-300"
              )}
            >
              {isZh ? "EN" : "中文"}
            </button>
          </div>

          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
} 