'use client'

import Link from 'next/link'
import { useState } from 'react'
import './Navigation.css'
import { clearSessionUser, getSessionUser, type SessionUser } from '@/lib/auth'
import { useCartStore } from '@/lib/useCartStore'

export default function Navigation() {
  const toggleCart = useCartStore((state) => state.toggleCart)
  const count = useCartStore((state) => state.cart.reduce((sum, i) => sum + i.quantity, 0))
  const [user, setUser] = useState<SessionUser | null>(() => getSessionUser())

  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="nav-left">
          <Link href="#">ABOUT</Link>
          <Link href="#">CAMPAIGN</Link>
        </div>

        <div className="nav-logo">
          <Link href="/">ZINNE</Link>
        </div>

        <div className="nav-right">
          {user ? (
            <>
              {user.role === 'admin' ? <Link href="/admin">ADMIN</Link> : null}
              <button
                onClick={() => {
                  clearSessionUser()
                  setUser(null)
                }}
              >
                LOGOUT
              </button>
            </>
          ) : (
            <>
              <Link href="/login">LOGIN</Link>
              <Link href="/register">REGISTER</Link>
            </>
          )}
          <button onClick={toggleCart}>CART ({count})</button>
        </div>
      </div>
    </header>
  )
}
