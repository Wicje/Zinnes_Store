'use client'

import Image from 'next/image'
import Link from 'next/link'
import './Collection.css'
import { useProducts } from '@/context/ProductContext'
import { useCartStore } from '@/lib/useCartStore'

export default function Collection() {
  const { products } = useProducts()
  const addToCart = useCartStore((state) => state.addToCart)

  return (
    <section className="collection-section">
      <div className="collection-header">
        <span className="bg-title">THE BRAND</span>
        <h1 className="main-title">OUR COLLECTION</h1>
        <p className="collection-desc">
          EACH COLLECTION IS DEVELOPED AS PART OF A WIDER SYSTEM.
          GARMENTS ARE DESIGNED TO COEXIST.
        </p>
      </div>

      <div className="collection-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link href={`/products/${product.id}`}>
              <div className="image-wrapper">
                <Image src={product.image} alt={product.name} width={600} height={900} className="product-image" />
              </div>

              <div className="product-info">
                <span>{product.name}</span>
                <span>${product.price}</span>
              </div>
            </Link>
            <div className="image-wrapper">
              <Image src={product.image} alt={product.name} width={600} height={900} className="product-image" />
            </div>

            <div className="product-info">
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
