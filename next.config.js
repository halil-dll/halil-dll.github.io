module.exports = {
  reactStrictMode: true,
  webpack5: true,
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
    ]
  },
}
