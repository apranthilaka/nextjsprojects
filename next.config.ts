// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,

// };

// export default nextConfig;

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
