import { ContactSection } from "@/components/contact-section"
import { Newsletter } from "@/components/newsletter"
import { AnimatedBackground } from "@/components/animated-background"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <Navigation />
      <div className="pt-20">
        <ContactSection />
        <Newsletter />
      </div>
      <Footer />
    </main>
  )
}
