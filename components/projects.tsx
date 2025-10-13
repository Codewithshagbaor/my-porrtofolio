import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Sparkles } from "lucide-react"

interface ProjectsProps {
  mode: "backend" | "web3"
}

const projects = [
  {
    title: "Rinnd",
    description: "Private social platform with real-time video/audio capabilities",
    impact: "Scaled to support 10K+ concurrent users with sub-100ms latency",
    tech: ["Django", "PostgreSQL", "Agora SDK", "Redis", "Docker"],
    category: "backend",
    image: "/social-platform-dashboard.jpg",
  },
  {
    title: "Telegram Wallet Bot",
    description: "Crypto wallet integration with pay-per-deployment model",
    impact: "Processed $500K+ in transactions with 99.9% uptime",
    tech: ["Python", "Telegram Bot API", "CryptoBot", "PostgreSQL"],
    category: "backend",
    image: "/telegram-crypto-bot-interface.jpg",
  },
  {
    title: "Node Uptime Checker",
    description: "Infrastructure monitoring system for distributed nodes",
    impact: "Monitors 200+ nodes across 15 regions with real-time alerts",
    tech: ["Django", "Celery", "Redis", "Prometheus", "Grafana"],
    category: "backend",
    image: "/monitoring-dashboard.png",
  },
  {
    title: "AmongFriends",
    description: "Multichain betting dApp with provably fair outcomes",
    impact: "Facilitated 50K+ bets across Ethereum, Polygon, and Arbitrum",
    tech: ["Solidity", "The Graph", "Wagmi", "Next.js", "Ethers.js"],
    category: "web3",
    image: "/web3-betting-dapp.jpg",
  },
  {
    title: "Secuda",
    description: "Algorand hackathon-winning decentralized security platform",
    impact: "Won 1st place at Algorand Global Hackathon 2023",
    tech: ["Algorand", "PyTeal", "React", "AlgoSDK"],
    category: "web3",
    image: "/algorand-security-dapp.jpg",
  },
  {
    title: "Sequence NFT Minting",
    description: "IPFS-powered NFT minting platform with smart contracts",
    impact: "Minted 25K+ NFTs with optimized gas costs",
    tech: ["Solidity", "IPFS", "Hardhat", "OpenZeppelin", "React"],
    category: "web3",
    image: "/nft-minting-platform.jpg",
  },
]

export function Projects({ mode }: ProjectsProps) {
  const filteredProjects =
    mode === "backend"
      ? projects.filter((p) => p.category === "backend")
      : projects.filter((p) => p.category === "web3")

  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="h-8 w-8 text-primary animate-glow-pulse" />
            <h2 className="text-5xl md:text-6xl font-bold">
              Featured{" "}
              <span className="text-primary animate-glow-pulse">{mode === "backend" ? "Backend" : "Web3"}</span>{" "}
              Projects
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Building scalable systems that power real-world applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group relative glass-card hover:border-primary transition-all duration-500 hover:scale-[1.02] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/30 to-transparent" />
              </div>

              <CardHeader>
                <CardTitle className="flex items-center justify-between text-xl">
                  <span className="font-bold">{project.title}</span>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-5">
                <div className="flex items-start gap-2">
                  <Sparkles className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-accent font-medium leading-relaxed">{project.impact}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs font-semibold px-3 py-1 bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
