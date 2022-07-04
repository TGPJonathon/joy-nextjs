import { Fragment } from 'react';
import Header from '../../components/StorePage/Header.jsx';
import StoreItems from '../../components/StorePage/StoreItems';

export default function Store({ items }) {
  const { data } = items;

  return (
    <Fragment>
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
