import '../styles/globals.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useState } from 'react';
import AppContext from '../AppContext';

import Layout from '../components/layout/Layout/Layout';

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  return (
    <ParallaxProvider>
      <AppContext.Provider
        value={{
          cart: cart,
          setCart: setCart,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContext.Provider>
    </ParallaxProvider>
  );
}

export default MyApp;
