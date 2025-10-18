import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, Mail } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6F7FF] via-white to-[#E6F7FF] pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-[#002D47] hover:text-[#00C2FF] hover:bg-[#E6F7FF]">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-[#00C2FF]/10 rounded-full mb-4">
            <Shield className="w-12 h-12 text-[#00C2FF]" />
          </div>
          <h1 className="font-[family-name:var(--font-bebas)] text-5xl md:text-6xl text-[#002D47] mb-4 tracking-wider">
            Privacy Policy
          </h1>
          <p className="text-[#002D47]/70 text-lg">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <Card className="p-8 glassmorphism border-[#00C2FF]/20">
            <div className="flex items-start gap-4 mb-4">
              <Eye className="w-6 h-6 text-[#00C2FF] mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-[family-name:var(--font-bebas)] text-3xl text-[#002D47] mb-3 tracking-wide">
                  Information We Collect
                </h2>
                <p className="text-[#002D47]/80 leading-relaxed mb-3">
                  At MiniAutoFridge.com, we collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#002D47]/80 ml-4">
                  <li>Email addresses when you subscribe to our newsletter</li>
                  <li>Contact information when you reach out to us</li>
                  <li>Usage data and analytics to improve our website</li>
                  <li>Cookie data for website functionality and preferences</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 glassmorphism border-[#00C2FF]/20">
            <div className="flex items-start gap-4 mb-4">
              <Database className="w-6 h-6 text-[#00C2FF] mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-[family-name:var(--font-bebas)] text-3xl text-[#002D47] mb-3 tracking-wide">
                  How We Use Your Information
                </h2>
                <p className="text-[#002D47]/80 leading-relaxed mb-3">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 text-[#002D47]/80 ml-4">
                  <li>Send you newsletters and updates about portable refrigerators</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Improve our website content and user experience</li>
                  <li>Analyze trends and optimize our affiliate recommendations</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 glassmorphism border-[#00C2FF]/20">
            <div className="flex items-start gap-4 mb-4">
              <Lock className="w-6 h-6 text-[#00C2FF] mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-[family-name:var(--font-bebas)] text-3xl text-[#002D47] mb-3 tracking-wide">
                  Data Security
                </h2>
                <p className="text-[#002D47]/80 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of
                  transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 glassmorphism border-[#00C2FF]/20">
            <div className="flex items-start gap-4 mb-4">
              <UserCheck className="w-6 h-6 text-[#00C2FF] mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-[family-name:var(--font-bebas)] text-3xl text-[#002D47] mb-3 tracking-wide">
                  Your Rights
                </h2>
                <p className="text-[#002D47]/80 leading-relaxed mb-3">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-[#002D47]/80 ml-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications at any time</li>
                  <li>Object to processing of your personal information</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 glassmorphism border-[#00C2FF]/20">
            <div className="flex items-start gap-4 mb-4">
              <Mail className="w-6 h-6 text-[#00C2FF] mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-[family-name:var(--font-bebas)] text-3xl text-[#002D47] mb-3 tracking-wide">
                  Contact Us
                </h2>
                <p className="text-[#002D47]/80 leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at{" "}
                  <a href="mailto:privacy@miniautofridge.com" className="text-[#00C2FF] hover:text-[#7DF9FF] underline">
                    privacy@miniautofridge.com
                  </a>
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 glassmorphism border-[#00C2FF]/20 bg-[#00C2FF]/5">
            <p className="text-[#002D47]/70 text-sm leading-relaxed">
              <strong>Affiliate Disclosure:</strong> MiniAutoFridge.com is a participant in affiliate programs including
              Amazon Associates. We may earn commissions from qualifying purchases made through links on our site. This
              does not affect the price you pay or our editorial independence in product recommendations.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
