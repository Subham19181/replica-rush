import { comparisonContent } from "@/data/landing-page"

export function Comparison() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">{comparisonContent.headline}</h2>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="grid grid-cols-4 gap-4">
              {/* Header Row */}
              {comparisonContent.columns.map((column, index) => (
                <div
                  key={column}
                  className={`p-4 text-sm font-bold ${
                    index === 0 ? "text-slate-500 tracking-wide" : index === 3 ? "text-violet-600" : "text-slate-400"
                  }`}
                >
                  {column}
                </div>
              ))}

              {/* Data Rows */}
              {comparisonContent.rows.map((row, rowIndex) => (
                <>
                  {/* Criteria */}
                  <div key={`criteria-${rowIndex}`} className="p-6 bg-white rounded-lg font-semibold text-slate-900">
                    {row.criteria}
                  </div>

                  {/* Agencies */}
                  <div key={`agencies-${rowIndex}`} className="p-6 bg-white rounded-lg text-slate-500">
                    {row.agencies}
                  </div>

                  {/* Freelancers */}
                  <div key={`freelancers-${rowIndex}`} className="p-6 bg-white rounded-lg text-slate-500">
                    {row.freelancers}
                  </div>

                  {/* Agency.io - Highlighted */}
                  <div
                    key={`agencyio-${rowIndex}`}
                    className="p-6 bg-white rounded-lg font-semibold text-violet-600 shadow-lg ring-2 ring-violet-100 relative"
                  >
                    {row.agencyIo}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
