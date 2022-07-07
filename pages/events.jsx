import { Fragment } from 'react';
import Head from 'next/head';
import Content from '../components/EventPage/Content';

export default function Events() {
  return (
    <Fragment>
      <Head>
        <title>Events</title>
        <meta name="description" content="Come out to come see me!" />
      </Head>
      <main>
        <Content />
      </main>
    </Fragment>
  );
}
