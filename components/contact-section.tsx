"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section className="relative py-24 px-4 bg-[#002D47] text-white overflow-hidden">
      {/* Night road effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-[#00C2FF] to-transparent" />
        <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-transparent via-[#00C2FF] to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl text-center mb-16 tracking-wider">
          Contact & Map
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glassmorphism p-8 rounded-2xl">
            <h3 className="font-[family-name:var(--font-bebas)] text-3xl mb-6 tracking-wide">Get In Touch</h3>
            <form className="space-y-4">
              <Input
                placeholder="Your name"
                className="bg-white/10 border-[#00C2FF]/30 text-white placeholder:text-white/50"
              />
              <Input
                type="email"
                placeholder="Email"
                className="bg-white/10 border-[#00C2FF]/30 text-white placeholder:text-white/50"
              />
              <Textarea
                placeholder="Your message"
                rows={5}
                className="bg-white/10 border-[#00C2FF]/30 text-white placeholder:text-white/50"
              />
              <Button className="w-full bg-[#00C2FF] hover:bg-[#7DF9FF] text-white font-[family-name:var(--font-bebas)] text-xl tracking-wider">
                Send
              </Button>
            </form>
          </div>

          {/* Map Placeholder */}
          <div className="glassmorphism rounded-2xl overflow-hidden">
            <img
              src="/night-highway-map-with-cold-blue-lighting.jpg"
              alt="Map"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
