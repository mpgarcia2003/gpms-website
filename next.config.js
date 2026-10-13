/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  staticPageGenerationTimeout: 120,
  async redirects() {
    // Legacy Wix routes still indexed/bookmarked -> current destinations
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/about-us", destination: "/#about", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/contact-us", destination: "/#contact", permanent: true },
      { source: "/services", destination: "/#services", permanent: true },
      { source: "/industries", destination: "/#industries", permanent: true },
      { source: "/privacy-policy", destination: "/terms-of-service", permanent: true },
      { source: "/privacy", destination: "/terms-of-service", permanent: true },
      { source: "/terms", destination: "/terms-of-service", permanent: true },
      { source: "/quote", destination: "/#quote", permanent: true },
      { source: "/get-a-quote", destination: "/#quote", permanent: true },
      { source: "/janitrack", destination: "/#stockpoint", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/GreenPoint_Eligibility_Packet_FILLABLE.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="GreenPoint_Eligibility_Packet_FILLABLE.pdf"',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
