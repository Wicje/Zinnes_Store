'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { getProductById } from '@/lib/products'
import { useCartStore } from '@/lib/useCartStore'

export default function ProductDetailsPage() {
  const params = useParams<{ id: string }>()
  const product = getProductById(params.id)

  const addToCart = useCartStore((state) => state.addToCart)
  const decreaseFromCart = useCartStore((state) => state.decreaseFromCart)
  const quantity = useCartStore((state) => (product ? state.getItemQuantity(product.id) : 0))

  if (!product) {
    return (
      <main style={{ maxWidth: 900, margin: '40px auto', padding: 20 }}>
        <h1>Product not found</h1>
        <Link href="/">Back to collection</Link>
      </main>
    )
  }

  return (
    <main style={{ maxWidth: 1100, margin: '40px auto', padding: 20 }}>
      <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'minmax(280px, 420px) 1fr' }}>
        <Image src={product.image} alt={product.name} width={700} height={900} style={{ width: '100%', height: 'auto' }} />

        <section style={{ display: 'grid', gap: 12, alignContent: 'start' }}>
          <p style={{ fontSize: 12, letterSpacing: 1, textTransform: 'uppercase' }}>{product.category}</p>
          <h1>{product.name}</h1>
          <p>${product.price}</p>
          <p>{product.description}</p>

          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 8 }}>
            <button className="add-to-cart" onClick={() => decreaseFromCart(product.id)} disabled={quantity === 0}>
              -
            </button>
            <strong>{quantity}</strong>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              +
            </button>
          </div>

          <button className="add-to-cart" onClick={() => addToCart(product)}>
            Add to cart
          </button>

          <Link href="/" style={{ marginTop: 12 }}>
            ← Continue shopping
          </Link>
        </section>
      </div>
    </main>
  )
}
