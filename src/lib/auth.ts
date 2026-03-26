export const ADMIN_EMAIL = 'admin@zinne.com'
export const ADMIN_PASSWORD = 'zinne-admin-2026'

export interface SessionUser {
  name: string
  email: string
  role: 'user' | 'admin'
}

export function getSessionUser(): SessionUser | null {
  if (typeof window === 'undefined') return null
  const raw = localStorage.getItem('session_user')
  return raw ? (JSON.parse(raw) as SessionUser) : null
}

export function setSessionUser(user: SessionUser) {
  localStorage.setItem('session_user', JSON.stringify(user))
}

export function clearSessionUser() {
  localStorage.removeItem('session_user')
}

export function isAdminCredentials(email: string, password: string) {
  return email.toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASSWORD
}
