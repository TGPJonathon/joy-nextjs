import '../styles/globals.css';
import { useState } from 'react';
import Head from 'next/head';

import AppContext from '../AppContext';

import Layout from '../components/layout/Layout/Layout';

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});

  return (
    <AppContext.Provider
      value={{
        cart: cart,
        setCart: setCart,
      }}
    >
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
