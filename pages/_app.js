import '../styles/globals.css';
import { ParallaxProvider } from 'react-scroll-parallax';

import Layout from '../components/layout/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </Layout>
  );
}

export default MyApp;
