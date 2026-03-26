import LoginForm from '@/components/LoginForm'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>
}) {
  const params = await searchParams
  return <LoginForm next={params.next} />
}
