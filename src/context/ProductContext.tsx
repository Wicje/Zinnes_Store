'use client'

import { createContext, useContext, useMemo } from 'react'

export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  isNew?: boolean
}

const products: Product[] = [
  { id: 'p1', name: 'Structured Coat', price: 325, image: '/collect-1.jpg', category: 'Ready to wear', isNew: true },
  { id: 'p2', name: 'Wool Trousers', price: 210, image: '/collect-2.jpg', category: 'Ready to wear' },
  { id: 'p3', name: 'Silk Dress', price: 280, image: '/collect-3.jpg', category: 'Ready to wear', isNew: true },
  { id: 'p4', name: 'Leather Tote', price: 240, image: '/collect-4.jpg', category: 'Bags' },
  { id: 'p5', name: 'Minimal Shirt', price: 130, image: '/collect-5.jpg', category: 'Ready to wear', isNew: true },
  { id: 'p6', name: 'Classic Heels', price: 190, image: '/collect-6.jpg', category: 'Shoes' },
]

interface ProductContextValue {
  products: Product[]
}

const ProductContext = createContext<ProductContextValue>({ products })

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const value = useMemo(() => ({ products }), [])
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export function useProducts() {
  return useContext(ProductContext)
}
