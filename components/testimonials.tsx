"use client"

import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

interface TestimonialsProps {
  mode: "backend" | "web3"
}

export function Testimonials({ mode }: TestimonialsProps) {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO at TechCorp",
      image: "/professional-woman-diverse.png",
      content:
        "Outstanding work on our microservices architecture. The system handles millions of requests daily with zero downtime.",
      rating: 5,
      relevant: "backend",
    },
    {
      name: "Michael Chen",
      role: "Founder of DeFi Protocol",
      image: "/professional-man.jpg",
      content:
        "Exceptional smart contract development. The security audit came back flawless, and gas optimization was impressive.",
      rating: 5,
      relevant: "web3",
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager at StartupX",
      image: "/professional-woman-smiling.png",
      content:
        "Delivered a complex API integration ahead of schedule. Communication was excellent throughout the project.",
      rating: 5,
      relevant: "backend",
    },
    {
      name: "David Kim",
      role: "CEO of NFT Marketplace",
      image: "/professional-asian-man.png",
      content:
        "Built our entire NFT minting platform. The smart contracts are efficient and the user experience is seamless.",
      rating: 5,
      relevant: "web3",
    },
  ]

  const filteredTestimonials = testimonials.filter((t) => t.relevant === mode)

  return (
    <section id="testimonials" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            What <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by startups and enterprises worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredTestimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-500 group hover:scale-[1.02] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <Quote className="h-10 w-10 text-primary/30" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-foreground/90">{testimonial.content}</p>

                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
