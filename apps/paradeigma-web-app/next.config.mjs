import withRoutes from 'nextjs-routes/config';

/** 
 * @type {import('next').NextConfig}
 */
const config = {
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
                    value: `
                        default-src 'self' https://paradeigma-web-app*.vercel.app;
                        font-src 'self' https://fonts.google.com;
                    `.replace(/\s{2,}/g, ' ').trim() // Replace new lines by spaces
                }
            ]
        }];
    }
}

export default withRoutes({ outDir: 'types' })(config);