'use client'

import { createContext, useContext, useMemo } from 'react'
import { PRODUCTS, type Product } from '@/lib/products'

interface ProductContextValue {
  products: Product[]
}

const ProductContext = createContext<ProductContextValue>({ products: PRODUCTS })

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const value = useMemo(() => ({ products: PRODUCTS }), [])
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export function useProducts() {
  return useContext(ProductContext)
}
