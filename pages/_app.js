import React from "react";
import Head from "next/head";
import "../styles/globals.css";

//! page app에 루트
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf8" />
        <title>타이틀</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
