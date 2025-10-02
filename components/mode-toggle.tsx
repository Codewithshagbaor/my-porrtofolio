"use client"

import { Button } from "@/components/ui/button"
import { Database, Blocks } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { useRef } from "react"
import type { Mesh } from "three"
import { useFrame } from "@react-three/fiber"

function RotatingCube({ color }: { color: string }) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </mesh>
  )
}

interface ModeToggleProps {
  mode: "backend" | "web3"
  onModeChange: (mode: "backend" | "web3") => void
}

export function ModeToggle({ mode, onModeChange }: ModeToggleProps) {
  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="relative">
        {/* 3D Background */}
        <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 3] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <RotatingCube color={mode === "backend" ? "#3b82f6" : "#a855f7"} />
          </Canvas>
        </div>

        {/* Toggle Container with animated background */}
        <div className="relative glass-card rounded-full p-1.5 flex gap-2 shadow-2xl overflow-hidden">
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
