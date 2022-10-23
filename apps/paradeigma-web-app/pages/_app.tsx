import { UiContextProvider } from 'context/uiContext';
import dynamic from 'next/dynamic';
import createEmotionCache from 'styles/emotion-cache';
import theme from 'styles/theme';
import type { AppEmotionProps } from 'next/app';

import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import NavigationBreadcrumbs from 'components/NavigationBreadcrumbs';
import ParadeigmaTitle from 'components/ParadeigmaTitle';

const Snackbar = dynamic(() => import('components/Snackbar'));

// TODO: Add Head component with page info
const App = (props: AppEmotionProps) => {
    const { Component, pageProps, emotionCache = createEmotionCache(pageProps.nonce) } = props;

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                {/* This viewport tag needs to be here, not in _document.tsx */}
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <UiContextProvider>
                    <Snackbar />
                    <ParadeigmaTitle />
                    <NavigationBreadcrumbs />
                    <Component {...pageProps} />
                </UiContextProvider>
            </ThemeProvider>
        </CacheProvider>
    );
};

export default App;
