"use client"

import { useState } from "react"
import { Menu, X, MessageCircle, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { WHATSAPP_NUMBER } from "@/lib/products"

const navItems = [
  { name: "Home", href: "#" },
  { name: "Produtos", href: "#produtos" },
  { name: "Categorias", href: "#categorias" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de fazer um pedido.")}`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#000000] to-[#5A3BFF] shadow-lg shadow-[#7B5CFF]/25 transition-transform group-hover:scale-105">
              <img src="/Acro Logo only.png" alt="Acro Impressões 3D" />
            </div>
            <span className="text-lg font-bold text-foreground">
              Acro <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B5CFF] to-[#5A3BFF]">Impressões 3D</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              asChild
              className="bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#22c55e] hover:to-[#16a34a] text-white shadow-lg shadow-[#25D366]/25 transition-all hover:scale-105"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Fazer Pedido
              </a>
            </Button>
          </div>

          {/* Mobile Theme Toggle & Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground px-2 py-1"
                >
                  {item.name}
                </a>
              ))}
              <Button
                asChild
                className="mt-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#22c55e] hover:to-[#16a34a] text-white"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Fazer Pedido
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
