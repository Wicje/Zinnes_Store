'use client'

import { useState } from 'react'
import { checkoutOnWhatsApp } from '@/lib/checkout'
import { useCartStore } from '@/lib/useCartStore'
import './CartDrawer.css'

export default function CartDrawer() {
  const { cart, isOpen, toggleCart, addToCart, decreaseFromCart, removeFromCart, clearCart } = useCartStore()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const onCheckout = () => {
    if (!name || !phone || cart.length === 0) return
    checkoutOnWhatsApp(cart, name, phone)
    clearCart()
    setName('')
    setPhone('')
  }

  return (
    <aside className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h3>Your Cart</h3>
        <button onClick={toggleCart}>✕</button>
      </div>

      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your bag is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div>
                <strong>{item.name}</strong>
                <p>${item.price} x {item.quantity}</p>
              </div>
              <div className="qty-actions">
                <button onClick={() => decreaseFromCart(item.id)}>-</button>
                <button onClick={() => addToCart(item)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart-footer">
        <p>Total: ${total}</p>
        <input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button className="checkout" onClick={onCheckout} disabled={!name || !phone || cart.length === 0}>
          Checkout on WhatsApp
        </button>
      </div>
    </aside>
  )
}
