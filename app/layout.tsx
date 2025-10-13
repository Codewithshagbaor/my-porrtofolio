import type React from "react"
import type { Metadata } from "next"
import { Chakra_Petch } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const chakraPetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-chakra-petch",
})

export const metadata: Metadata = {
  title: "Shagbaor Agber Portfolio",
  description: "Shagbaor Agber — Software Developer specializing in Django, Web3, and full-stack innovation. I build scalable digital systems that merge blockchain utility with modern web infrastructure. Explore my portfolio for projects in decentralized apps, API architecture, and intelligent backend engineering.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`font-sans ${chakraPetch.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
