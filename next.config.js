/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/auth/login',
      },
      {
        source: '/sign-up',
        destination: '/auth/register',
      },
      {
        source: '/sign-up/create-pin',
        destination: '/auth/createPin',
      },
      {
        source: '/sign-up/create-pin/success',
        destination: '/auth/pinSuccess',
      },
      {
        source: '/reset-password',
        destination: '/auth/inputEmailResetPassword',
      },
      {
        source: '/new-password',
        destination: '/auth/resetPassword',
      },
    ]
  },
}

module.exports = nextConfig
