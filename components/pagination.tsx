"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav className="flex items-center justify-center gap-2" aria-label="Paginação">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-secondary text-muted-foreground transition-all",
          currentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-[#7B5CFF]/10 hover:border-[#7B5CFF]/30 hover:text-[#7B5CFF]"
        )}
        aria-label="Página anterior"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {pages.map((page) => (
        <button
          type="button"
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-xl text-sm font-medium transition-all hover:cursor-pointer",
            currentPage === page
              ? "bg-gradient-to-r from-[#7B5CFF] to-[#5A3BFF] text-white shadow-lg shadow-[#7B5CFF]/25"
              : "border border-border/50 bg-secondary text-muted-foreground hover:bg-[#7B5CFF]/10 hover:border-[#7B5CFF]/30 hover:text-[#7B5CFF]"
          )}
          aria-label={`Página ${page}`}
          aria-current={currentPage === page ? "page" : undefined}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-secondary text-muted-foreground transition-all hover:cursor-pointer",
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-[#7B5CFF]/10 hover:border-[#7B5CFF]/30 hover:text-[#7B5CFF]"
        )}
        aria-label="Próxima página"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </nav>
  )
}
