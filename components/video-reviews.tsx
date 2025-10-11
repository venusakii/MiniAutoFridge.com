"use client"

import { useState } from "react"

export function VideoReviews() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="relative py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl text-center text-[#002D47] mb-16 tracking-wider">
          Video Reviews
        </h2>

        <div className="relative glassmorphism rounded-3xl overflow-hidden aspect-video">
          <img
            src="/portable-car-refrigerator-3d-product-view.jpg"
            alt="Video Review"
            className="w-full h-full object-cover"
          />

          {/* Play button with frost ring */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute inset-0 flex items-center justify-center group"
          >
            <div className="relative">
              {/* Frost ring animation */}
              <div className="absolute inset-0 w-24 h-24 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <div className="absolute inset-0 border-4 border-[#00C2FF] rounded-full animate-ping" />
                <div
                  className="absolute inset-0 border-4 border-[#7DF9FF] rounded-full animate-ping"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>

              {/* Play button */}
              <div className="relative w-24 h-24 bg-[#00C2FF] rounded-full flex items-center justify-center group-hover:bg-[#7DF9FF] transition-colors duration-300 shadow-2xl shadow-[#00C2FF]/50">
                <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-2" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
