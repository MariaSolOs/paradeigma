import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import createEmotionCache, { INSERTION_POINT_NAME } from 'styles/emotion-cache';
import createEmotionServer from '@emotion/server/create-instance';

export default class CustomDocument extends Document {
    static async getInitialProps(context: DocumentContext): Promise<DocumentInitialProps & { emotionStyleTags: JSX.Element[] }> {
        const originalRenderPage = context.renderPage;

        const cache = createEmotionCache();
        const { extractCriticalToChunks } = createEmotionServer(cache);

        context.renderPage = () => originalRenderPage({
            enhanceApp: (App: any) => function EnhanceApp(props) {
                return <App emotionCache={cache} { ...props } />;
            }
        });

        const initialProps = await Document.getInitialProps(context);

        // This is important. It prevents emotion from rendering invalid HTML.
        const emotionStyles = extractCriticalToChunks(initialProps.html);
        const emotionStyleTags = emotionStyles.styles.map((style) => (
            <style 
            key={style.key}
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            dangerouslySetInnerHTML={{ __html: style.css }} />
        ));

        return {
            ...initialProps,
            emotionStyleTags
        }
    }

    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    {/* TODO: Add PWA stuff */}

                    {/* Google fonts */}
                    <link href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=PT+Mono&display=swap" rel="stylesheet" />
                    
                    <meta name={`"${INSERTION_POINT_NAME}"`} content="" />
                    {(this.props as any).emotionStyleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}