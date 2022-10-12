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
    async headers() {
        return [{
            source: '/:path*',
            headers: [
                {
                    key: 'Strict-Transport-Security',
                    // max-age is set to 2 years (Vercel's default)
                    value: 'max-age=63072000; includeSubDomains; preload'
                },
                {
                    key: 'Referrer-Policy',
                    value: 'strict-origin-when-cross-origin'
                },
                {
                    key: 'X-Content-Type-Options',
                    value: 'nosniff'
                },
                {
                    key: 'Content-Security-Policy',
                    value: "default-src 'self'"
                }
            ]
        }];
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