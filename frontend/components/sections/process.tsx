import { Compass, Palette, Code } from "lucide-react"
import { processContent } from "@/data/landing-page"

const iconMap = {
  compass: Compass,
  palette: Palette,
  code: Code,
}

export function Process() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">{processContent.headline}</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-200 via-violet-300 to-violet-200 hidden lg:block" />

          {/* Steps */}
          <div className="space-y-24">
            {processContent.steps.map((step, index) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap]
              const isEven = index % 2 === 0

              return (
                <div
                  key={step.number}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${isEven ? "" : "lg:text-right"}`}
                >
                  {/* Content */}
                  <div className={`space-y-4 ${isEven ? "lg:pr-16" : "lg:order-2 lg:pl-16"}`}>
                    <p className="text-sm font-bold text-violet-600">Step {step.number}</p>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Icon Card */}
                  <div className={`relative ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative inline-flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100 shadow-lg mx-auto lg:mx-0">
                      <Icon className="h-12 w-12 text-violet-600" />
                    </div>

                    {/* Connector dot */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                      <div className="h-4 w-4 rounded-full bg-violet-600 ring-4 ring-white" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
