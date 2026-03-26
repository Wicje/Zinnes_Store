import type { Product } from '@/context/ProductContext'

const products: Product[] = [
  { id: 'p1', name: 'Structured Coat', price: 325, image: '/collect-1.jpg', category: 'Ready to wear', isNew: true },
  { id: 'p2', name: 'Wool Trousers', price: 210, image: '/collect-2.jpg', category: 'Ready to wear' },
  { id: 'p3', name: 'Silk Dress', price: 280, image: '/collect-3.jpg', category: 'Ready to wear', isNew: true },
]

export async function getProducts() {
  return products
}

export async function getNewArrivals() {
  return products.filter((product) => product.isNew)
}
