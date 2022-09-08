import type { AppProps } from 'next/app';
import type { EmotionCache } from '@emotion/react';

declare module 'next/app' {
    type AppEmotionProps = AppProps & {
        emotionCache?: EmotionCache;
    }
}