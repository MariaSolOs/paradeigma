import createEmotionCache from 'styles/emotion-cache';
import theme from 'styles/theme';
import routes from 'routes';
import type { AppEmotionProps } from 'next/app';
import type { BreadcrumbsProps } from 'components/Breadcrumbs';

import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import Breadcrumbs from 'components/Breadcrumbs';
import ParadigmTitle from 'components/ParadigmTitle';

const clientCache = createEmotionCache();

const navigationLinks: BreadcrumbsProps['links'] = [
    { ...routes.home, title: 'Home' },
    { ...routes.searchSnippets, title: 'Search' },
    { ...routes.newSnippet, title: 'New snippet' }
];

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
                <ParadigmTitle />
                <Breadcrumbs links={navigationLinks} />
                <Component { ...pageProps } />
            </ThemeProvider>
        </CacheProvider>
    );
}

export default App;