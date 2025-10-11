"use client"

import { useState } from "react"

export function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const links = ["Privacy Policy", "Terms", "Contact", "About Us"]

  return (
    <footer className="relative bg-[#002D47] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Ice line divider */}
        <div className="relative h-1 mb-8 overflow-hidden rounded-full bg-[#00C2FF]/20">
          <div
            className={`absolute inset-0 bg-gradient-to-r from-[#00C2FF] via-[#7DF9FF] to-[#00C2FF] transition-opacity duration-500 ${
              hoveredLink ? "opacity-100" : "opacity-50"
            }`}
          />
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-white/70 hover:text-[#7DF9FF] transition-colors duration-300 relative"
              onMouseEnter={() => setHoveredLink(link)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link}
              {hoveredLink === link && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#7DF9FF] animate-pulse" />
              )}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-white/60 text-sm leading-relaxed">
          <p className="mb-2">© {new Date().getFullYear()} MiniAutoFridge.com. All rights reserved.</p>
          <p>Amazon Affiliate Program Participant. 🛒 As an Amazon Associate, we earn from qualifying purchases.</p>
        </div>
      </div>
    </footer>
  )
}
