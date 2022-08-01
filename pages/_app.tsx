import createEmotionCache from 'styles/emotion-cache';
import theme from 'styles/theme';
import type { AppProps as NextAppProps } from 'next/app';
import type { EmotionCache } from '@emotion/react';

import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import Layout from 'components/Layout';

const clientCache = createEmotionCache();

type AppProps = NextAppProps & {
    emotionCache?: EmotionCache;
}

const App = (props: AppProps) => {
    const { Component, emotionCache = clientCache, pageProps } = props;

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                {/* This viewport tag needs to be here, not in _document.tsx */}
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Layout>
                    <Component { ...pageProps } />
                </Layout>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default App;