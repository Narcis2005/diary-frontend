import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head >
            <link
            href='/font/Caudex-Bold.ttf'
            rel='preload'
            as='font'
            crossOrigin='anonymous'
          />
          <link
            href='/font/Caudex-Regular.ttf'
            rel='preload'
            as='font'
            crossOrigin='anonymous'
          />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
