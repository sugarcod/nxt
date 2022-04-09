
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import React from 'react';
import '../styles/globals.css';

function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return <React.Fragment>
          <Head>
            <title> App loop</title>
            
          </Head>
          <Component {...pageProps} />
        </React.Fragment>;
}

export default MyApp;