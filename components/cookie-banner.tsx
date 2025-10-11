"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookiesAccepted")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-in slide-in-from-bottom duration-500">
      <div className="glassmorphism p-6 rounded-2xl border-2 border-[#00C2FF]/30 shadow-2xl shadow-[#00C2FF]/20">
        <div className="flex items-start gap-4">
          <div className="text-3xl animate-frost-pulse">🍪</div>
          <div className="flex-1">
            <p className="text-[#002D47] dark:text-white leading-relaxed mb-4">
              This website uses cookies to improve your experience and analyze site usage. By continuing, you consent to
              the use of cookies.
            </p>
            <Button
              onClick={handleAccept}
              className="w-full bg-[#00C2FF] hover:bg-[#7DF9FF] text-white font-[family-name:var(--font-bebas)] text-lg tracking-wider transition-all duration-300 shadow-lg shadow-[#00C2FF]/50 hover:shadow-[#7DF9FF]/70 frost-effect"
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
