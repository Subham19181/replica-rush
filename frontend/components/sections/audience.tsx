import { Card, CardContent } from "@/components/ui/card"
import { Zap, Shield, ArrowRight } from "lucide-react"
import { audienceContent } from "@/data/landing-page"

const iconMap = {
  zap: Zap,
  shield: Shield,
}

const accentColorMap = {
  yellow: "bg-yellow-100 text-yellow-600",
  blue: "bg-blue-100 text-blue-600",
}

export function Audience() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">{audienceContent.headline}</h2>
          <p className="text-lg text-slate-600 leading-relaxed">{audienceContent.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {audienceContent.cards.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap]
            const accentColor = accentColorMap[card.accentColor as keyof typeof accentColorMap]

            return (
              <Card
                key={card.title}
                className="group bg-white border-slate-200 hover:border-violet-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${accentColor} mb-6`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{card.title}</h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-6">{card.description}</p>

                  {/* Link */}
                  <a
                    href="#"
                    className="inline-flex items-center text-violet-600 font-medium hover:text-violet-700 transition-colors"
                  >
                    {card.link}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
