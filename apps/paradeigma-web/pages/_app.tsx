import createEmotionCache from 'styles/emotion-cache';
import theme from 'styles/theme';
import type { AppEmotionProps } from 'next/app';

import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import NavigationBreadcrumbs from 'components/NavigationBreadcrumbs';
import ParadeigmaTitle from 'components/ParadeigmaTitle';

const clientCache = createEmotionCache();

// TODO: Add Head component
const App = (props: AppEmotionProps) => {
    const { Component, emotionCache = clientCache, pageProps } = props;

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                {/* This viewport tag needs to be here, not in _document.tsx */}
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ParadeigmaTitle />
                <NavigationBreadcrumbs />
                <Component { ...pageProps } />
            </ThemeProvider>
        </CacheProvider>
    );
}

export default App;