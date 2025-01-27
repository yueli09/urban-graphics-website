"use client";

import { cn } from "@/lib/utils";

interface FeatureProps {
  title?: string;
  description?: string;
  items?: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

const defaultItems = [
  {
    title: "Custom Design",
    description: "Professional design services tailored to your brand identity and specific requirements.",
    icon: "🎨",
  },
  {
    title: "Quality Materials",
    description: "Premium materials that ensure durability and longevity for all our signage solutions.",
    icon: "✨",
  },
  {
    title: "Expert Installation",
    description: "Professional installation team with years of experience in handling complex projects.",
    icon: "🛠️",
  },
  {
    title: "Fast Turnaround",
    description: "Quick turnaround times without compromising on quality or attention to detail.",
    icon: "⚡",
  },
  {
    title: "Permit Assistance",
    description: "Expert guidance through the signage permit process, ensuring compliance with local regulations.",
    icon: "📋",
  },
  {
    title: "Competitive Pricing",
    description: "Cost-effective solutions that deliver excellent value for your investment.",
    icon: "💰",
  },
];

export function Feature({ 
  title = "Our Services", 
  description = "Comprehensive signage solutions for your business",
  items = defaultItems 
}: FeatureProps) {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              "group relative overflow-hidden",
              "px-8 py-12",
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
            <div className="mb-6 text-5xl transform group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.description}
            </p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}
