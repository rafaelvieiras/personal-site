// Next.js _document.tsx

import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { montserrat, roboto, ubuntu } from "../shared/libs/fonts";

export default class MyDocument extends Document {
  render() {
    return (
      <Html className="scroll-smooth" data-theme="dark">
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff"></meta>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-SSY6S5VK3C"
            strategy="afterInteractive"
          ></Script>
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];function gtag(){window.dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-SSY6S5VK3C');`}
          </Script>
        </Head>
        <body
          className={`${roboto.variable} ${montserrat.variable} ${ubuntu.variable} p-3 sm:p-5 lg:p-0`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
