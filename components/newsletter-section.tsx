"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-[#E6F7FF] to-white overflow-hidden">
      {/* Animated frost particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#00C2FF] rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="glassmorphism p-12 rounded-3xl frost-effect">
          <div className="text-6xl mb-6 animate-frost-pulse">📧</div>
          <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-6xl text-[#002D47] mb-4 tracking-wider">
            Stay Updated
          </h2>
          <p className="text-[#002D47]/70 text-lg mb-8 leading-relaxed">
            Subscribe to our newsletter for the latest reviews, tips, and exclusive deals on portable refrigerators
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white border-[#00C2FF]/30 focus:border-[#00C2FF] text-[#002D47]"
            />
            <Button className="bg-[#00C2FF] hover:bg-[#7DF9FF] text-white px-8 font-[family-name:var(--font-bebas)] text-xl tracking-wider transition-all duration-300 shadow-lg shadow-[#00C2FF]/50 hover:shadow-[#7DF9FF]/70 hover:scale-105">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
