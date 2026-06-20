export default function robots() {
  const base = "https://www.greenpointms.com";
  const block = ["/api/", "/_next/"];
  return {
    rules: [
      // Traditional search engines (also feed AI: Bing -> Copilot/ChatGPT Search, Google -> AI Overviews/Gemini)
      { userAgent: ["Googlebot", "Bingbot"], allow: "/", disallow: block },

      // AI / LLM crawlers — explicitly welcomed so our pages can be crawled and cited in AI search
      { userAgent: ["GPTBot", "ChatGPT-User", "OAI-SearchBot"], allow: "/", disallow: block }, // OpenAI
      { userAgent: ["ClaudeBot", "Claude-User", "Claude-SearchBot", "Claude-Web", "anthropic-ai"], allow: "/", disallow: block }, // Anthropic
      { userAgent: ["PerplexityBot", "Perplexity-User"], allow: "/", disallow: block }, // Perplexity
      { userAgent: ["Google-Extended", "Applebot-Extended"], allow: "/", disallow: block }, // Google Gemini / Apple Intelligence
      { userAgent: ["Amazonbot", "Meta-ExternalAgent", "DuckAssistBot", "MistralAI-User", "cohere-ai", "CCBot"], allow: "/", disallow: block }, // other AI assistants & datasets

      // Abusive crawler that ignores robots.txt (symbolic here; real blocking needs server/WAF rules)
      { userAgent: "Bytespider", disallow: "/" },

      // Everyone else
      { userAgent: "*", allow: "/", disallow: block },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
