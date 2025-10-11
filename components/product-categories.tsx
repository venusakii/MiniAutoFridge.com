"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"

const categories = [
  {
    title: "Mini Car Refrigerators",
    image: "/compact-car-refrigerator-in-vehicle.jpg",
    description: "Compact solutions for your vehicle",
  },
  {
    title: "Compact Portable",
    image: "/portable-mini-fridge-for-camping.jpg",
    description: "Lightweight and mobile refrigerators",
  },
  {
    title: "With Heating Function",
    image: "/thermoelectric-cooler-warmer.jpg",
    description: "Cooling and heating in one device",
  },
  {
    title: "Camping Coolers",
    image: "/outdoor-camping-cooler-box.jpg",
    description: "For long hikes and camping trips",
  },
]

export function ProductCategories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl text-center text-[#002D47] mb-16 tracking-wider">
          Product Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="relative overflow-hidden group cursor-pointer border-2 border-[#00C2FF]/20 hover:border-[#00C2FF] transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-80">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Frost overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#00C2FF]/80 via-[#00C2FF]/40 to-transparent transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Logo appears on hover */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-6xl font-[family-name:var(--font-bebas)] tracking-widest animate-frost-pulse">
                      ❄️
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 bg-gradient-to-b from-white to-[#E6F7FF]">
                <h3 className="font-[family-name:var(--font-bebas)] text-3xl text-[#002D47] mb-2 tracking-wide">
                  {category.title}
                </h3>
                <p className="text-[#002D47]/70 leading-relaxed">{category.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
