import React from "react"
import { comparisonContent } from "@/data/landing-page"

export function Comparison() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">{comparisonContent.headline}</h2>
          <p className="text-sm sm:text-base text-slate-600">{comparisonContent.description}</p>
        </div>

        <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-sm">
          <div className="bg-slate-950 text-slate-50 rounded-t-3xl px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>{comparisonContent.label}</span>
            </div>
            <span className="text-[11px] sm:text-xs text-slate-300">{comparisonContent.subtitle}</span>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200/80 bg-slate-50/80">
                  {comparisonContent.columns.map((column, index) => (
                    <th
                      key={column}
                      className={`px-4 sm:px-6 py-4 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.15em] ${
                        index === 0
                          ? "text-slate-500"
                          : index === comparisonContent.columns.length - 1
                            ? "text-violet-600"
                            : "text-slate-400"
                      }`}
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonContent.rows.map((row) => (
                  <tr key={row.criteria} className="hover:bg-slate-50/80">
                    <td className="px-4 sm:px-6 py-5 text-slate-900 text-sm sm:text-base font-semibold">
                      {row.criteria}
                    </td>
                    <td className="px-4 sm:px-6 py-5 text-slate-500 text-sm sm:text-base">{row.agencies}</td>
                    <td className="px-4 sm:px-6 py-5 text-slate-500 text-sm sm:text-base">{row.freelancers}</td>
                    <td className="px-4 sm:px-6 py-5">
                      <div className="inline-flex items-center gap-2 rounded-full bg-violet-600/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-violet-700 ring-1 ring-violet-200">
                        <span className="h-2 w-2 rounded-full bg-violet-500" />
                        <span>{row.agencyIo}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
