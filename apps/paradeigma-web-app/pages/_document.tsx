import Document, { Html, Main, DocumentContext, DocumentInitialProps } from 'next/document';
import { getCspInitialProps, provideComponents } from '@next-safe/middleware/dist/document';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache, { INSERTION_POINT_NAME } from 'styles/emotion-cache';

export default class CustomDocument extends Document {
    static override async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const originalRenderPage = ctx.renderPage;

        const cache = createEmotionCache();
        // eslint-disable-next-line @typescript-eslint/unbound-method
        const { extractCritical, extractCriticalToChunks } = createEmotionServer(cache);

        ctx.renderPage = () =>
            originalRenderPage({
                // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Easily add the emotion cache
                enhanceApp: (App: any) =>
                    function EnhanceApp(props) {
                        return <App emotionCache={cache} {...props} />;
                    }
            });

        const initialProps = await getCspInitialProps({
            ctx,
            trustifyStyles: true,
            trustifyScripts: true,
            hashRawCss: [
                ({ html }) => [extractCritical(html).css, ...extractCriticalToChunks(html).styles.map(({ css }) => css)]
            ]
        });

        return initialProps;
    }

    override render(): JSX.Element {
        const { Head, NextScript } = provideComponents(this.props);

        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="author" content="Maria Solano" />

                    {/* PWA stuff */}
                    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
                    <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#1C2541" />
                    <meta name="msapplication-TileColor" content="#FFFFFF" />
                    <meta name="theme-color" content="#FFFFFF" />
                    <link rel="manifest" href="/manifest.json" />

                    {/* Google fonts */}
                    <link
                        href="https://fonts.googleapis.com/css2?family=Bungee&family=Bungee+Shade&family=PT+Mono&display=swap"
                        rel="stylesheet"
                    />

                    {/* Programming language icons */}
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
                    />

                    <meta name={`"${INSERTION_POINT_NAME as string}"`} content="" />
                    {this.props.styles}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
