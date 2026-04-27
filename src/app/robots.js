export default function robots() {
  return {
    rules: [
      // Traditional search engines
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },

      // AI / LLM crawlers — explicitly welcomed
      // These bots cite content in AI-assisted search results.
      {
        userAgent: 'GPTBot', // OpenAI
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'ChatGPT-User', // OpenAI on-demand fetcher
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'OAI-SearchBot', // OpenAI search index
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'ClaudeBot', // Anthropic
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'Claude-Web', // Anthropic on-demand
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'PerplexityBot', // Perplexity
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'Perplexity-User', // Perplexity on-demand
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'Google-Extended', // Google Gemini training
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'CCBot', // Common Crawl (used by many LLMs)
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'cohere-ai',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },

      // Catch-all for any other crawler
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://greenpointms.com/sitemap.xml',
    host: 'https://greenpointms.com',
  };
}
