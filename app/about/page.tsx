import { WhyItMatters } from "@/components/why-it-matters"
import { CoolingTechnology } from "@/components/cooling-technology"
import { AnimatedBackground } from "@/components/animated-background"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <Navigation />
      <div className="pt-20">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-5xl md:text-7xl text-electric-ice mb-8 text-center">
              About MiniAutoFridge
            </h1>
            <div className="glass-card p-8 space-y-6 text-ice-blue/90 leading-relaxed">
              <p className="text-lg">
                Welcome to MiniAutoFridge.com - your ultimate destination for discovering the perfect portable cooling
                solution for your adventures.
              </p>
              <p>
                We are passionate about helping travelers, road trippers, campers, and outdoor enthusiasts find the
                ideal mini refrigerator that keeps their food and drinks perfectly chilled on the go.
              </p>
              <p>
                Our mission is to provide comprehensive, unbiased reviews and comparisons of the best portable car
                refrigerators on the market. We test and evaluate each model based on cooling performance, energy
                efficiency, durability, and real-world usability.
              </p>
              <p>
                Whether you're planning a cross-country road trip, a weekend camping adventure, or simply need reliable
                cooling for your daily commute, we're here to help you make an informed decision.
              </p>
            </div>
          </div>
        </section>
        <WhyItMatters />
        <CoolingTechnology />
      </div>
      <Footer />
    </main>
  )
}
