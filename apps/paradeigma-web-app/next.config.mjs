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
    eslint: {
        // TODO: Add a hook that lints locally.
        ignoreDuringBuilds: true
    }
}

export default withRoutes({ outDir: 'types' })(config);