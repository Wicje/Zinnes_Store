// types/index.ts
export interface Product {
  id: number
  title: string
  category: string
  price: number
  description: string
  image: string
  images?: string[]
  sizes?: string[]
  colors?: Color[]
  material?: string
  care?: string[]
  inStock?: boolean
}

export interface Color {
  name: string
  hex: string
  inStock?: boolean
}

export interface CartItem {
  product: Product
  quantity: number
  size?: string
  color?: Color
}

export interface User {
  id: string
  email: string
  firstName?: string
  lastName?: string
  addresses?: Address[]
}

export interface Address {
  id: string
  type: 'shipping' | 'billing'
  line1: string
  line2?: string
  city: string
  state: string
  postalCode: string
  country: string
  isDefault?: boolean
}

export interface ApiResponse<T> {
  data?: T
  error?: string
  status: number
}
