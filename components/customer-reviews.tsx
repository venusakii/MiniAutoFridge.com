"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"

const reviews = [
  {
    name: "Alex M.",
    rating: 5,
    text: "Excellent refrigerator for long trips! Keeps cold all day, very satisfied with the purchase.",
    location: "Moscow",
  },
  {
    name: "Irina K.",
    rating: 5,
    text: "Compact and powerful. Perfect for our camper. Highly recommend!",
    location: "Saint Petersburg",
  },
  {
    name: "Dmitry V.",
    rating: 4,
    text: "Good build quality, runs quietly. The only downside - a bit heavy.",
    location: "Kazan",
  },
]

export function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-white to-[#E6F7FF]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl text-center text-[#002D47] mb-16 tracking-wider">
          Customer Reviews
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="glassmorphism p-8 frost-effect">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-[#00C2FF] text-2xl">
                          ⭐
                        </span>
                      ))}
                    </div>
                    <p className="text-[#002D47] text-lg leading-relaxed mb-6 italic">"{review.text}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-[family-name:var(--font-bebas)] text-xl text-[#002D47] tracking-wide">
                          {review.name}
                        </p>
                        <p className="text-[#002D47]/60">{review.location}</p>
                      </div>
                      <div className="text-4xl animate-frost-pulse">❄️</div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-[#00C2FF] w-8" : "bg-[#00C2FF]/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
