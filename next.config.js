const { i18n } = require('./next-i18next.config')

module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ['lastfm.freetls.fastly.net'],
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/halil-dll',
        permanent: true,
      },
      {
        source: '/bluesky',
        destination: 'https://bsky.app/profile/halilzerra.bsky.social',
        permanent: true,
      }
    ]
  },
  i18n
}
