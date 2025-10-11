"use client"

import { useState } from "react"

const models = [
  { name: "AstroAI", capacity: "12L", temp: "-20°C to +20°C", power: "45W", price: "$199" },
  { name: "BougeRV", capacity: "15L", temp: "-18°C to +10°C", power: "50W", price: "$249" },
  { name: "ICECO", capacity: "20L", temp: "-25°C to +20°C", power: "60W", price: "$299" },
  { name: "Alpicool", capacity: "18L", temp: "-20°C to +20°C", power: "55W", price: "$279" },
]

export function ModelComparison() {
  const [hoveredCell, setHoveredCell] = useState<string | null>(null)

  return (
    <section className="relative py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl text-center text-[#002D47] mb-16 tracking-wider">
          Model Comparison
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full glassmorphism rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-[#00C2FF] text-white">
                <th className="p-4 text-left font-[family-name:var(--font-bebas)] text-2xl tracking-wide">Model</th>
                <th className="p-4 text-left font-[family-name:var(--font-bebas)] text-2xl tracking-wide">Capacity</th>
                <th className="p-4 text-left font-[family-name:var(--font-bebas)] text-2xl tracking-wide">
                  Temperature
                </th>
                <th className="p-4 text-left font-[family-name:var(--font-bebas)] text-2xl tracking-wide">Power</th>
                <th className="p-4 text-left font-[family-name:var(--font-bebas)] text-2xl tracking-wide">Price</th>
              </tr>
            </thead>
            <tbody>
              {models.map((model, rowIndex) => (
                <tr key={rowIndex} className="border-b border-[#00C2FF]/20 hover:bg-[#E6F7FF]/50 transition-colors">
                  {Object.entries(model).map(([key, value], colIndex) => (
                    <td
                      key={`${rowIndex}-${colIndex}`}
                      className={`p-4 text-[#002D47] transition-all duration-300 ${
                        hoveredCell === `${rowIndex}-${colIndex}` ? "bg-[#00C2FF]/10 scale-105" : ""
                      }`}
                      onMouseEnter={() => setHoveredCell(`${rowIndex}-${colIndex}`)}
                      onMouseLeave={() => setHoveredCell(null)}
                    >
                      {colIndex === 0 ? (
                        <span className="font-[family-name:var(--font-bebas)] text-xl tracking-wide">{value}</span>
                      ) : (
                        value
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
