import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ProductProvider } from '@/context/ProductContext'
import CartDrawer from '@/components/CartDrawer'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
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
