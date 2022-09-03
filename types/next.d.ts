import * as NextApp from 'next/app';
import type { EmotionCache } from '@emotion/react';

declare module 'next/app' {
    type AppEmotionProps = NextApp.AppProps & {
        emotionCache?: EmotionCache;
    }
}