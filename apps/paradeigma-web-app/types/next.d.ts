import type { AppProps } from 'next/app';
import type { EmotionCache } from '@emotion/react';

declare module 'next/app' {
    type AppEmotionProps = AppProps<{ nonce?: string | undefined; }> & {
        emotionCache?: EmotionCache;
    }
}