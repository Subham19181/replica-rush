import { Button } from "@/components/ui/button"
import { ctaContent } from "@/data/landing-page"

export function CTA() {
  return (
    <section className="py-20 sm:py-28 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">{ctaContent.headline}</h2>
          <p className="text-lg text-slate-300 leading-relaxed">{ctaContent.description}</p>
          <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8 shadow-lg">
            {ctaContent.button}
          </Button>
        </div>
      </div>
    </section>
  )
}
