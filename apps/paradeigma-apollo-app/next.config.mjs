/**
 * @type {import('next').NextConfig}
 */
export default {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        externalDir: true
    },
    // eslint-disable-next-line @typescript-eslint/require-await
    async redirects() {
        return [{
            // Redirect all requests to /api/graphql, except for the GraphQL
            // endpoint itself and the task API routes.
            source: '/:path((?!api/graphql$|api/tasks/.*).*)',
            destination: '/api/graphql',
            permanent: true
        }];
    }
}