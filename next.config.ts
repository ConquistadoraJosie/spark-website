import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `$var: red;`
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
