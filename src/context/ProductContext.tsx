'use client'

import { createContext, useContext } from 'react'

export interface Product {
  id: number
  name: string
  price: string
  image: string
  isNew?: boolean
}

interface ProductContextType {
  products: Product[]
}

const ProductContext = createContext<ProductContextType | null>(null)

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const products: Product[] = [
    {
      id: 1,
      name: 'LIGHT SPRING TRENCH POPPY',
      price: '1080 EUR',
      image: '/collect-1.jpg',
      isNew: true,
    },
    {
      id: 2,
      name: 'MERINO TURTLENECK BLACK',
      price: '510 EUR',
      image: '/collect-2.jpg',
    },
    {
      id: 3,
      name: 'STRIPED MINI SKIRT ICE/WHITE',
      price: '550 EUR',
      image: '/collect-3.jpg',
    },
    {
      id: 4,
      name: 'CREW CAPE KNIT DARK GREY',
      price: '910 EUR',
      image: '/collect-4.jpg',
      isNew: true,
    },

    {
      id: 5,
      name: 'LIGHT SPRING TRENCH POPPY',
      price: '1080 EUR',
      image: '/collect-1.jpg',
      isNew: true,
    },
    {
      id: 6,
      name: 'MERINO TURTLENECK BLACK',
      price: '510 EUR',
      image: '/collect-2.jpg',
    },
    {
      id: 7,
      name: 'STRIPED MINI SKIRT ICE/WHITE',
      price: '550 EUR',
      image: '/collect-3.jpg',
    },
    {
      id: 8,
      name: 'CREW CAPE KNIT DARK GREY',
      price: '910 EUR',
      image: '/collect-4.jpg',
      isNew: true,
    },


    {
      id: 9,
      name: 'LIGHT SPRING TRENCH POPPY',
      price: '1080 EUR',
      image: '/collect-1.jpg',
      isNew: true,
    },
    {
      id: 10,
      name: 'MERINO TURTLENECK BLACK',
      price: '510 EUR',
      image: '/collect-2.jpg',
    },
    {
      id: 11,
      name: 'STRIPED MINI SKIRT ICE/WHITE',
      price: '550 EUR',
      image: '/collect-3.jpg',
    },
    {
      id: 12,
      name: 'CREW CAPE KNIT DARK GREY',
      price: '910 EUR',
      image: '/collect-4.jpg',
      isNew: true,
    },



    {
      id: 13,
      name: 'LIGHT SPRING TRENCH POPPY',
      price: '1080 EUR',
      image: '/collect-1.jpg',
      isNew: true,
    },
    {
      id: 14,
      name: 'MERINO TURTLENECK BLACK',
      price: '510 EUR',
      image: '/collect-2.jpg',
    },
    {
      id: 15,
      name: 'STRIPED MINI SKIRT ICE/WHITE',
      price: '550 EUR',
      image: '/collect-3.jpg',
    },
    {
      id: 16,
      name: 'CREW CAPE KNIT DARK GREY',
      price: '910 EUR',
      image: '/collect-4.jpg',
      isNew: true,
    },


    {
      id: 17,
      name: 'LIGHT SPRING TRENCH POPPY',
      price: '1080 EUR',
      image: '/collect-1.jpg',
      isNew: true,
    },
    {
      id: 18,
      name: 'MERINO TURTLENECK BLACK',
      price: '510 EUR',
      image: '/collect-2.jpg',
    },
    {
      id: 19,
      name: 'STRIPED MINI SKIRT ICE/WHITE',
      price: '550 EUR',
      image: '/collect-3.jpg',
    },
    {
      id: 20,
      name: 'CREW CAPE KNIT DARK GREY',
      price: '910 EUR',
      image: '/collect-4.jpg',
      isNew: true,
    },


























































  ]

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('useProducts must be used inside ProductProvider')
  }
  return context
}
