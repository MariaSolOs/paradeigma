import { nextSafe, csp, strictDynamic, strictInlineStyles, chainMatch, isPageRequest } from '@next-safe/middleware';
import type { ChainableMiddleware } from '@next-safe/middleware';

const isDev = process.env['VERCEL_ENV'] === 'development';

const securityMiddleware: ChainableMiddleware[] = [
    nextSafe({ disableCsp: true, isDev }),
    csp({
        directives: {
            'font-src': ['self', 'https://fonts.gstatic.com', 'https://cdn.jsdelivr.net'],
            'style-src': ['self', 'https://fonts.googleapis.com', 'https://cdn.jsdelivr.net'],
            'connect-src': ['self', isDev ? 'localhost:4000' : 'https://paradeigma-apollo-app.vercel.app'],
            'worker-src': ['self', 'blob:']
        },
        isDev,
        // TODO: Remove this once I figure out the inline styles thing
        reportOnly: true
    }),
    strictDynamic(),
    strictInlineStyles()
];

export default chainMatch(isPageRequest)(...securityMiddleware);
