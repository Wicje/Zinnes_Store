'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { clearSessionUser, getSessionUser } from '@/lib/auth'

export default function AdminPage() {
  const router = useRouter()
  const user = getSessionUser()
  const isAdmin = user?.role === 'admin'

  useEffect(() => {
    if (!isAdmin) {
      router.replace('/login?next=admin')
    }
  }, [isAdmin, router])

  if (!isAdmin) {
    return <main style={{ maxWidth: 960, margin: '40px auto', padding: 20 }}>Checking admin access...</main>
  }

  return (
    <main style={{ maxWidth: 960, margin: '40px auto', padding: 20 }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome admin. This area is protected by hardcoded admin credentials.</p>
      <button
        style={{ marginTop: 16, background: '#111', color: '#fff', padding: '10px 16px' }}
        onClick={() => {
          clearSessionUser()
          router.push('/login')
        }}
      >
        Logout admin
      </button>
export default function AdminPage() {
  return (
    <main style={{ maxWidth: 960, margin: '40px auto', padding: 20 }}>
      <h1>Admin Dashboard</h1>
      <p>Admin order management can be connected to your backend service.</p>
    </main>
  )
}
