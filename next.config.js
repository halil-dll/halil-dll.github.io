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
        destination: 'https://github.com/ConnorDoesDev',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/connordoesdev',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/a6WRfzWTEa',
        permanent: true,
      },
      {
        source: '/mastodon',
        destination: 'https://mastodon.lol/@connordouijo',
        permanent: true,
      }
    ]
  },
}
