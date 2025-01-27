"use client";

import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, Briefcase, Package, MessageSquare, HelpCircle, Phone } from "lucide-react";

export function NavigationMenu() {
  const navItems = [
    {
      name: "Home",
      link: "#",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Services",
      link: "#services",
      icon: <Briefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Products",
      link: "#products",
      icon: <Package className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Testimonials",
      link: "#testimonials",
      icon: <MessageSquare className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "FAQ",
      link: "#faq",
      icon: <HelpCircle className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <Phone className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
} 