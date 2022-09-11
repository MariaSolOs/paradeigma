/**
 * @type {import('next').NextConfig} 
 */
module.exports = {
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