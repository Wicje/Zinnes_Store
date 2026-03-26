import type { Metadata } from 'next'
import '../styles/globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ProductProvider } from '@/context/ProductContext'
import CartDrawer from '@/components/CartDrawer'

export const metadata: Metadata = {
  title: 'ZINNE | Designed with Intention',
  description: 'Luxury minimal e-commerce experience',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ProductProvider>
          <Navigation />
          {children}
          <Footer />
          <CartDrawer />
        </ProductProvider>
      </body>
    </html>
  )
}
