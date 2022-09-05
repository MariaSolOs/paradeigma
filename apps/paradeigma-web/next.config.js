const withTM = require('next-transpile-modules')([ '@paradeigma/paradeigma-graphql' ]);

/** 
 * @type {import('next').NextConfig} 
 */
const nextConfig = withTM({
    reactStrictMode: true,
    swcMinify: true
});

module.exports = nextConfig
