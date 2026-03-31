"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X, MessageCircle } from "lucide-react"
import { type Product, getWhatsAppLink } from "@/lib/products"
import { Button } from "@/components/ui/button"

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (product) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [product, onClose])

  if (!product) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-3xl bg-card border border-border/50 shadow-2xl shadow-[#7B5CFF]/20 animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-foreground hover:bg-background transition-colors hover:cursor-pointer"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="flex flex-col md:flex-row max-h-[90vh] overflow-y-auto">
          {/* Image */}
          <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto md:min-h-[400px] bg-secondary">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Details */}
          <div className="flex flex-col p-6 md:p-8 md:w-1/2">
            {/* Category Badge */}
            <div className="flex gap-2 flex-wrap mb-4">
              {product.category.map((cat) => (
                <span
                  key={cat}
                  className="text-xs font-medium uppercase tracking-wide bg-purple-500/10 text-purple-400 px-2.5 py-1 rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Name */}
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
              {product.name}
            </h2>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
              {product.fullDescription}
            </p>

            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7B5CFF] to-[#5A3BFF]">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
            </div>

            {/* WhatsApp Button */}
            <Button
              asChild
              size="lg"
              className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#22c55e] hover:to-[#16a34a] text-white shadow-lg shadow-[#25D366]/25 transition-all hover:scale-[1.02]"
            >
              <a href={getWhatsAppLink(product.name, product.price)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Fazer Pedido via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
