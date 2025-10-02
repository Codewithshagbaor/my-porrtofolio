"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface ResumeModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  mode: "backend" | "web3"
}

export function ResumeModal({ open, onOpenChange, mode }: ResumeModalProps) {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "resume.pdf"
    link.click()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-5xl h-[90vh] p-0 gap-0 overflow-hidden border-2"
        style={{
          borderColor: mode === "backend" ? "rgba(59, 130, 246, 0.3)" : "rgba(168, 85, 247, 0.3)",
          boxShadow: mode === "backend" ? "0 0 60px rgba(59, 130, 246, 0.2)" : "0 0 60px rgba(168, 85, 247, 0.2)",
        }}
      >
        <DialogHeader
          className="p-6 border-b backdrop-blur-xl"
          style={{
            background:
              mode === "backend"
                ? "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(14, 165, 233, 0.05))"
                : "linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(217, 70, 239, 0.05))",
            borderColor: mode === "backend" ? "rgba(59, 130, 246, 0.2)" : "rgba(168, 85, 247, 0.2)",
          }}
        >
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold flex items-center gap-3">
              <div
                className="p-2.5 rounded-xl"
                style={{
                  background: mode === "backend" ? "rgba(59, 130, 246, 0.15)" : "rgba(168, 85, 247, 0.15)",
                  color: mode === "backend" ? "#3b82f6" : "#a855f7",
                }}
              >
                📄
              </div>
              Resume Preview
            </DialogTitle>
            <Button
              onClick={handleDownload}
              className="font-semibold"
              style={{
                background:
                  mode === "backend"
                    ? "linear-gradient(135deg, #3b82f6, #0ea5e9)"
                    : "linear-gradient(135deg, #a855f7, #d946ef)",
              }}
            >
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 relative overflow-auto p-8" style={{ background: "oklch(0.15 0.015 240)" }}>
          <div className="max-w-4xl mx-auto bg-white text-black rounded-xl shadow-2xl p-12 space-y-8">
            {/* Resume Header */}
            <div
              className="text-center border-b-2 pb-6"
              style={{ borderColor: mode === "backend" ? "#3b82f6" : "#a855f7" }}
            >
              <h1 className="text-4xl font-bold mb-2">Your Name</h1>
              <p className="text-xl text-gray-600 mb-3">
                {mode === "backend" ? "Senior Backend Engineer" : "Web3 Developer"}
              </p>
              <div className="flex justify-center gap-6 text-sm text-gray-600">
                <span>📧 email@example.com</span>
                <span>📱 +1 (555) 123-4567</span>
                <span>🌐 portfolio.dev</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-800">Professional Summary</h2>
              <p className="text-gray-700 leading-relaxed">
                {mode === "backend"
                  ? "Experienced Backend Engineer with 5+ years building scalable APIs and microservices. Specialized in Python, Django, and cloud infrastructure. Led teams to deliver high-performance systems serving millions of users."
                  : "Innovative Web3 Developer with deep expertise in smart contracts and DeFi protocols. 4+ years experience building decentralized applications on Ethereum and other blockchains. Proven track record of deploying secure, gas-optimized contracts."}
              </p>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-800">Technical Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                {mode === "backend" ? (
                  <>
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">Languages</h3>
                      <p className="text-gray-600">Python, JavaScript, Go, SQL</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">Frameworks</h3>
                      <p className="text-gray-600">Django, FastAPI, Flask, Express</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">Databases</h3>
                      <p className="text-gray-600">PostgreSQL, MongoDB, Redis</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">DevOps</h3>
                      <p className="text-gray-600">Docker, AWS, Kubernetes, CI/CD</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">Blockchain</h3>
                      <p className="text-gray-600">Ethereum, Solana, Polygon</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">Smart Contracts</h3>
                      <p className="text-gray-600">Solidity, Rust, Hardhat</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">Web3 Tools</h3>
                      <p className="text-gray-600">Web3.js, Ethers.js, IPFS</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">DeFi</h3>
                      <p className="text-gray-600">AMMs, Lending, Staking, NFTs</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Work Experience</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {mode === "backend" ? "Senior Backend Engineer" : "Smart Contract Developer"}
                      </h3>
                      <p className="text-gray-600">{mode === "backend" ? "TechCorp Solutions" : "DeFi Protocol"}</p>
                    </div>
                    <span className="text-gray-500">2022 - Present</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Led development of scalable microservices architecture</li>
                    <li>Optimized API performance by 60%</li>
                    <li>Mentored team of 5 engineers</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {mode === "backend" ? "Full Stack Engineer" : "Blockchain Developer"}
                      </h3>
                      <p className="text-gray-600">{mode === "backend" ? "StartupXYZ" : "NFT Marketplace"}</p>
                    </div>
                    <span className="text-gray-500">2020 - 2022</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Built MVP from scratch serving 100K+ users</li>
                    <li>Designed database schema and API architecture</li>
                    <li>Implemented CI/CD pipelines</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-800">Education</h2>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Bachelor of Science in Computer Science</h3>
                <p className="text-gray-600">University Name • 2016 - 2020</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
