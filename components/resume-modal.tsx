"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface ResumeModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  mode: "backend" | "web3"
}

export function ResumeModal({ open, onOpenChange, mode }: ResumeModalProps) {

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-7xl h-[90vh] p-0 gap-0 overflow-hidden border-2 flex flex-col"
        style={{
          borderColor: mode === "backend" ? "rgba(59, 130, 246, 0.3)" : "rgba(168, 85, 247, 0.3)",
          boxShadow: mode === "backend" ? "0 0 60px rgba(59, 130, 246, 0.2)" : "0 0 60px rgba(168, 85, 247, 0.2)",
        }}
      >
        <DialogHeader
          className="px-6 py-4 border-b backdrop-blur-xl shrink-0"
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
              Resume
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="flex-1 relative overflow-hidden p-0 m-0" style={{ background: "oklch(0.15 0.015 240)" }}>
          <div 
            className="w-full h-full border-0 block "
          >
            <iframe
              src="/ShagbaorAgberResume.pdf#toolbar=0&navpanes=0&scrollbar=0"
              className="w-full h-full border-0"
              title="Shagbaor Agber Resume"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
