import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { notFound } from "next/navigation"

// Product data with slugs
const products = [
  {
    id: 1,
    slug: "bougerv-cr22-12v-refrigerator",
    name: "BougeRV CR22 12V Refrigerator",
    image: "https://m.media-amazon.com/images/I/61tZZPgoRUL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/BougeRV-Portable-Refrigerator-Compressor-Tailgating/dp/B08G1BBBQW",
    rating: 4.7,
    reviews: 1568,
    price: "$159.99",
    summary: "Fast cooling with low power consumption. Ideal for camping and road trips.",
    description:
      "The BougeRV CR22 12V Refrigerator is a compact, portable cooler with a 23-quart capacity, capable of cooling from 77°F to 32°F in just 15 minutes. Its compressor technology ensures efficient performance with low power consumption (36W in ECO mode). Designed for vehicles like SUVs, trucks, and RVs, it features a shock-proof design and 3-level battery protection to prevent drainage.",
    features: [
      "23-quart capacity - perfect for 35 cans",
      "Temperature range: -5°F to 50°F",
      "Dual power: 12/24V DC, 110-240V AC",
      "Ultra-quiet operation at 45 dB",
      "Energy efficient: only 36W in ECO mode",
      "Digital temperature display",
      "3-level battery protection",
      "Shock-proof design for rough terrain",
    ],
    specs: {
      capacity: "23 Quarts",
      dimensions: '22.68" L x 12.6" W x 12.97" H',
      weight: "22.27 lbs",
      power: "12/24V DC, 110-240V AC",
      coolingRange: "-5°F to 50°F",
      noiseLevel: "45 dB",
      warranty: "2 years",
    },
  },
  {
    id: 2,
    slug: "dometic-cfx3-55im-portable-refrigerator",
    name: "Dometic CFX3 55IM Portable Refrigerator",
    image: "https://m.media-amazon.com/images/I/71pYiG0qwAL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Dometic-57-Liter-Portable-Refrigerator-Freezer/dp/B0DF7YYJJ5",
    rating: 4.9,
    reviews: 892,
    price: "$999.99",
    summary: "Premium quality with WiFi control. Incredibly efficient and quiet for serious travelers.",
    description:
      "The Dometic CFX3 55IM is a premium 57-liter portable refrigerator/freezer designed for serious adventurers. It features a powerful compressor for rapid cooling to -7°F and WiFi/app control for remote temperature adjustments. Its robust construction handles rough terrain, and the efficient design ensures low power consumption.",
    features: [
      "57-liter capacity - holds up to 88 cans",
      "Temperature range: -7°F to 50°F",
      "WiFi and app control for remote monitoring",
      "Powerful compressor for rapid cooling",
      "USB charging port for devices",
      "Reinforced corners for durability",
      "Energy efficient design",
      "Premium build quality",
    ],
    specs: {
      capacity: "57 Liters",
      dimensions: '28.3" L x 17.9" W x 18.9" H',
      weight: "47.6 lbs",
      power: "12/24V DC, 100-240V AC",
      coolingRange: "-7°F to 50°F",
      noiseLevel: "42 dB",
      warranty: "3 years",
    },
  },
  {
    id: 3,
    slug: "alpicool-c15-mini-fridge",
    name: "Alpicool C15 Mini Fridge",
    image: "https://m.media-amazon.com/images/I/511iUQScIPL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Alpicool-C15-Portable-Refrigerator-Vehicle/dp/B073WYS3TR",
    rating: 4.6,
    reviews: 2103,
    price: "$139.99",
    summary: "Compact and affordable option. Great for daily commutes and weekend getaways.",
    description:
      "The Alpicool C15 Mini Fridge is a compact 15-liter portable refrigerator perfect for small vehicles and short trips. It cools down to -4°F and operates on 12/24V DC power, making it suitable for cars, trucks, and boats. Its lightweight design and low noise level make it a practical choice for daily use.",
    features: [
      "15-liter capacity - holds up to 18 cans",
      "Temperature range: -4°F to 68°F",
      "Lightweight at only 18.7 lbs",
      "Compact design for small spaces",
      "Low noise operation at 45 dB",
      "12/24V DC power compatible",
      "Affordable price point",
      "Perfect for daily commutes",
    ],
    specs: {
      capacity: "15 Liters",
      dimensions: '23.4" L x 12.6" W x 10.2" H',
      weight: "18.7 lbs",
      power: "12/24V DC",
      coolingRange: "-4°F to 68°F",
      noiseLevel: "45 dB",
      warranty: "1 year",
    },
  },
  {
    id: 4,
    slug: "bougerv-crpro-30-12v-refrigerator",
    name: "BougeRV CRPRO 30 12V Refrigerator",
    image: "https://m.media-amazon.com/images/I/71yVcNCgj1L._AC_SX679_.jpg",
    amazonUrl:
      "https://www.amazon.com/BougeRV-Refrigerator-110-240Volt-Tailgating-use%EF%BC%8C-4%E2%84%89-50%E2%84%89/dp/B0869NCSNH",
    rating: 4.7,
    reviews: 1432,
    price: "$229.99",
    summary: "Fast cooling with dual zone control. Reliable performance at an excellent price point.",
    description:
      "The BougeRV CRPRO 30 12V Refrigerator offers a 30-quart capacity with dual-zone control, allowing simultaneous cooling and freezing from -4°F to 50°F. Its compressor ensures rapid cooling, and the unit supports both 12/24V DC and 110-240V AC power.",
    features: [
      "30-quart capacity - holds up to 48 cans",
      "Dual-zone control for fridge and freezer",
      "Temperature range: -4°F to 50°F",
      "Rapid cooling technology",
      "3-level battery protection",
      "Low power consumption at 45W max",
      "Digital display with touch controls",
      "Versatile power options",
    ],
    specs: {
      capacity: "30 Quarts",
      dimensions: '23.6" L x 13.8" W x 14.2" H',
      weight: "25.4 lbs",
      power: "12/24V DC, 110-240V AC",
      coolingRange: "-4°F to 50°F",
      noiseLevel: "45 dB",
      warranty: "2 years",
    },
  },
  {
    id: 5,
    slug: "iceco-go20-dual-zone-refrigerator",
    name: "ICECO GO20 Dual Zone Refrigerator",
    image: "https://m.media-amazon.com/images/I/61E6sV5pJlL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/ICECO-Portable-Refrigerator-Compressor-100-240V/dp/B07THMM1CK",
    rating: 4.8,
    reviews: 734,
    price: "$359.20",
    summary: "Separate freezer and fridge zones. Perfect for families who need versatile cooling options.",
    description:
      "The ICECO GO20 Dual Zone Refrigerator offers a 21-quart capacity with separate freezer and fridge zones, cooling from 0°F to 50°F using a SECOP compressor. It supports 12/24V DC and 100-240V AC power, making it versatile for vehicles and home use.",
    features: [
      "21-quart dual-zone capacity",
      "Separate freezer and fridge compartments",
      "SECOP compressor for reliability",
      "Temperature range: 0°F to 50°F",
      "Versatile power options",
      "Durable construction",
      "Digital temperature control",
      "Excellent customer service",
    ],
    specs: {
      capacity: "21 Quarts",
      dimensions: '22.4" L x 12.6" W x 12.4" H',
      weight: "23.1 lbs",
      power: "12/24V DC, 100-240V AC",
      coolingRange: "0°F to 50°F",
      noiseLevel: "40 dB",
      warranty: "1 year",
    },
  },
  {
    id: 6,
    slug: "setpower-pt35-portable-fridge",
    name: "Setpower PT35 Portable Fridge",
    image: "https://m.media-amazon.com/images/I/71OICIitTdL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Setpower-PT35-Refrigerator-AC-Portable/dp/B0BZTX8FCS",
    rating: 4.5,
    reviews: 1891,
    price: "$199.99",
    summary: "Energy efficient with battery protection. Great value with solid build quality.",
    description:
      "The Setpower PT35 Portable Fridge offers a 35-liter capacity with efficient cooling down to -4°F. It features a 3-level battery protection system to prevent vehicle battery drain and supports 12/24V DC and 100-240V AC power.",
    features: [
      "35-liter capacity - holds up to 50 cans",
      "Temperature range: -4°F to 50°F",
      "3-level battery protection system",
      "Energy efficient at 45W max",
      "Robust design for off-road use",
      "Digital temperature display",
      "Dual power options",
      "Great value for money",
    ],
    specs: {
      capacity: "35 Liters",
      dimensions: '25.6" L x 15.3" W x 16.3" H',
      weight: "30.9 lbs",
      power: "12/24V DC, 100-240V AC",
      coolingRange: "-4°F to 50°F",
      noiseLevel: "43 dB",
      warranty: "1 year",
    },
  },
  {
    id: 7,
    slug: "bodegacooler-36-quart-portable-refrigerator",
    name: "BODEGACOOLER 36 Quart Portable Refrigerator",
    image: "https://m.media-amazon.com/images/I/81K7ewNeNTL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/BODEGACOOLER-Refrigerator-Control-Portable-100-240V/dp/B0CYWPRC7X",
    rating: 4.7,
    reviews: 1024,
    price: "$279.99",
    summary: "Rugged design for off-road adventures. Handles rough terrain without compromising cooling.",
    description:
      "The BODEGACOOLER 36 Quart Portable Refrigerator is built for rugged outdoor use, cooling from -4°F to 46°F with a reliable compressor. It supports 12/24V DC and 100-240V AC power, with app control for temperature adjustments.",
    features: [
      "36-quart capacity - holds up to 54 cans",
      "Temperature range: -4°F to 46°F",
      "App control for remote monitoring",
      "Shock-resistant design",
      "Handles rough terrain",
      "Durable construction",
      "Digital display",
      "Versatile power options",
    ],
    specs: {
      capacity: "36 Quarts",
      dimensions: '26.1" L x 14.2" W x 17.1" H',
      weight: "33.1 lbs",
      power: "12/24V DC, 100-240V AC",
      coolingRange: "-4°F to 46°F",
      noiseLevel: "45 dB",
      warranty: "2 years",
    },
  },
  {
    id: 8,
    slug: "setpower-pt35-portable-freezer",
    name: "Setpower PT35 Portable Freezer",
    image: "https://m.media-amazon.com/images/I/71OICIitTdL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Setpower-PT35-Refrigerator-AC-Portable/dp/B0BZTX8FCS",
    rating: 4.5,
    reviews: 1891,
    price: "$199.99",
    summary: "Smart app control and fast cooling. Modern features at a competitive price.",
    description:
      "The Setpower PT35 Portable Freezer is a versatile 35-liter cooler with fast cooling to -4°F. It features app control for easy temperature management and a 3-level battery protection system.",
    features: [
      "35-liter capacity - holds up to 50 cans",
      "Smart app control",
      "Fast cooling to -4°F",
      "3-level battery protection",
      "Temperature range: -4°F to 50°F",
      "Modern digital display",
      "Energy efficient operation",
      "Competitive pricing",
    ],
    specs: {
      capacity: "35 Liters",
      dimensions: '25.6" L x 15.3" W x 16.3" H',
      weight: "30.9 lbs",
      power: "12/24V DC, 100-240V AC",
      coolingRange: "-4°F to 50°F",
      noiseLevel: "43 dB",
      warranty: "1 year",
    },
  },
  {
    id: 9,
    slug: "euhomy-12v-compact-refrigerator",
    name: "Euhomy 12V Compact Refrigerator",
    image: "https://m.media-amazon.com/images/I/71d72T7EV7L._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/EUHOMY-Compact-Refrigerator-Portable-SkinCare/dp/B0F2LMSQ1M",
    rating: 4.8,
    reviews: 2247,
    price: "$219.99",
    summary: "Ultra-quiet operation with LED display. Customer favorite for reliability and performance.",
    description:
      "The Euhomy 12V Compact Refrigerator is a 12-liter portable cooler designed for quiet operation (40 dB) and reliable cooling from -4°F to 50°F. It features an LED display for easy temperature control and supports 12/24V DC and 110-240V AC power.",
    features: [
      "12-liter capacity - perfect for essentials",
      "Ultra-quiet at only 40 dB",
      "LED temperature display",
      "Temperature range: -4°F to 50°F",
      "Compact and lightweight",
      "Reliable cooling performance",
      "Dual power options",
      "Great for skincare storage",
    ],
    specs: {
      capacity: "12 Liters",
      dimensions: '20.5" L x 10.8" W x 11.8" H',
      weight: "15.4 lbs",
      power: "12/24V DC, 110-240V AC",
      coolingRange: "-4°F to 50°F",
      noiseLevel: "40 dB",
      warranty: "1 year",
    },
  },
]

export default function ProductPage({ params }: { params: { slug: string } }) {
  // Find product by slug
  const product = products.find((p) => p.slug === params.slug)

  // If product not found, show 404
  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#E6F7FF] to-white">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <Link
          href="/reviews"
          className="inline-flex items-center gap-2 text-[#00C2FF] hover:text-[#002D47] mb-8 transition-colors"
        >
          ← Back to Reviews
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full rounded-2xl shadow-2xl shadow-[#00C2FF]/30"
            />
          </div>

          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-1 bg-[#00C2FF] text-white rounded-full mb-4 text-sm font-[family-name:var(--font-bebas)] tracking-wider">
                {product.rating} ⭐ ({product.reviews} reviews)
              </div>
              <h1 className="font-[family-name:var(--font-bebas)] text-5xl md:text-6xl text-[#002D47] tracking-wider mb-4">
                {product.name}
              </h1>

              

              <p className="text-[#002D47]/70 text-lg leading-relaxed">{product.description}</p>
            </div>

            <Card className="glassmorphism p-6 border-2 border-[#00C2FF]/30">
              <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-[#002D47] mb-4 tracking-wide">
                Key Features
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#002D47]/80">
                    <span className="text-[#00C2FF] text-xl mt-1">❄️</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="flex-1 bg-[#00C2FF] hover:bg-[#7DF9FF] text-white text-xl px-8 py-6 rounded-full transition-all duration-300 shadow-lg shadow-[#00C2FF]/50 hover:shadow-[#7DF9FF]/70 hover:scale-105 font-[family-name:var(--font-bebas)] tracking-wider"
              >
                <Link href={product.amazonUrl} target="_blank" rel="noopener noreferrer">
                  Buy on Amazon
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <Card className="glassmorphism p-8 border-2 border-[#00C2FF]/30">
            <h2 className="font-[family-name:var(--font-bebas)] text-4xl text-[#002D47] mb-6 tracking-wider">
              Technical Specifications
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(product.specs).map(([key, value], index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-[#00C2FF]/20">
                  <span className="text-[#002D47]/70 font-medium capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                  <span className="text-[#002D47] font-bold">{value}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
