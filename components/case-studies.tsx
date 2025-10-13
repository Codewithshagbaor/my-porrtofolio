"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp, Target, Lightbulb, TrendingUp } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

interface CaseStudiesProps {
  mode: "backend" | "web3"
}

type CaseStudy = {
  id: string
  title: string
  category: string
  challenge: string
  solution: string
  results: string
  metrics: Record<string, any>
}

export function CaseStudies({ mode }: CaseStudiesProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCaseStudies = async () => {
      const supabase = createClient()
      const { data } = await supabase
        .from("case_studies")
        .select("*")
        .eq("published", true)
        .or(`category.eq.${mode},category.eq.both`)
        .order("created_at", { ascending: false })

      if (data) {
        setCaseStudies(data)
      }
      setLoading(false)
    }

    fetchCaseStudies()
  }, [mode])

  if (loading) {
    return (
      <section id="case-studies" className="relative py-32 px-6 overflow-hidden">
        <div className="text-center">
          <p className="text-muted-foreground">Loading case studies...</p>
        </div>
      </section>
    )
  }

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

        {caseStudies.length > 0 ? (
          <div className="space-y-6">
            {caseStudies.map((study, index) => (
              <Card
                key={study.id}
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
                        <h4 className="font-bold text-lg text-destructive uppercase tracking-wide">Challenge</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-base">{study.challenge}</p>
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
                        <h4 className="font-bold text-lg text-accent uppercase tracking-wide">Results</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6 text-base">{study.results}</p>

                      {study.metrics && Object.keys(study.metrics).length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {Object.entries(study.metrics).map(([key, value], i) => (
                            <div
                              key={i}
                              className="relative glass-card rounded-lg p-4 text-center group/metric hover:border-primary transition-all duration-300"
                            >
                              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/metric:opacity-100 transition-opacity rounded-lg" />
                              <p className="relative text-sm font-bold text-primary">{value as string}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No case studies available yet.</p>
          </div>
        )}
      </div>
    </section>
  )
}
