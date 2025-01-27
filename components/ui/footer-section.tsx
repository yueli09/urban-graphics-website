"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footerdemo() {
  return (
    <footer className="w-full py-12 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Urban Graphics</h3>
            <p className="text-muted-foreground">
              Professional signage solutions for businesses of all sizes.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:urbangraphics22@gmail.com"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  urbangraphics22@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:212-619-1066"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  Office: 212-619-1066
                </a>
              </li>
              <li>
                <a
                  href="tel:646-229-6220"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  Lisa: 646-229-6220
                </a>
              </li>
              <li>
                <a
                  href="tel:646-479-0838"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  Jacky: 646-479-0838
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=149+East+Broadway+G/F+New+York,+NY+10002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2"
                >
                  <MapPin className="h-4 w-4" />
                  149 East Broadway G/F New York, NY 10002
                </a>
              </li>
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
            © {new Date().getFullYear()} Urban Graphics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
