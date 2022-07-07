import { Fragment } from 'react';
import Head from 'next/head';
import ContactPage from '../components/ContactPage/ContactPage';

export default function Contact() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact Me" />
      </Head>
      <main>
        <ContactPage />
      </main>
    </Fragment>
  );
}
