"use client"

import { Card } from "@/components/ui/card"
import { Award, Trophy, Target, Zap } from "lucide-react"

interface AchievementsProps {
  mode: "backend" | "web3"
}

export function Achievements({ mode }: AchievementsProps) {
  const achievements = [
    {
      icon: Trophy,
      title: "AWS Certified Solutions Architect",
      description: "Professional level certification",
      year: "2023",
      relevant: "backend",
    },
    {
      icon: Award,
      title: "Ethereum Developer Certification",
      description: "ConsenSys Academy Graduate",
      year: "2023",
      relevant: "web3",
    },
    {
      icon: Target,
      title: "99.99% Uptime Achievement",
      description: "Maintained critical systems for 2+ years",
      year: "2022-2024",
      relevant: "backend",
    },
    {
      icon: Zap,
      title: "Smart Contract Security Expert",
      description: "Audited 50+ contracts with zero exploits",
      year: "2023-2024",
      relevant: "web3",
    },
    {
      icon: Trophy,
      title: "Hackathon Winner",
      description: "1st place at ETHGlobal Hackathon",
      year: "2023",
      relevant: "web3",
    },
    {
      icon: Award,
      title: "Google Cloud Professional",
      description: "Cloud Architecture Certification",
      year: "2022",
      relevant: "backend",
    },
  ]

  const filteredAchievements = achievements.filter((a) => a.relevant === mode)

  return (
    <section id="achievements" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Achievements & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognized expertise and proven track record
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-500 group hover:scale-[1.05] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-colors" />
                    <div className="relative p-3 bg-primary/10 rounded-xl border border-primary/20 group-hover:border-primary/40 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground mb-2">{achievement.description}</p>
                    <p className="text-sm text-primary font-semibold">{achievement.year}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
