import { Fragment } from 'react';
import Head from 'next/head';
import Hero from '../components/HomePage/Hero/Hero';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Joy Angelica</title>
        <meta name="description" content="Welcome to My Site!" />
      </Head>
      <Hero />
    </Fragment>
  );
}
