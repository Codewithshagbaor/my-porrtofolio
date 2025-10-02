"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

interface SystemMonitorProps {
  mode: "backend" | "web3"
}

export function SystemMonitor({ mode }: SystemMonitorProps) {
  const [stats, setStats] = useState({
    uptime: 0,
    requests: 0,
    latency: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        uptime: Math.floor(Math.random() * 100),
        requests: Math.floor(Math.random() * 10000),
        latency: Math.floor(Math.random() * 100),
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-6 left-6 z-50 hidden lg:block">
      <Card className="bg-card/80 backdrop-blur-sm border-primary/30 p-4 min-w-[200px]">
        <div className="space-y-2 text-xs font-mono">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">MODE:</span>
            <span className="text-primary font-semibold uppercase">{mode}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">UPTIME:</span>
            <span className="text-accent">{stats.uptime}%</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">REQUESTS:</span>
            <span className="text-foreground">{stats.requests.toLocaleString()}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">LATENCY:</span>
            <span className="text-foreground">{stats.latency}ms</span>
          </div>

          <div className="pt-2 border-t border-border">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-muted-foreground">SYSTEM ACTIVE</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
