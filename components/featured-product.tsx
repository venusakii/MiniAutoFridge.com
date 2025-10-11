"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export function FeaturedProduct() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-white to-[#E6F7FF] overflow-hidden">
      {/* Animated snowflakes background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#00C2FF] opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 4}s`,
            }}
          >
            ❄️
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className="inline-block px-6 py-2 bg-[#00C2FF] text-white rounded-full mb-4 font-[family-name:var(--font-bebas)] text-xl tracking-wider">
            Top Product of the Week
          </div>
          <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl text-[#002D47] tracking-wider">
            AstroAI 12V Portable Refrigerator
          </h2>
        </div>

        <Card className="glassmorphism overflow-hidden border-2 border-[#00C2FF]/30">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="relative">
              <img
                src="/portable-car-refrigerator-in-vehicle-interior--mod.jpg"
                alt="AstroAI Refrigerator"
                className="w-full h-full object-cover rounded-xl shadow-2xl shadow-[#00C2FF]/30"
              />
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <h3 className="font-[family-name:var(--font-bebas)] text-4xl text-[#002D47] tracking-wide">
                Small. Powerful. Perfect for Any Route.
              </h3>

              <ul className="space-y-4">
                {[
                  "Capacity: 12 liters",
                  "Temperature: -20°C to +20°C",
                  "Power: 12V/24V DC",
                  "Low Noise Level: 45 dB",
                  "Power Consumption: 45W",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#002D47]/80 text-lg">
                    <span className="text-[#00C2FF] text-2xl">❄️</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="bg-[#00C2FF] hover:bg-[#7DF9FF] text-white text-xl px-8 py-6 rounded-full transition-all duration-300 shadow-lg shadow-[#00C2FF]/50 hover:shadow-[#7DF9FF]/70 hover:scale-105 font-[family-name:var(--font-bebas)] tracking-wider"
              >
                <Link href="/product">Learn More</Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
