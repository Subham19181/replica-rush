import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { heroContent } from "@/data/landing-page"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-1.5 text-sm text-violet-600 border border-violet-100">
            <span className="h-2 w-2 rounded-full bg-violet-600 animate-pulse" />
            {heroContent.badge}
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 text-balance leading-tight">
            {heroContent.headline.before}{" "}
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
              className="bg-violet-600 hover:bg-violet-700 text-white rounded-full px-8 shadow-lg shadow-violet-600/30 hover:shadow-xl hover:shadow-violet-600/40 transition-all"
            >
              {heroContent.cta.primary}
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-slate-300 text-slate-900 hover:bg-slate-50 bg-transparent"
            >
              <Play className="mr-2 h-4 w-4 fill-current" />
              {heroContent.cta.secondary}
            </Button>
          </div>

          {/* Social Proof */}
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-wider text-slate-400">{heroContent.socialProof.label}</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale">
              {heroContent.socialProof.companies.map((company) => (
                <div key={company} className="text-sm font-bold text-slate-600">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
