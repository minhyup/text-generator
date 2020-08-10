import React from "react";
import Head from "next/head";
import "@/styles/globals.css";
import "antd/dist/antd.css";

//! page app에 루트
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf8" />
        <title>app 타이틀</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
