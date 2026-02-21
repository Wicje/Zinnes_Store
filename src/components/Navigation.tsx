'use client'
import Link from 'next/link'
import './Navigation.css'

export default function Navigation() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="nav-left">
          <Link href="#">ABOUT</Link>
          <Link href="#">CAMPAIGN</Link>
        </div>

        <div className="nav-logo">
          TOTEME
        </div>

        <div className="nav-right">
          <Link href="#">SHOP</Link>
          <Link href="#">CONTACT</Link>
        </div>
      </div>
    </header>
  )
}
