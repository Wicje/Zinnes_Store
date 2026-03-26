'use client'

import Image from 'next/image'
import './NewArrivals.css'
import { useProducts } from '@/context/ProductContext'
import { useCartStore } from '@/lib/useCartStore'

export default function NewArrivals() {
  const { products } = useProducts()
  const addToCart = useCartStore((state) => state.addToCart)
  const newProducts = products.filter((p) => p.isNew)

  return (
    <section className="new-section">
      <div className="new-header">
        <h2>NEW ARRIVALS</h2>
      </div>

      <div className="new-grid">
        {newProducts.map((product) => (
          <div key={product.id} className="new-card">
            <div className="new-image-wrapper">
              <Image src={product.image} alt={product.name} width={600} height={900} />
            </div>

            <div className="new-info">
              <span>{product.name}</span>
              <span>${product.price}</span>
            </div>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
