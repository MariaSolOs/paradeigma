import withRoutes from 'nextjs-routes/config';

/** 
 * @type {import('next').NextConfig}
 */
const config = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        externalDir: true
    }
}

export default withRoutes({ outDir: 'types' })(config);