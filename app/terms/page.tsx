import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, FileText, AlertCircle, Scale, ShieldCheck, ExternalLink, Ban } from "lucide-react"

export default function TermsPage() {
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
            <FileText className="w-12 h-12 text-[#00C2FF]" />
          </div>
          <h1 className="font-[family-name:var(--font-bebas)] text-5xl md:text-6xl text-[#002D47] mb-4 tracking-wider">
            Terms of Service
          </h1>
          <p className="text-[#002D47]/70 text-lg">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <Card className="p-8 glassmorphism border-[#00C2FF]/20">
            <div className="flex items-start gap-4 mb-4">
              <Scale className="w-6 h-6 text-[#00C2FF] mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-[family-name:var(--font-bebas)] text-3xl text-[#002D47] mb-3 tracking-wide">
                  Acceptance of Terms
                </h2>
                <p className="text-[#002D47]/80 leading-relaxed">
                  By accessing and using MiniAutoFridge.com, you accept and agree to be bound by the terms and
                  provisions of this agreement. If you do not agree to these terms, please do not use our website.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 glassmorphism border-[#00C2FF]/20">
            <div className="flex items-start gap-4 mb-4">
              <ExternalLink className="w-6 h-6 text-[#00C2FF] mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-[family-name:var(--font-bebas)] text-3xl text-[#002D47] mb-3 tracking-wide">
                  Affiliate Links & Commissions
                </h2>
                <p className="text-[#002D47]/80 leading-relaxed mb-3">
                  MiniAutoFridge.com participates in affiliate marketing programs, including Amazon Associates. This
                  means:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#002D47]/80 ml-4">
                  <li>We may earn commissions from qualifying purchases made through our links</li>
                  <li>Product prices are not affected by our affiliate relationships</li>
                  <li>Our reviews and recommendations remain independent and unbiased</li>
                  <li>We only recommend products we believe provide value to our readers</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 glassmorphism border-[#00C2FF]/20">
            <div className="flex items-start gap-4 mb-4">
              <AlertCircle className="w-6 h-6 text-[#00C2FF] mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-[family-name:var(--font-bebas)] text-3xl text-[#002D47] mb-3 tracking-wide">
                  Disclaimer of Warranties
                </h2>
                <p className="text-[#002D47]/80 leading-relaxed mb-3">
                  The information on MiniAutoFridge.com is provided "as is" without warranties of any kind:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#002D47]/80 ml-4">
                  <li>We strive for accuracy but cannot guarantee all information is current or complete</li>
                  <li>Product specifications and prices may change without notice</li>
                  <li>We are not responsible for third-party website content or products</li>
                  <li>Individual results with products may vary</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 glassmorphism border-[#00C2FF]/20">
            <div className="flex items-start gap-4 mb-4">
              <ShieldCheck className="w-6 h-6 text-[#00C2FF] mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-[family-name:var(--font-bebas)] text-3xl text-[#002D47] mb-3 tracking-wide">
                  Limitation of Liability
                </h2>
                <p className="text-[#002D47]/80 leading-relaxed">
                  MiniAutoFridge.com and its owners shall not be liable for any direct, indirect, incidental,
                  consequential, or punitive damages arising from your use of the website or purchase of products
                  through our affiliate links. Your use of any information or materials on this website is entirely at
                  your own risk.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 glassmorphism border-[#00C2FF]/20">
            <div className="flex items-start gap-4 mb-4">
              <Ban className="w-6 h-6 text-[#00C2FF] mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-[family-name:var(--font-bebas)] text-3xl text-[#002D47] mb-3 tracking-wide">
                  Prohibited Uses
                </h2>
                <p className="text-[#002D47]/80 leading-relaxed mb-3">You may not use our website:</p>
                <ul className="list-disc list-inside space-y-2 text-[#002D47]/80 ml-4">
                  <li>For any unlawful purpose or to solicit unlawful activity</li>
                  <li>To harm, threaten, or harass other users</li>
                  <li>To impersonate any person or entity</li>
                  <li>To transmit viruses, malware, or harmful code</li>
                  <li>To scrape, copy, or reproduce content without permission</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 glassmorphism border-[#00C2FF]/20">
            <div className="flex items-start gap-4 mb-4">
              <FileText className="w-6 h-6 text-[#00C2FF] mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-[family-name:var(--font-bebas)] text-3xl text-[#002D47] mb-3 tracking-wide">
                  Intellectual Property
                </h2>
                <p className="text-[#002D47]/80 leading-relaxed">
                  All content on MiniAutoFridge.com, including text, graphics, logos, images, and software, is the
                  property of MiniAutoFridge.com or its content suppliers and is protected by copyright laws.
                  Unauthorized use of any materials may violate copyright, trademark, and other laws.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 glassmorphism border-[#00C2FF]/20">
            <div className="flex items-start gap-4 mb-4">
              <Scale className="w-6 h-6 text-[#00C2FF] mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-[family-name:var(--font-bebas)] text-3xl text-[#002D47] mb-3 tracking-wide">
                  Changes to Terms
                </h2>
                <p className="text-[#002D47]/80 leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                  posting to the website. Your continued use of the website after changes are posted constitutes your
                  acceptance of the modified terms.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 glassmorphism border-[#00C2FF]/20 bg-[#00C2FF]/5">
            <p className="text-[#002D47]/70 text-sm leading-relaxed">
              <strong>Questions?</strong> If you have any questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:legal@miniautofridge.com" className="text-[#00C2FF] hover:text-[#7DF9FF] underline">
                legal@miniautofridge.com
              </a>
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
