"use client"

import { Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    slug: "bougerv-cr22-12v-refrigerator",
    name: "BougeRV CR22 12V Refrigerator",
    image: "https://m.media-amazon.com/images/I/61tZZPgoRUL._AC_SX679_.jpg",
    rating: 4.7,
    reviews: 1568,
    price: "$159.99",
    summary: "Fast cooling with low power consumption. Ideal for camping and road trips.",
  },
  {
    id: 2,
    slug: "dometic-cfx3-55im-portable-refrigerator",
    name: "Dometic CFX3 55IM Portable Refrigerator",
    image: "https://m.media-amazon.com/images/I/71pYiG0qwAL._AC_SX679_.jpg",
    rating: 4.9,
    reviews: 892,
    price: "$999.99",
    summary: "Premium quality with WiFi control. Incredibly efficient and quiet for serious travelers.",
  },
  {
    id: 3,
    slug: "alpicool-c15-mini-fridge",
    name: "Alpicool C15 Mini Fridge",
    image: "https://m.media-amazon.com/images/I/511iUQScIPL._AC_SX679_.jpg",
    rating: 4.6,
    reviews: 2103,
    price: "$139.99",
    summary: "Compact and affordable option. Great for daily commutes and weekend getaways.",
  },
  {
    id: 4,
    slug: "bougerv-crpro-30-12v-refrigerator",
    name: "BougeRV CRPRO 30 12V Refrigerator",
    image: "https://m.media-amazon.com/images/I/71yVcNCgj1L._AC_SX679_.jpg",
    rating: 4.7,
    reviews: 1432,
    price: "$229.99",
    summary: "Fast cooling with dual zone control. Reliable performance at an excellent price point.",
  },
  {
    id: 5,
    slug: "iceco-go20-dual-zone-refrigerator",
    name: "ICECO GO20 Dual Zone Refrigerator",
    image: "https://m.media-amazon.com/images/I/61E6sV5pJlL._AC_SX679_.jpg",
    rating: 4.8,
    reviews: 734,
    price: "$359.20",
    summary: "Separate freezer and fridge zones. Perfect for families who need versatile cooling options.",
  },
  {
    id: 6,
    slug: "setpower-pt35-portable-fridge",
    name: "Setpower PT35 Portable Fridge",
    image: "https://m.media-amazon.com/images/I/71OICIitTdL._AC_SX679_.jpg",
    rating: 4.5,
    reviews: 1891,
    price: "$199.99",
    summary: "Energy efficient with battery protection. Great value with solid build quality.",
  },
  {
    id: 7,
    slug: "bodegacooler-36-quart-portable-refrigerator",
    name: "BODEGACOOLER 36 Quart Portable Refrigerator",
    image: "https://m.media-amazon.com/images/I/81K7ewNeNTL._AC_SX679_.jpg",
    rating: 4.7,
    reviews: 1024,
    price: "$279.99",
    summary: "Rugged design for off-road adventures. Handles rough terrain without compromising cooling.",
  },
  {
    id: 8,
    slug: "setpower-pt35-portable-freezer",
    name: "Setpower PT35 Portable Freezer",
    image: "https://m.media-amazon.com/images/I/71OICIitTdL._AC_SX679_.jpg",
    rating: 4.5,
    reviews: 1891,
    price: "$199.99",
    summary: "Smart app control and fast cooling. Modern features at a competitive price.",
  },
  {
    id: 9,
    slug: "euhomy-12v-compact-refrigerator",
    name: "Euhomy 12V Compact Refrigerator",
    image: "https://m.media-amazon.com/images/I/71d72T7EV7L._AC_SX679_.jpg",
    rating: 4.8,
    reviews: 2247,
    price: "$219.99",
    summary: "Ultra-quiet operation with LED display. Customer favorite for reliability and performance.",
  },
]

export function ProductReviewCards() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6 animate-float">❄️</div>
          <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-6xl text-[#002D47] mb-4 tracking-wider">
            Top Rated Products
          </h2>
          <p className="text-lg text-[#002D47]/70 max-w-2xl mx-auto">
            Discover the best portable car refrigerators based on real customer reviews and expert testing
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-[#E6F7FF] hover:border-[#00C2FF] transition-all duration-300 hover:shadow-xl hover:shadow-[#00C2FF]/20 hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#E6F7FF] to-white">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Price Tag */}
                
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-[#002D47] mb-3 tracking-wide">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating) ? "fill-[#00C2FF] text-[#00C2FF]" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[#002D47] font-semibold">{product.rating}</span>
                  <span className="text-[#002D47]/60 text-sm">({product.reviews} reviews)</span>
                </div>

                {/* Summary */}
                <p className="text-[#002D47]/70 mb-6 leading-relaxed">{product.summary}</p>

                {/* CTA Button */}
                <Button
                  asChild
                  className="w-full bg-[#00C2FF] hover:bg-[#7DF9FF] text-white rounded-full transition-all duration-300 shadow-lg shadow-[#00C2FF]/30 hover:shadow-[#7DF9FF]/50 font-[family-name:var(--font-bebas)] tracking-wider text-lg"
                >
                  <Link href={`/product/${product.slug}`}>View Details</Link>
                </Button>
              </div>

              {/* Frost Effect on Hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-[#00C2FF]/10 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
