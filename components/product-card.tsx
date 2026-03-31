"use client"

import Image from "next/image"
import { type Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
  onClick: () => void
  priority?: boolean
}

export function ProductCard({ product, onClick, priority = false }: ProductCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#7B5CFF]/10 hover:border-[#7B5CFF]/30 text-left w-full hover:cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Glow Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#7B5CFF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 line-clamp-1 group-hover:text-[#7B5CFF] transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
          {product.description}
        </p>
        <div>
          <span className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7B5CFF] to-[#5A3BFF]">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          <div className="flex gap-2 flex-wrap mt-4">
            {product.category.map((cat) => (
              <span
                key={cat}
                className="text-xs font-medium text-muted-foreground uppercase tracking-wide bg-secondary px-2.5 py-1 rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  )
}
