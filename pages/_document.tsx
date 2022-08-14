import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from "next/document";
import { Fragment } from "react";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
    //So that styled-components are server side rendered
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            let key = 0;
            return {
                ...initialProps,
                styles: [
                    // A random hardcoded key stops the warning in console
                    <Fragment key={key++}>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </Fragment>,
                ],
            };
        } finally {
            sheet.seal();
        }
    }
    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head></Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
