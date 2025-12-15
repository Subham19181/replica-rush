import { Check } from "lucide-react"
import { problemSolutionContent } from "@/data/landing-page"

export function ProblemSolution() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 text-balance">
              {problemSolutionContent.headline.before}{" "}
              <span className="text-violet-600">{problemSolutionContent.headline.highlight}</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">{problemSolutionContent.description}</p>

            {/* Feature List */}
            <ul className="space-y-4 pt-4">
              {problemSolutionContent.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-100">
                      <Check className="h-3.5 w-3.5 text-violet-600" />
                    </div>
                  </div>
                  <span className="text-slate-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="relative rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 p-8 sm:p-12 backdrop-blur-sm border border-violet-100/50 shadow-xl">
              {/* Bar Chart Visualization */}
              <div className="flex items-end justify-center gap-4 h-64">
                <div className="w-16 bg-violet-200 rounded-t-lg animate-[grow_1s_ease-out]" style={{ height: "40%" }} />
                <div
                  className="w-16 bg-violet-300 rounded-t-lg animate-[grow_1.2s_ease-out]"
                  style={{ height: "60%" }}
                />
                <div
                  className="w-16 bg-violet-500 rounded-t-lg animate-[grow_1.4s_ease-out]"
                  style={{ height: "85%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
