import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { createStylesServer, ServerStyles } from '@mantine/next';
import { cache } from 'lib/styles';
import type { DocumentInitialProps } from 'next/document';

const stylesServer = createStylesServer(cache);

export default class CustomDocument extends Document {
    static override async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    <ServerStyles html={initialProps.html} server={stylesServer} />
                </>
            )
        };
    }

    override render(): JSX.Element {
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
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
