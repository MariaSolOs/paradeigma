import { withRoutes } from 'nextjs-routes/next-config.cjs';

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

export default withRoutes(config);