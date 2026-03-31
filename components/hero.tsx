"use client"

import { ArrowDown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#7B5CFF]/20 blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#5A3BFF]/20 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#7B5CFF]/10 blur-[120px]" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(123, 92, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(123, 92, 255, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#7B5CFF]/30 bg-[#7B5CFF]/10 px-4 py-1.5 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Sparkles className="h-4 w-4 text-[#7B5CFF]" />
          <span className="text-sm font-medium text-[#7B5CFF]">Impressão 3D de Alta Qualidade</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 text-balance">
          Transformamos{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B5CFF] to-[#5A3BFF]">
            ideias
          </span>{" "}
          em realidade com impressão 3D
        </h1>

        {/* Subtitle */}
        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 text-pretty">
          Produtos personalizados, decoração, utilidades e muito mais. 
          Qualidade e criatividade em cada peça impressa.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#7B5CFF] to-[#5A3BFF] hover:from-[#6B4CFF] hover:to-[#4A2BFF] text-white shadow-lg shadow-[#7B5CFF]/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#7B5CFF]/30 px-8"
          >
            <a href="#produtos">
              Ver Catálogo
              <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
            </a>
          </Button>
        </div>

        {/* Floating 3D Elements */}
        <div className="absolute top-20 left-10 hidden lg:block animate-float">
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#7B5CFF]/20 to-[#5A3BFF]/20 border border-[#7B5CFF]/20 backdrop-blur-sm rotate-12" />
        </div>
        <div className="absolute bottom-32 right-16 hidden lg:block animate-float-delayed">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#7B5CFF]/30 to-[#5A3BFF]/30 border border-[#7B5CFF]/30 backdrop-blur-sm -rotate-6" />
        </div>
        <div className="absolute top-40 right-24 hidden lg:block animate-float">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#7B5CFF]/40 to-[#5A3BFF]/40 border border-[#7B5CFF]/40 backdrop-blur-sm rotate-45" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs font-medium">Role para ver</span>
          <ArrowDown className="h-4 w-4" />
        </div>
      </div>
    </section>
  )
}
