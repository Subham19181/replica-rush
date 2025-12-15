import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { heroContent } from "@/data/landing-page"

function InfiniteCompanyCarousel() {
  const companies = [...heroContent.socialProof.companies, ...heroContent.socialProof.companies]

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center gap-10 whitespace-nowrap opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all infinite-scroll">
        {companies.map((company, index) => (
          <div key={`${company}-${index}`} className="text-base sm:text-lg font-semibold text-slate-700">
            {company}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative flex items-center bg-gradient-to-b from-slate-50 to-white min-h-screen py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline */}
          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 text-balance leading-tight">
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {heroContent.headline.highlight}
            </span>
          </h1>

          {/* Subtext */}
          <p className="mb-8 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto text-balance leading-relaxed">
            {heroContent.subtext}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-violet-600 hover:bg-violet-700 text-white rounded-full px-12 py-5 text-base sm:text-lg shadow-lg shadow-violet-600/30 hover:shadow-xl hover:shadow-violet-600/40 transition-all"
            >
              {heroContent.cta.primary}
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-12 py-5 text-base sm:text-lg border-slate-300 text-slate-900 hover:bg-slate-50 bg-transparent"
            >
              <Play className="mr-2 h-4 w-4 fill-current" />
              {heroContent.cta.secondary}
            </Button>
          </div>

          {/* Social Proof */}
          <div className="space-y-4">
            <p className="text-sm sm:text-base font-semibold tracking-[0.2em] text-slate-400 uppercase">
              {heroContent.socialProof.label}
            </p>
            <InfiniteCompanyCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}
