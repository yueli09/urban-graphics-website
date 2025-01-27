"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Urban Graphics transformed our storefront with their stunning LED signage. The quality and attention to detail is exceptional, and their team was professional throughout the entire process.",
    name: "Michael C.",
    title: "Restaurant Owner",
  },
  {
    quote: "We needed custom vehicle wraps for our entire delivery fleet, and Urban Graphics delivered beyond our expectations. The designs are eye-catching and the installation was flawless.",
    name: "Sarah R.",
    title: "Operations Manager",
  },
  {
    quote: "Their expertise in architectural signage made our office building stand out. From permit assistance to installation, they handled everything professionally and efficiently.",
    name: "David P.",
    title: "Property Manager",
  },
  {
    quote: "The digital menu boards Urban Graphics installed have revolutionized our restaurant. Easy to update and crystal clear display - exactly what we needed!",
    name: "Lisa W.",
    title: "Restaurant Owner",
  },
  {
    quote: "Outstanding service from start to finish. Their team helped us navigate the permit process and delivered a beautiful illuminated sign that perfectly represents our brand.",
    name: "Robert M.",
    title: "CEO",
  },
  {
    quote: "The window graphics they designed for our retail stores are perfect. The quality is exceptional, and they were able to maintain consistency across all our locations.",
    name: "Jennifer L.",
    title: "Marketing Director",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
          Client Testimonials
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Hear what our clients say about their experience with Urban Graphics
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={cn(
            "relative overflow-hidden",
            "p-8",
            "rounded-3xl",
            "bg-gradient-to-br from-white/90 to-white/50 dark:from-zinc-800/90 dark:to-zinc-800/50",
            "border border-border/50",
            "hover:border-primary/50",
            "hover:shadow-lg hover:shadow-primary/5",
            "transition-all duration-300 ease-in-out",
            "backdrop-blur-sm"
          )}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="relative">
            <div className="text-4xl text-primary/20 mb-4">&ldquo;</div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {testimonials[currentIndex].quote}
            </p>
            <div className="text-right">
              <h4 className="font-semibold text-foreground">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-sm text-muted-foreground">
                {testimonials[currentIndex].title}
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </motion.div>
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "bg-primary w-4"
                  : "bg-primary/20 hover:bg-primary/40"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
