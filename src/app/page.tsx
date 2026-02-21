'use client'

import { motion } from 'framer-motion'
import Collection from '@/components/Collection'
import Hero from '@/components/Hero'
import NewArrivals from '@/components/NewArrivals'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
}

export default function Home() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <Collection />
      <Hero />
      <NewArrivals />
    </motion.main>
  )
}
