'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { setSessionUser } from '@/lib/auth'

export default function RegisterPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('users') || '[]') as Array<{ email: string; password: string; name: string }>
    const exists = users.some((u) => u.email.toLowerCase() === email.toLowerCase())

    if (exists) {
      setError('This email already has an account')
      return
    }

    const next = [...users, { name, email: email.toLowerCase(), password }]
    localStorage.setItem('users', JSON.stringify(next))
    setSessionUser({ name, email: email.toLowerCase(), role: 'user' })
    const next = [...users, { name, email, password }]
    localStorage.setItem('users', JSON.stringify(next))
    localStorage.setItem('session_user', JSON.stringify({ name, email }))
    router.push('/')
  }

  return (
    <main style={{ maxWidth: 420, margin: '40px auto', padding: 20 }}>
      <h1>Registration Portal</h1>
      <h1>Registration</h1>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12, marginTop: 20 }}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" required />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" required />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" required minLength={6} />
        {error ? <p style={{ color: 'crimson' }}>{error}</p> : null}
        <button style={{ background: '#111', color: '#fff', padding: 10 }} type="submit">Create account</button>
      </form>
      <p style={{ marginTop: 12 }}>
        Already registered? <Link href="/login">Login</Link>
      </p>
    </main>
  )
}
