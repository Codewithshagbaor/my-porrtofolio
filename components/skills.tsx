"use client"

import { Canvas } from "@react-three/fiber"
import { Float, Text3D, Center } from "@react-three/drei"
import { useState } from "react"

interface SkillsProps {
  mode: "backend" | "web3"
}

function Skill3D({ text, position, color }: { text: string; position: [number, number, number]; color: string }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Center position={position}>
        <Text3D
          font="/fonts/Geist_Bold.json"
          size={0.3}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          {text}
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
        </Text3D>
      </Center>
    </Float>
  )
}

export function Skills({ mode }: SkillsProps) {
  const backendSkills = [
    { name: "Python", level: 95, icon: "🐍" },
    { name: "Django", level: 90, icon: "🎸" },
    { name: "FastAPI", level: 85, icon: "⚡" },
    { name: "PostgreSQL", level: 88, icon: "🐘" },
    { name: "Redis", level: 82, icon: "🔴" },
    { name: "Docker", level: 87, icon: "🐳" },
    { name: "AWS", level: 80, icon: "☁️" },
    { name: "GraphQL", level: 83, icon: "📊" },
  ]

  const web3Skills = [
    { name: "Solidity", level: 92, icon: "💎" },
    { name: "Ethereum", level: 90, icon: "Ξ" },
    { name: "Web3.js", level: 88, icon: "🌐" },
    { name: "Hardhat", level: 85, icon: "⛏️" },
    { name: "IPFS", level: 80, icon: "📦" },
    { name: "Smart Contracts", level: 93, icon: "📜" },
    { name: "DeFi", level: 87, icon: "💰" },
    { name: "NFTs", level: 84, icon: "🎨" },
  ]

  const skills = mode === "backend" ? backendSkills : web3Skills
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div
        className={`absolute inset-0 bg-gradient-to-b ${
          mode === "backend"
            ? "from-blue-500/5 via-transparent to-cyan-500/5"
            : "from-purple-500/5 via-transparent to-pink-500/5"
        }`}
      />

      {/* 3D Background Scene */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Skill3D
            text={mode === "backend" ? "API" : "WEB3"}
            position={[-3, 2, 0]}
            color={mode === "backend" ? "#3b82f6" : "#a855f7"}
          />
          <Skill3D
            text={mode === "backend" ? "DB" : "DEFI"}
            position={[3, -1, 0]}
            color={mode === "backend" ? "#06b6d4" : "#ec4899"}
          />
          <Skill3D
            text={mode === "backend" ? "OPS" : "NFT"}
            position={[0, -2, -2]}
            color={mode === "backend" ? "#0ea5e9" : "#d946ef"}
          />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-7xl font-bold mb-4 animate-glow-pulse ${
              mode === "backend" ? "text-blue-400" : "text-purple-400"
            }`}
          >
            {mode === "backend" ? "Backend Arsenal" : "Web3 Toolkit"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {mode === "backend"
              ? "Building scalable systems with cutting-edge backend technologies"
              : "Crafting decentralized applications with blockchain expertise"}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div
                className={`glass-card p-6 rounded-2xl transition-all duration-500 ${
                  hoveredSkill === skill.name ? "scale-110 -translate-y-2" : ""
                }`}
                style={{
                  boxShadow:
                    hoveredSkill === skill.name
                      ? mode === "backend"
                        ? "0 20px 60px rgba(59, 130, 246, 0.4)"
                        : "0 20px 60px rgba(168, 85, 247, 0.4)"
                      : "none",
                }}
              >
                {/* Skill Icon */}
                <div className="text-5xl mb-4 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                  {skill.icon}
                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-bold mb-3 text-foreground">{skill.name}</h3>

                {/* Progress Bar */}
                <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className={`absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ${
                      mode === "backend"
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                        : "bg-gradient-to-r from-purple-500 to-pink-500"
                    }`}
                    style={{
                      width: hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                      boxShadow:
                        mode === "backend" ? "0 0 10px rgba(59, 130, 246, 0.8)" : "0 0 10px rgba(168, 85, 247, 0.8)",
                    }}
                  />
                </div>

                {/* Skill Level */}
                <div className="mt-2 text-right">
                  <span className={`text-sm font-semibold ${mode === "backend" ? "text-blue-400" : "text-purple-400"}`}>
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
