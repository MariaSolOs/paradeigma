import { MantineProvider } from '@mantine/core';
import cache from 'styles/emotion-cache';
import { UiContextProvider } from 'context/uiContext';
import type { AppProps } from 'next/app';

import Head from 'next/head';

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
            <MantineProvider withGlobalStyles withNormalizeCSS emotionCache={cache}>
                <UiContextProvider>
                    <Component {...pageProps} />
                </UiContextProvider>
            </MantineProvider>
        </>
    );
};

export default App;

// import dynamic from 'next/dynamic';
// // import theme from 'styles/theme';

// // import NavigationBreadcrumbs from 'components/NavigationBreadcrumbs';
// // import ParadeigmaTitle from 'components/ParadeigmaTitle';

// // const Snackbar = dynamic(() => import('components/Snackbar'));

// const App = (props: AppEmotionProps) => {
//     return (
//         <>
//             <ThemeProvider theme={theme}>
//                     <Snackbar />
//                     <ParadeigmaTitle />
//                     <NavigationBreadcrumbs />
//             </ThemeProvider>
//         </>
//     );
// };
