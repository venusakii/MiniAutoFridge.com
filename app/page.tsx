import { HeroSection } from "@/components/hero-section"
import { WhyItMatters } from "@/components/why-it-matters"
import { ProductCategories } from "@/components/product-categories"
import { FeaturedProduct } from "@/components/featured-product"
import { CoolingTechnology } from "@/components/cooling-technology"
import { ModelComparison } from "@/components/model-comparison"
import { CustomerReviews } from "@/components/customer-reviews"
import { BlogSection } from "@/components/blog-section"
import { VideoReviews } from "@/components/video-reviews"
import { Newsletter } from "@/components/newsletter"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { AnimatedBackground } from "@/components/animated-background"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <Navigation />
      <div id="home">
        <HeroSection />
      </div>
      <WhyItMatters />
      <ProductCategories />
      <FeaturedProduct />
      <CoolingTechnology />
      <ModelComparison />
      <div id="reviews">
        <CustomerReviews />
      </div>
      <BlogSection />
      <VideoReviews />
      <Newsletter />
      <div id="contact">
        <ContactSection />
      </div>
      <div id="about">
        <Footer />
      </div>
      <CookieBanner />
    </main>
  )
}
