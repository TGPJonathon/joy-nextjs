import { Fragment } from 'react';
import Head from 'next/head';
import Header from '../../components/StorePage/Header.jsx';
import StoreItems from '../../components/StorePage/StoreItems';

export default function Store({ items }) {
  const { data } = items;

  return (
    <Fragment>
      <Head>
        <title>Merch</title>
        <meta name="description" content="Are you ready to buy?" />
      </Head>
      <Header numItems={'all'} />
      <StoreItems items={data} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const result = await fetch(
    'https://api.joyangelica.com/api/stores?populate=*'
  );
  const items = await result.json();

  return {
    props: {
      items,
    },
  };
}
