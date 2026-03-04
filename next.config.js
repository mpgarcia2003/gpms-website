/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  async rewrites() {
    return {
      // These rewrites run after all pages/routes are checked
      fallback: [
        // Proxy /blog requests to WordPress on SiteGround
        {
          source: '/blog',
          destination: 'https://wp.greenpointms.com/blog',
        },
        {
          source: '/blog/:path*',
          destination: 'https://wp.greenpointms.com/blog/:path*',
        },
        // WordPress assets (themes, uploads, plugins)
        {
          source: '/wp-content/:path*',
          destination: 'https://wp.greenpointms.com/wp-content/:path*',
        },
        {
          source: '/wp-includes/:path*',
          destination: 'https://wp.greenpointms.com/wp-includes/:path*',
        },
        {
          source: '/wp-admin/:path*',
          destination: 'https://wp.greenpointms.com/wp-admin/:path*',
        },
      ],
    };
  },
};

module.exports = nextConfig;
