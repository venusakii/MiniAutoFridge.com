import { CustomerReviews } from "@/components/customer-reviews"
import { VideoReviews } from "@/components/video-reviews"
import { AnimatedBackground } from "@/components/animated-background"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductReviewCards } from "@/components/product-review-cards"

export default function ReviewsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <Navigation />
      <div className="pt-20">
        <ProductReviewCards />
        <CustomerReviews />
        <VideoReviews />
      </div>
      <Footer />
    </main>
  )
}
