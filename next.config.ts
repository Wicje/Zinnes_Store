/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'YOUR_PROJECT_ID.supabase.co',// Replace with actual supabase YOUR_PROJECT_ID
      },
    ],
  },
}

module.exports = nextConfig
