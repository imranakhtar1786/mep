const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.poweronelectrotech.in",
          },
        ],
        destination: "https://poweronelectrotech.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;