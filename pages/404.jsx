import Head from 'next/head';
import { Fragment } from 'react';
import ForOhFor from '../components/404/ForOhFor';

export default function Custom404() {
  return (
    <Fragment>
      <Head>
        <title>You&apos;re Lost</title>
        <meta name="description" content="We can all be lost sometimes" />
      </Head>
      <ForOhFor />
    </Fragment>
  );
}
