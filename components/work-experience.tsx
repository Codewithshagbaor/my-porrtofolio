"use client"

import { Briefcase, Calendar, MapPin } from "lucide-react"

interface WorkExperienceProps {
  mode: "backend" | "web3"
}

export function WorkExperience({ mode }: WorkExperienceProps) {
  const experiences = [
    {
      title: "Senior Backend Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "backend",
      description:
        "Led the development of microservices architecture serving 10M+ users. Optimized API performance by 60% and reduced infrastructure costs by 40%.",
      achievements: [
        "Architected scalable REST & GraphQL APIs",
        "Implemented Redis caching strategy",
        "Mentored team of 5 junior engineers",
      ],
    },
    {
      title: "Smart Contract Developer",
      company: "DeFi Protocol",
      location: "Remote",
      period: "2021 - 2022",
      type: "web3",
      description:
        "Developed and audited smart contracts for DeFi lending protocol with $50M+ TVL. Implemented automated market maker (AMM) functionality.",
      achievements: [
        "Deployed 15+ audited smart contracts",
        "Reduced gas costs by 35%",
        "Built comprehensive test suites",
      ],
    },
    {
      title: "Full Stack Engineer",
      company: "StartupXYZ",
      location: "New York, NY",
      period: "2020 - 2021",
      type: "backend",
      description: "Built MVP from scratch using Django and React. Scaled platform to handle 100K+ daily active users.",
      achievements: [
        "Designed PostgreSQL database schema",
        "Implemented CI/CD pipelines",
        "Integrated payment processing",
      ],
    },
    {
      title: "Blockchain Developer",
      company: "NFT Marketplace",
      location: "Remote",
      period: "2019 - 2020",
      type: "web3",
      description: "Created NFT minting and trading platform on Ethereum. Integrated IPFS for decentralized storage.",
      achievements: [
        "Built ERC-721 token contracts",
        "Implemented Web3 wallet integration",
        "Optimized transaction batching",
      ],
    },
  ]

  const filteredExperiences = experiences.filter((exp) => exp.type === mode)

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div
        className={`absolute inset-0 bg-gradient-to-b ${
          mode === "backend"
            ? "from-cyan-500/5 via-transparent to-blue-500/5"
            : "from-pink-500/5 via-transparent to-purple-500/5"
        }`}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            className={`text-5xl md:text-7xl font-bold mb-4 animate-glow-pulse ${
              mode === "backend" ? "text-cyan-400" : "text-pink-400"
            }`}
          >
            {mode === "backend" ? "Backend Journey" : "Web3 Experience"}
          </h2>
          <p className="text-xl text-muted-foreground">
            {mode === "backend"
              ? "Building robust systems and scalable infrastructure"
              : "Pioneering decentralized applications and blockchain solutions"}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className={`absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 ${
              mode === "backend"
                ? "bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500"
                : "bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500"
            }`}
            style={{
              boxShadow: mode === "backend" ? "0 0 20px rgba(59, 130, 246, 0.5)" : "0 0 20px rgba(168, 85, 247, 0.5)",
            }}
          />

          {/* Experience Cards */}
          {filteredExperiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-16 md:mb-24 ${
                index % 2 === 0 ? "md:pr-[calc(50%+3rem)]" : "md:pl-[calc(50%+3rem)] md:text-right"
              }`}
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`,
              }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-0 md:left-1/2 top-8 w-6 h-6 rounded-full -ml-3 ${
                  mode === "backend"
                    ? "bg-gradient-to-br from-blue-500 to-cyan-500"
                    : "bg-gradient-to-br from-purple-500 to-pink-500"
                }`}
                style={{
                  boxShadow:
                    mode === "backend"
                      ? "0 0 20px rgba(59, 130, 246, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.5)"
                      : "0 0 20px rgba(168, 85, 247, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.5)",
                }}
              />

              {/* Card */}
              <div className="glass-card p-8 rounded-2xl group hover:scale-105 transition-all duration-500 ml-8 md:ml-0">
                {/* Company & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`p-3 rounded-xl ${
                      mode === "backend" ? "bg-blue-500/20 text-blue-400" : "bg-purple-500/20 text-purple-400"
                    }`}
                  >
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                    <p className={`text-lg font-semibold ${mode === "backend" ? "text-cyan-400" : "text-pink-400"}`}>
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground/80 mb-4 leading-relaxed">{exp.description}</p>

                {/* Achievements */}
                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className={`mt-1.5 w-1.5 h-1.5 rounded-full ${
                          mode === "backend" ? "bg-blue-400" : "bg-purple-400"
                        }`}
                        style={{
                          boxShadow:
                            mode === "backend" ? "0 0 8px rgba(59, 130, 246, 0.8)" : "0 0 8px rgba(168, 85, 247, 0.8)",
                        }}
                      />
                      <p className="text-sm text-foreground/70">{achievement}</p>
                    </div>
                  ))}
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
