"use client"

import { useState, useRef } from "react"
import Image from "next/image"

export function VideoReviews() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="relative py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl text-center text-[#002D47] mb-16 tracking-wider">
          Video Reviews
        </h2>

        <div className="relative glassmorphism rounded-3xl overflow-hidden aspect-video">
          {!isPlaying && (
            <Image
              src="/portable-car-refrigerator-3d-product-view.jpg"
              alt="Portable Car Refrigerator Video Review"
              fill
              className="object-cover"
            />
          )}

          {/* Play button with frost ring - only show when paused */}
          {!isPlaying && (
            <button onClick={togglePlay} className="absolute inset-0 flex items-center justify-center group">
              <div className="relative">
                {/* Frost ring animation */}
                <div className="absolute inset-0 w-24 h-24 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                  
                  
                </div>

                {/* Play button */}
                
              </div>
            </button>
          )}

          {isPlaying && (
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/portable-car-refrigerator-3d-product-view.jpg"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          )}

          {isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center group opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20"
            >
              <div className="w-24 h-24 bg-[#00C2FF] rounded-full flex items-center justify-center group-hover:bg-[#7DF9FF] transition-colors duration-300 shadow-2xl shadow-[#00C2FF]/50">
                <div className="flex gap-2">
                  <div className="w-2 h-8 bg-white rounded" />
                  <div className="w-2 h-8 bg-white rounded" />
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
