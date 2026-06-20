/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  staticPageGenerationTimeout: 120,
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
