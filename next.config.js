module.exports = {
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  eslint: {
    ignoreDuringBuilds: true,
    eslint: {
      dirs: ['src/pages', 'src/contexts'],
    },
  },
  compiler: {
    reactRemoveProperties: true,
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/conversations',
        permanent: false,
      },
    ]
  },
}
