"use client"

export function CoolingTechnology() {
  return (
    <section className="relative py-24 px-4 bg-[#E6F7FF]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl text-center text-[#002D47] mb-16 tracking-wider">
          Cooling Technology
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="glassmorphism p-8 rounded-3xl">
              <img
                src="/technical-diagram-of-refrigerator-cooling-system-w.jpg"
                alt="Cooling Technology"
                className="w-full rounded-xl"
              />

              {/* Animated air circulation effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#00C2FF] rounded-full animate-ping" />
                <div
                  className="absolute top-1/2 right-1/4 w-4 h-4 bg-[#7DF9FF] rounded-full animate-ping"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-[#00C2FF] rounded-full animate-ping"
                  style={{ animationDelay: "2s" }}
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "DC 12V Power",
                description: "Runs on car battery without additional adapters",
                icon: "⚡",
              },
              {
                title: "Low Noise System",
                description: "Quiet compressor operation won't disturb your comfort on the road",
                icon: "🔇",
              },
              {
                title: "Smart Thermostat",
                description: "Intelligent temperature maintenance system",
                icon: "🌡️",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="glassmorphism p-6 rounded-2xl hover:scale-105 transition-transform duration-300 animate-breathe"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{feature.icon}</div>
                  <div>
                    <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-[#002D47] mb-2 tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-[#002D47]/70 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
