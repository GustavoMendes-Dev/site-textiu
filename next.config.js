module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/conta',
        headers: [
          {
            key: 'Authorization',
            value: 'my other custom header value',
          },
        ],
      },
    ]
  },
}