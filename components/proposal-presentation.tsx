"use client"

import { HeroSection } from "./sections/hero-section"
import { ExecutiveSummary } from "./sections/executive-summary"
import { MainContent } from "./sections/main-content"
import { MockupPreview } from "./sections/mockup-preview"
import { Footer } from "./sections/footer"

export default function ProposalPresentation() {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeroSection />
      <ExecutiveSummary />
      <MainContent />
      <MockupPreview />
      <Footer />
    </div>
  )
}
