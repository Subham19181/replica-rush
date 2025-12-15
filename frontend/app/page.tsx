import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { ProblemSolution } from "@/components/sections/problem-solution"
import { Audience } from "@/components/sections/audience"
import { Process } from "@/components/sections/process"
import { Comparison } from "@/components/sections/comparison"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"
import { SectionReveal } from "@/components/section-reveal"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SectionReveal>
          <Hero />
        </SectionReveal>
        <SectionReveal>
          <ProblemSolution />
        </SectionReveal>
        <SectionReveal>
          <Audience />
        </SectionReveal>
        <SectionReveal>
          <Process />
        </SectionReveal>
        <SectionReveal>
          <Comparison />
        </SectionReveal>
        <SectionReveal>
          <CTA />
        </SectionReveal>
      </main>
      <Footer />
    </>
  )
}
