"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Code2, Blocks, Github, Linkedin, Mail } from "lucide-react"
import { ResumeModal } from "@/components/resume-modal"
import { useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { Float, Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei"

function AnimatedSphere({ color, position }: { color: string; position: [number, number, number] }) {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.4}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

interface HeroProps {
  mode: "backend" | "web3"
}

export function Hero({ mode }: HeroProps) {
  const [showResume, setShowResume] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const fullText = mode === "backend" ? "scalable systems" : "decentralized apps"

  useEffect(() => {
    let index = 0
    setDisplayedText("")
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 80)
    return () => clearInterval(interval)
  }, [mode, fullText])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color={mode === "backend" ? "#60a5fa" : "#c084fc"} />
          <AnimatedSphere color={mode === "backend" ? "#3b82f6" : "#a855f7"} position={[-2, 1, 0]} />
          <AnimatedSphere color={mode === "backend" ? "#0ea5e9" : "#d946ef"} position={[2, -1, -2]} />
          <AnimatedSphere color={mode === "backend" ? "#1e40af" : "#7c3aed"} position={[0, 2, -1]} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 cyber-grid opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-12">
        <div className="flex items-center justify-center gap-3 mb-4 animate-fade-in-up">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
            {mode === "backend" ? (
              <Code2 className="h-5 w-5 text-primary animate-glow-pulse relative z-10" />
            ) : (
              <Blocks className="h-5 w-5 text-primary animate-glow-pulse relative z-10" />
            )}
          </div>
          <span className="text-sm font-bold tracking-widest uppercase text-primary">
            {mode === "backend" ? "Backend Engineer" : "Web3 Developer"}
          </span>
        </div>

        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
            Building{" "}
            <span className="relative inline-block">
              <span className="text-primary">
                {displayedText}
                <span className="animate-blink">|</span>
              </span>
              <div
                className="absolute -inset-2 blur-2xl opacity-30 animate-pulse"
                style={{
                  background:
                    mode === "backend"
                      ? "linear-gradient(90deg, #3b82f6, #0ea5e9)"
                      : "linear-gradient(90deg, #a855f7, #d946ef)",
                }}
              />
            </span>
            <br />
            that solve real problems
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            {mode === "backend"
              ? "Architecting robust APIs and microservices with Python, Django, and cloud infrastructure"
              : "Crafting smart contracts and DeFi protocols on Ethereum, Solana, and beyond"}
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <Button
            size="lg"
            className="group relative text-base px-8 py-6 bg-primary hover:bg-primary/90 font-semibold overflow-hidden rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            onClick={() => scrollToSection("projects")}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group relative text-base px-8 py-6 border-2 font-semibold overflow-hidden rounded-xl bg-transparent hover:bg-primary/10 transition-all duration-300"
            onClick={() => setShowResume(true)}
          >
            <span className="relative z-10 flex items-center gap-2">
              <FileText className="h-5 w-5" />
              View Resume
            </span>
          </Button>
        </div>

        <div
          className="flex gap-4 justify-center items-center pt-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
          >
            <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
          >
            <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
          >
            <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2 shadow-lg shadow-primary/20">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      <ResumeModal open={showResume} onOpenChange={setShowResume} mode={mode} />
    </section>
  )
}
