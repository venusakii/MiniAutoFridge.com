"use client"

import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: "🧊",
    title: "Keeps Cold Up to 24 Hours",
    description: "Advanced insulation for maximum efficiency",
  },
  {
    icon: "⚡",
    title: "Energy Efficient",
    description: "Low power consumption, runs on 12V",
  },
  {
    icon: "🚗",
    title: "Perfect for Travel",
    description: "Compact design for any vehicle",
  },
  {
    icon: "🧃",
    title: "Great for Drinks and Food",
    description: "Enough space for all your essentials",
  },
]

export function WhyItMatters() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 px-4 bg-gradient-to-b from-[#E6F7FF] to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl text-center text-[#002D47] mb-16 tracking-wider">
          Why It Matters
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`glassmorphism p-8 rounded-2xl text-center transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-[#00C2FF]/30 ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-6xl mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                {feature.icon}
              </div>
              <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-[#002D47] mb-3 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-[#002D47]/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
