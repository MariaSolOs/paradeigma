/**
 * @type {import('next').NextConfig} 
 */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        externalDir: true
    },
    async redirects() {
        return [
            {
                // Redirect all requests to /api/graphql
                source: '/:path((?!api/graphql$).*)*',
                destination: '/api/graphql',
                permanent: true
            }
        ];
    }
}

module.exports = nextConfig
