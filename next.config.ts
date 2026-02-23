/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {

  protocol: 'https',
  hostname: 'YOUR_PROJECT_ID.supabase.co',

      },
    ],
  },
}

module.exports = nextConfig
