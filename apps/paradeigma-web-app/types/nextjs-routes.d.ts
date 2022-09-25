declare module 'nextjs-routes/next-config.cjs' {
    import type { NextConfig } from 'next';

    export function withRoutes(nextConfig: NextConfig): NextConfig;
}