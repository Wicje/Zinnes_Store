'use client'

import { useSyncExternalStore } from 'react'
import type { Product } from '@/context/ProductContext'

export interface CartItem extends Product {
  quantity: number
}

interface CartState {
  cart: CartItem[]
  isOpen: boolean
}

let state: CartState = { cart: [], isOpen: false }
const listeners = new Set<() => void>()

function setState(next: CartState) {
  state = next
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

const actions = {
  addToCart(product: Product) {
    const existing = state.cart.find((item) => item.id === product.id)
    if (existing) {
      setState({
        ...state,
        isOpen: true,
        cart: state.cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      })
      return
    }

    setState({ ...state, isOpen: true, cart: [...state.cart, { ...product, quantity: 1 }] })
  },
  decreaseFromCart(id: string) {
    setState({
      ...state,
      cart: state.cart
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0),
    })
  },
  removeFromCart(id: string) {
    setState({ ...state, cart: state.cart.filter((item) => item.id !== id) })
  },
  toggleCart() {
    setState({ ...state, isOpen: !state.isOpen })
  },
  clearCart() {
    setState({ ...state, cart: [] })
  },
}

type Store = CartState & typeof actions

function getSnapshot(): Store {
  return { ...state, ...actions }
}

export function useCartStore<T>(selector: (store: Store) => T): T {
  return useSyncExternalStore(subscribe, () => selector(getSnapshot()), () => selector(getSnapshot()))
}
