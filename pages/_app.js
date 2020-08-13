import React from "react";
import Head from "next/head";
import "@/styles/globals.css";
import "antd/dist/antd.css";
import { ConnectedRouter } from "connected-next-router";

import wrapper from "@/store/storeConfig";
//import wrapper from "../store/storeConfig";

//! page app에 루트
const MyApp = ({ Component, pageProps }) => {
  return (
    <ConnectedRouter>
      <Head>
        <meta charSet="utf8" />
        <title>app 타이틀</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ConnectedRouter>
  );
};

export default wrapper.withRedux(MyApp);
