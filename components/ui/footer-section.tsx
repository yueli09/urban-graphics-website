"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Mail, Phone, MapPin } from "lucide-react"

interface FooterProps {
  companyName: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export function Footerdemo({ companyName, links }: FooterProps) {
  return (
    <footer className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">{companyName}</h3>
            <p className="text-muted-foreground">
              Professional signage solutions for businesses of all sizes.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-4">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground flex items-center gap-2"
                  >
                    {link.label.includes("Email") && <Mail className="h-4 w-4" />}
                    {(link.label.includes("Office") || 
                      link.label.includes("Lisa") || 
                      link.label.includes("Jacky")) && <Phone className="h-4 w-4" />}
                    {link.label.includes("Address") && <MapPin className="h-4 w-4" />}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Business Hours</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
