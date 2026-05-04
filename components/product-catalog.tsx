"use client"

import { useState, useMemo, useEffect, useRef } from "react"
import { products, type Category, type Product } from "@/lib/products"
import { CategoryFilter } from "@/components/category-filter"
import { ProductCard } from "@/components/product-card"
import { ProductModal } from "@/components/product-modal"
import { Pagination } from "@/components/pagination"
import { SearchBar } from "@/components/search-bar"

const PRODUCTS_PER_PAGE = 8

export function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const catalogRef = useRef<HTMLElement>(null)

  // Scroll to top of catalog when page changes
  const shouldScroll = useRef(false)

  useEffect(() => {
    if (shouldScroll.current && catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    shouldScroll.current = false
  }, [currentPage])

  // Filter products
  const filteredProducts = useMemo(() => {
    let filtered = products

    // Filter by category
    if (activeCategory !== "Todos") {
      filtered = filtered.filter((p) =>
        p.category.includes(activeCategory)
      )
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [activeCategory, searchQuery])

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  )

  // Reset to page 1 when filter changes
  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category)
    setCurrentPage(1)
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  return (
    <section id="produtos" ref={catalogRef} className="py-16 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Nossos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B5CFF] to-[#5A3BFF]">
              Produtos
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore nossa coleção de produtos impressos em 3D.
            Cada peça é criada com qualidade e atenção aos detalhes.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar value={searchQuery} onChange={handleSearchChange} />
        </div>

        {/* Category Filter */}
        <div className="mb-10">
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {/* Products Grid */}
        {paginatedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {paginatedProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => setSelectedProduct(product)}
                priority={currentPage === 1 && index < 4}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Nenhum produto encontrado para sua busca.
            </p>
          </div>
        )}

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => {
            shouldScroll.current = true
            setCurrentPage(page)
          }}
        />

        {/* Product Modal */}
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </section>
  )
}
