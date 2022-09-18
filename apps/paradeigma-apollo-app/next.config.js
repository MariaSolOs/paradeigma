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
                // Redirect all requests to /api/graphql, except for the GraphQL 
                // endpoint itself and the task API routes.
                source: '/:path((?!api/graphql$|api/tasks/.*).*)',
                destination: '/api/graphql',
                permanent: true
            }
        ];
    }
}