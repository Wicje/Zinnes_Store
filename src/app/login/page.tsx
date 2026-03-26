'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('users') || '[]') as Array<{ email: string; password: string; name: string }>
    const match = users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password)

    if (!match) {
      setError('Invalid email or password')
      return
    }

    localStorage.setItem('session_user', JSON.stringify({ email: match.email, name: match.name }))
    router.push('/')
  }

  return (
    <main style={{ maxWidth: 420, margin: '40px auto', padding: 20 }}>
      <h1>Login Portal</h1>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12, marginTop: 20 }}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" required />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" required />
        {error ? <p style={{ color: 'crimson' }}>{error}</p> : null}
        <button style={{ background: '#111', color: '#fff', padding: 10 }} type="submit">Sign in</button>
      </form>
      <p style={{ marginTop: 12 }}>
        New here? <Link href="/register">Create an account</Link>
      </p>
    </main>
  )
}
