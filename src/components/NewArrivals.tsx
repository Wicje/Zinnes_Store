'use client'

import Image from 'next/image'
import './NewArrivals.css'
import { sendToWhatsApp } from '@/lib/whatsapp'

export default function NewArrivals() {
  const { products } = useProducts()

  const newProducts = products.filter(p => p.isNew)

  return (
    <section className="new-section">

      <div className="new-header">
        <h2>NEW ARRIVALS</h2>
        <p>
          DISCOVER READY TO WEAR, SHOES, BAGS, ACCESSORIES
          AND JEWELRY FROM THE NEW SEASON COLLECTION.
        </p>
      </div>

      <div className="new-grid">
        {newProducts.map(product => (
          <div
            key={product.id}
            className="new-card"
            onClick={() =>
              sendToWhatsApp(product.name, product.price)
            }
          >
            <div className="new-image-wrapper">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={900}
              />
            </div>

            <div className="new-info">
              <span>{product.name}</span>
              <span>{product.price}</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
