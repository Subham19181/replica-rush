import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { ProblemSolution } from "@/components/sections/problem-solution"
import { Audience } from "@/components/sections/audience"
import { Process } from "@/components/sections/process"
import { Comparison } from "@/components/sections/comparison"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Audience />
        <Process />
        <Comparison />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
