import { Card } from "@/components/ui/card"

const articles = [
  {
    title: "How to Choose a Car Refrigerator?",
    excerpt: "Complete guide to choosing the perfect portable refrigerator for your vehicle",
    image: "/car-refrigerator-buying-guide.jpg",
  },
  {
    title: "TOP-5 for Camping",
    excerpt: "Best refrigerator models for hiking and outdoor recreation",
    image: "/camping-cooler-in-nature.jpg",
  },
  {
    title: "How to Connect to Car Battery",
    excerpt: "Step-by-step guide for safely connecting a refrigerator to your vehicle",
    image: "/car-battery-connection-diagram.jpg",
  },
]

export function BlogSection() {
  return (
    <section className="relative py-24 px-4 bg-[#E6F7FF]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl text-center text-[#002D47] mb-16 tracking-wider">
          Tips & Blog
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="glassmorphism overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00C2FF]/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-[#002D47] mb-3 tracking-wide">
                  {article.title}
                </h3>
                <p className="text-[#002D47]/70 leading-relaxed">{article.excerpt}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
