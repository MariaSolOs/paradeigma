import { chainMatch, csp, isPageRequest, nextSafe, strictDynamic, strictInlineStyles } from '@next-safe/middleware';
import type { ChainableMiddleware } from '@next-safe/middleware';

const isDev = process.env['VERCEL_ENV'] === 'development';

const securityMiddleware: ChainableMiddleware[] = [
    nextSafe({ isDev, disableCsp: true }),
    csp({
        isDev,
        directives: {
            'font-src': ['self', 'https://fonts.gstatic.com', 'https://cdn.jsdelivr.net'],
            'style-src': ['self', 'unsafe-inline', 'https://fonts.googleapis.com', 'https://cdn.jsdelivr.net'],
            'connect-src': ['self', isDev ? 'localhost:4000' : 'https://paradeigma-apollo-app.vercel.app'],
            'worker-src': ['self', 'blob:']
        },
        reportOnly: isDev
    }),
    strictDynamic(),
    strictInlineStyles()
];

export default chainMatch(isPageRequest)(...securityMiddleware);
