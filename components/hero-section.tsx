"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <img
          src="/car-on-highway-at-dawn-with-mist-and-fog--cinemati.jpg"
          alt="Car on highway"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E6F7FF]/50 to-[#E6F7FF]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 inline-block">
          <h1 className="font-[family-name:var(--font-bebas)] text-7xl md:text-9xl text-[#002D47] tracking-wider mb-2 animate-breathe">
            MINI<span className="text-[#00C2FF]">AUTO</span>FRIDGE
          </h1>
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#00C2FF] to-transparent" />
        </div>

        <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-bebas)] text-[#002D47] mb-6 tracking-wide">
          Freshness Always With You
        </h2>

        <p className="text-xl md:text-2xl text-[#002D47]/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          The Best Portable Refrigerators for Cars and Travel
        </p>

        <Link href="/reviews">
          <Button
            size="lg"
            className="relative overflow-hidden bg-[#00C2FF] hover:bg-[#7DF9FF] text-white text-xl px-12 py-6 rounded-full transition-all duration-300 shadow-lg shadow-[#00C2FF]/50 hover:shadow-[#7DF9FF]/70 hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="relative z-10 font-[family-name:var(--font-bebas)] tracking-wider">View Collection</span>
            {isHovered && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            )}
          </Button>
        </Link>

        {/* Floating snowflakes */}
        <div className="absolute top-20 left-10 text-[#00C2FF] text-4xl animate-float opacity-60">❄️</div>
        <div
          className="absolute top-40 right-20 text-[#00C2FF] text-3xl animate-float opacity-40"
          style={{ animationDelay: "1s" }}
        >
          ❄️
        </div>
        <div
          className="absolute bottom-40 left-1/4 text-[#00C2FF] text-5xl animate-float opacity-50"
          style={{ animationDelay: "2s" }}
        >
          ❄️
        </div>
      </div>
    </section>
  )
}
