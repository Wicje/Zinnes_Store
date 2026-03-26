'use client'

import Link from 'next/link'
import './Navigation.css'
import { useCartStore } from '@/lib/useCartStore'

export default function Navigation() {
  const toggleCart = useCartStore((state) => state.toggleCart)
  const count = useCartStore((state) => state.cart.reduce((sum, i) => sum + i.quantity, 0))

  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="nav-left">
          <Link href="#">ABOUT</Link>
          <Link href="#">CAMPAIGN</Link>
        </div>

        <div className="nav-logo">ZINNE</div>

        <div className="nav-right">
          <Link href="/login">LOGIN</Link>
          <Link href="/register">REGISTER</Link>
          <button onClick={toggleCart}>CART ({count})</button>
        </div>
      </div>
    </header>
  )
}
