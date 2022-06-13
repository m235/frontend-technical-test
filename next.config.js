module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
    eslint: {
      dirs: ['src/pages', 'src/contexts'],
    },
  },
  compiler: {
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
