import { MantineProvider } from '@mantine/core';
import { cache } from 'lib/styles';
import theme from 'theme';
import { NotificationsProvider } from '@mantine/notifications';
import type { AppProps } from 'next/app';

import Head from 'next/head';
import ParadeigmaTitle from 'components/ParadeigmaTitle';
import NavigationBreadcrumbs from 'components/NavigationBreadcrumbs';

// TODO: Add Head component with page info
const App = (props: AppProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- pageProps can be any
    const { Component, pageProps } = props;

    return (
        <>
            <Head>
                {/* This viewport tag needs to be here, not in _document.tsx */}
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <MantineProvider withGlobalStyles withNormalizeCSS emotionCache={cache} theme={theme}>
                <NotificationsProvider position="top-right">
                    <ParadeigmaTitle />
                    <NavigationBreadcrumbs />
                    <Component {...pageProps} />
                </NotificationsProvider>
            </MantineProvider>
        </>
    );
};

export default App;
