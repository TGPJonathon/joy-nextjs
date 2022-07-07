import Head from 'next/head';
import { Fragment } from 'react';
import Content from '../components/AboutPage/Content/Content';

export default function About() {
  return (
    <Fragment>
      <Head>
        <title>About Joy</title>
        <meta name="description" content="Learn more about me!" />
      </Head>
      <main>
        <Content />
      </main>
    </Fragment>
  );
}
