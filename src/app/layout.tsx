// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TOTEME | Designed with Intention',
  description: 'Luxury minimal e-commerce experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProductProvider>
          <Navigation />
          {children}
          <Footer />
        </ProductProvider>
      </body>
    </html>
  )
}
