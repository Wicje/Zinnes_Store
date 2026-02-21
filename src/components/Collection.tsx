'use client'

import Image from 'next/image'
import './Collection.css'
import { useProducts } from '@/context/ProductContext'
import { sendToWhatsApp } from '@/lib/whatsapp'

export default function Collection() {
  const { products } = useProducts()

  return (
    <section className="collection-section">
      
      {/* Header */}
      <div className="collection-header">
        <span className="bg-title">THE STUDIO</span>
        <h1 className="main-title">OUR COLLECTION</h1>
        <p className="collection-desc">
          EACH COLLECTION IS DEVELOPED AS PART OF A WIDER SYSTEM. 
          GARMENTS ARE DESIGNED TO COEXIST—SUPPORTING MODERN LIFE 
          THROUGH FORM, MATERIAL, AND BALANCE.
        </p>
      </div>

      {/* Sub Navigation */}
      <div className="collection-subnav">
        <span className="subnav-left">COLLECTION</span>
        <div className="subnav-right">
          <span className="active">READY TO WEAR</span>
          <span>ACCESSORIES</span>
          <span>GARDEROB</span>
          <span>BAGS</span>
          <span>SHOES</span>
          <span>JEWELRY</span>
          <span>SIGNATURE PIECES</span>
        </div>
      </div>

      {/* Product Grid */}
      <div className="collection-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() =>
              sendToWhatsApp(product.name, product.price)
            }
          >
            <div className="image-wrapper">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={900}
                className="product-image"
              />
            </div>

            <div className="product-info">
              <span>{product.name}</span>
              <span>{product.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {[1,2,3,4,5].map((n) => (
          <span key={n} className={n === 1 ? 'active-page' : ''}>
            {n}
          </span>
        ))}
      </div>

    </section>
  )
}
