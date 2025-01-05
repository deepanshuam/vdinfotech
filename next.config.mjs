
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['bebran.com'],
        remotePatterns: [
            {
                hostname: "images.unsplash.com",
                protocol: "https"
            }
        ]
    }
}

export default nextConfig;
// next.config.js
