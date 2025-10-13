"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp, Target, Lightbulb, TrendingUp } from "lucide-react"

interface CaseStudiesProps {
  mode: "backend" | "web3"
}

const caseStudies = [
  {
    title: "Scaling Rinnd to 10K Concurrent Users",
    category: "backend",
    problem:
      "Initial architecture struggled with 1K+ concurrent video streams, causing latency spikes and connection drops.",
    solution:
      "Implemented Redis-based session management, optimized database queries with connection pooling, and deployed horizontal scaling with load balancers. Integrated Agora SDK for efficient media streaming.",
    impact:
      "Reduced latency from 500ms to <100ms, achieved 99.9% uptime, and scaled to support 10K+ concurrent users with 50% cost reduction.",
    metrics: ["10K+ concurrent users", "<100ms latency", "99.9% uptime", "50% cost reduction"],
  },
  {
    title: "Building Multichain Infrastructure for AmongFriends",
    category: "web3",
    problem:
      "Users needed to interact with multiple chains (Ethereum, Polygon, Arbitrum) but faced high gas fees and poor UX when switching networks.",
    solution:
      "Developed a unified smart contract architecture with The Graph for cross-chain indexing. Implemented Wagmi hooks for seamless wallet connections and chain switching. Built a gas optimization layer that batches transactions.",
    impact:
      "Reduced gas costs by 60%, enabled one-click chain switching, and processed 50K+ cross-chain bets with zero failed transactions.",
    metrics: ["60% gas reduction", "50K+ bets", "3 chains supported", "Zero failed txns"],
  },
  {
    title: "Winning Algorand Hackathon with Secuda",
    category: "web3",
    problem:
      "Traditional security auditing platforms lack transparency and are inaccessible to smaller projects due to high costs.",
    solution:
      "Built a decentralized security platform on Algorand using PyTeal smart contracts. Created an incentive mechanism for security researchers and automated vulnerability detection using on-chain data.",
    impact:
      "Won 1st place at Algorand Global Hackathon 2023. Platform identified 100+ vulnerabilities in beta testing and onboarded 50+ security researchers.",
    metrics: ["1st place winner", "100+ vulnerabilities found", "50+ researchers", "Open source"],
  },
]

export function CaseStudies({ mode }: CaseStudiesProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const filteredStudies = caseStudies.filter((study) => study.category === mode)

  return (
    <section id="case-studies" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Case Studies</h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Deep dives into problem-solving and impact
          </p>
        </div>

        <div className="space-y-6">
          {filteredStudies.map((study, index) => (
            <Card
              key={index}
              className="group cursor-pointer glass-card hover:border-primary transition-all duration-500 overflow-hidden"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="relative">
                <CardTitle className="flex items-center justify-between text-balance text-xl md:text-2xl">
                  <span className="font-bold">{study.title}</span>
                  {expandedIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-primary flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-4" />
                  )}
                </CardTitle>
              </CardHeader>

              {expandedIndex === index && (
                <CardContent className="space-y-8 animate-in slide-in-from-top-4 duration-500">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="h-5 w-5 text-destructive" />
                      <h4 className="font-bold text-lg text-destructive uppercase tracking-wide">Problem</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-base">{study.problem}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      <h4 className="font-bold text-lg text-primary uppercase tracking-wide">Solution</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-base">{study.solution}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="h-5 w-5 text-accent" />
                      <h4 className="font-bold text-lg text-accent uppercase tracking-wide">Impact</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-base">{study.impact}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {study.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="relative glass-card rounded-lg p-4 text-center group/metric hover:border-primary transition-all duration-300"
                        >
                          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/metric:opacity-100 transition-opacity rounded-lg" />
                          <p className="relative text-sm font-bold text-primary">{metric}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
