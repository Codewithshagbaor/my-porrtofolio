"use client"

import { Button } from "@/components/ui/button"
import { Database, Blocks } from "lucide-react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface ModeToggleProps {
  mode: "backend" | "web3"
  onModeChange: (mode: "backend" | "web3") => void
}

export function ModeToggle({ mode, onModeChange }: ModeToggleProps) {
  const toggleRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!toggleRef.current) return

    gsap.to(toggleRef.current, {
      scale: 1.05,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    })
  }, [mode])

  useEffect(() => {
    if (!particlesRef.current) return

    const particles = particlesRef.current.querySelectorAll(".toggle-particle")

    particles.forEach((particle, index) => {
      gsap.to(particle, {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.1,
      })
    })
  }, [])

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="relative">
        <div
          ref={particlesRef}
          className="absolute inset-0 w-full h-full opacity-30 pointer-events-none overflow-visible"
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="toggle-particle absolute w-2 h-2 rounded-full"
              style={{
                background:
                  mode === "backend"
                    ? "radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, transparent 70%)"
                    : "radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, transparent 70%)",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: "blur(1px)",
              }}
            />
          ))}
        </div>

        {/* Toggle Container with animated background */}
        <div ref={toggleRef} className="relative glass-card rounded-full p-1.5 flex gap-2 shadow-2xl overflow-hidden">
          {/* Animated sliding background */}
          <div
            className={`absolute top-1.5 bottom-1.5 rounded-full transition-all duration-500 ease-out ${
              mode === "backend"
                ? "left-1.5 w-[calc(50%-0.25rem)] bg-gradient-to-r from-blue-500 to-cyan-500"
                : "left-[calc(50%+0.25rem)] w-[calc(50%-0.25rem)] bg-gradient-to-r from-purple-500 to-pink-500"
            }`}
            style={{
              boxShadow:
                mode === "backend"
                  ? "0 0 20px rgba(59, 130, 246, 0.6), inset 0 0 20px rgba(59, 130, 246, 0.3)"
                  : "0 0 20px rgba(168, 85, 247, 0.6), inset 0 0 20px rgba(168, 85, 247, 0.3)",
            }}
          />

          <Button
            variant="ghost"
            size="sm"
            onClick={() => onModeChange("backend")}
            className={`relative z-10 rounded-full transition-all duration-500 ${
              mode === "backend" ? "text-white scale-110" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Database
              className={`h-4 w-4 mr-2 transition-transform duration-500 ${mode === "backend" ? "rotate-[360deg]" : ""}`}
            />
            <span className="font-semibold">Backend</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => onModeChange("web3")}
            className={`relative z-10 rounded-full transition-all duration-500 ${
              mode === "web3" ? "text-white scale-110" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Blocks
              className={`h-4 w-4 mr-2 transition-transform duration-500 ${mode === "web3" ? "rotate-[360deg]" : ""}`}
            />
            <span className="font-semibold">Web3</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
