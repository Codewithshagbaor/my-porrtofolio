"use client"

import { useState } from "react"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { CaseStudies } from "@/components/case-studies"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { ModeToggle } from "@/components/mode-toggle"
import { Skills } from "@/components/skills"
import { WorkExperience } from "@/components/work-experience"
import { Testimonials } from "@/components/testimonials"
import { Achievements } from "@/components/achievements"

export default function Home() {
  const [mode, setMode] = useState<"backend" | "web3">("backend")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [key, setKey] = useState(0)

  const handleModeChange = (newMode: "backend" | "web3") => {
    setIsTransitioning(true)
    setTimeout(() => {
      setMode(newMode)
      setKey((prev) => prev + 1)
      setTimeout(() => setIsTransitioning(false), 100)
    }, 300)
  }

  return (
    <div
      className={`min-h-screen transition-all duration-700 ${mode === "backend" ? "backend-mode" : "web3-mode"} ${
        isTransitioning ? "opacity-50 scale-[0.98]" : "opacity-100 scale-100"
      }`}
    >
      <ModeToggle mode={mode} onModeChange={handleModeChange} />

      <main className="relative" key={key}>
        <Hero mode={mode} />
        <Skills mode={mode} />
        <Projects mode={mode} />
        <WorkExperience mode={mode} />
        <Achievements mode={mode} />
        <CaseStudies mode={mode} />
        <Testimonials mode={mode} />
        <About mode={mode} />
        <Contact mode={mode} />
      </main>
    </div>
  )
}
