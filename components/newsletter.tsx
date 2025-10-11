"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-white to-[#E6F7FF] overflow-hidden">
      {/* Animated frost effect on focus */}
      {isFocused && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[#00C2FF]/5 animate-pulse" />
        </div>
      )}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="text-6xl mb-6 animate-float">🧊</div>
        <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-6xl text-[#002D47] mb-6 tracking-wider">
          Stay Updated on New Models and Discounts
        </h2>
        <p className="text-xl text-[#002D47]/70 mb-8 leading-relaxed">Fresh ideas every week 🧊</p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="flex-1 h-14 px-6 text-lg glassmorphism border-2 border-[#00C2FF]/30 focus:border-[#00C2FF] transition-all duration-300"
          />
          <Button
            size="lg"
            className="h-14 px-8 bg-[#00C2FF] hover:bg-[#7DF9FF] text-white text-lg font-[family-name:var(--font-bebas)] tracking-wider transition-all duration-300 shadow-lg shadow-[#00C2FF]/50 hover:shadow-[#7DF9FF]/70"
          >
            Subscribe to Freshness
          </Button>
        </div>
      </div>
    </section>
  )
}
