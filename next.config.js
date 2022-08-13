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
        source: '/login2',
        destination: '/auth/login2',
      },
      {
        source: '/sign-up',
        destination: '/auth/register',
      },
      {
        source: '/auth/create-pin',
        destination: '/auth/createPin',
      },
      {
        source: '/auth/create-pin/success',
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
      {
        source: '/home',
        destination: '/dashboard/Home',
      },
      {
        source: '/top-up',
        destination: '/dashboard/TopUp',
      },
      {
        source: '/history',
        destination: '/dashboard/History',
      },
      {
        source: '/search-recevier',
        destination: '/dashboard/SearchReceiver',
      },
      {
        source: '/input-amount',
        destination: '/dashboard/InputAmount',
      },
      {
        source: '/confirmation',
        destination: '/dashboard/Confirmation',
      },
      {
        source: '/transfer-success',
        destination: '/dashboard/TransferSuccess',
      },
      {
        source: '/transfer-failed',
        destination: '/dashboard/TransferFailed',
      },
      {
        source: '/profile',
        destination: '/dashboard/Profile',
      },
      {
        source: '/profile/personal-information',
        destination: '/dashboard/PersonalInformation',
      },
      {
        source: '/profile/change-password',
        destination: '/dashboard/ChangePassword',
      },
      {
        source: '/profile/change-pin-old',
        destination: '/dashboard/ChangePinOld',
      },
      {
        source: '/profile/change-pin-new',
        destination: '/dashboard/ChangePinNew',
      },
      {
        source: '/profile/edit-phone-number',
        destination: '/dashboard/EditPhonenumber',
      },
    ]
  },
  images: {
    domains: ['res.cloudinary.com'],
  }
}

module.exports = nextConfig
