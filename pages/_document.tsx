import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head >
            <link
            href='/fonts/Caudex-Bold.ttf'
            rel='prefetch'
            as='font'
            crossOrigin='anonymous'
          />
          <link
            href='/fonts/Caudex-Regular.ttf'
            rel='prefetch'
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
