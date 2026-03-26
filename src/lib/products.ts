export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  description: string
  isNew?: boolean
}

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Structured Coat',
    price: 325,
    image: '/collect-1.jpg',
    category: 'Ready to wear',
    description: 'A sharp silhouette coat with a softly tailored fit for everyday luxury.',
    isNew: true,
  },
  {
    id: 'p2',
    name: 'Wool Trousers',
    price: 210,
    image: '/collect-2.jpg',
    category: 'Ready to wear',
    description: 'High-waist wool trousers cut for comfort and clean lines.',
  },
  {
    id: 'p3',
    name: 'Silk Dress',
    price: 280,
    image: '/collect-3.jpg',
    category: 'Ready to wear',
    description: 'Fluid silk dress designed for elegant movement.',
    isNew: true,
  },
  {
    id: 'p4',
    name: 'Leather Tote',
    price: 240,
    image: '/collect-4.jpg',
    category: 'Bags',
    description: 'Minimal leather tote with structured handles and spacious interior.',
  },
  {
    id: 'p5',
    name: 'Minimal Shirt',
    price: 130,
    image: '/collect-5.jpg',
    category: 'Ready to wear',
    description: 'Crisp shirt in soft cotton with contemporary proportions.',
    isNew: true,
  },
  {
    id: 'p6',
    name: 'Classic Heels',
    price: 190,
    image: '/collect-6.jpg',
    category: 'Shoes',
    description: 'Timeless pumps balancing height and comfort.',
  },
]

export async function getProducts() {
  return PRODUCTS
}

export async function getNewArrivals() {
  return PRODUCTS.filter((product) => product.isNew)
}

export function getProductById(id: string) {
  return PRODUCTS.find((product) => product.id === id)
}
