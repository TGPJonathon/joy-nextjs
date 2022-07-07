import { Fragment } from 'react';
import Head from 'next/head';
import Gallery from '../components/Gallery/Gallery';
import Header from '../components/MediaPage/Header';
import Videos from '../components/MediaPage/Videos';

export default function Media() {
  return (
    <Fragment>
      <Head>
        <title>Media</title>
        <meta name="description" content="Look at fun stuff" />
      </Head>
      <Header />
      <Videos />
      <Gallery />
    </Fragment>
  );
}
