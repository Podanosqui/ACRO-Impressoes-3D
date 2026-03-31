"use client"

import { categories, type Category } from "@/lib/products"
import { cn } from "@/lib/utils"

interface CategoryFilterProps {
  activeCategory: Category
  onCategoryChange: (category: Category) => void
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div id="categorias" className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:cursor-pointer",
            activeCategory === category
              ? "bg-gradient-to-r from-[#7B5CFF] to-[#5A3BFF] text-white shadow-lg shadow-[#7B5CFF]/25"
              : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground border border-border/50"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
