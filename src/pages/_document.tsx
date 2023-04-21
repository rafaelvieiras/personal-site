/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// Next.js _document.tsx

import Document, { Html, Head, Main, NextScript } from "next/document";
import { montserrat, roboto, ubuntu } from "../shared/libs/fonts";
import { FB_PIXEL_ID } from "../shared/libs/fpixel";

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
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
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
