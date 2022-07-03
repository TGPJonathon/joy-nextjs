import { Fragment } from 'react';
import Header from '../../components/StorePage/Header.jsx';
import StoreItems from '../../components/StorePage/StoreItems';

export default function Store({ items }) {
  const { data } = items;
  console.log(data);

  return (
    <Fragment>
      <Header />
      <StoreItems items={data} />
    </Fragment>
  );
}

export async function getStaticProps() {
  // const result = await fetch(
  //   'https://api.joyangelica.com/api/stores?populate=*'
  // );
  // const items = await result.json();

  const items = {
    data: [
      {
        image: '/book1.webp',
        title: 'Growing Pains: Clean Version',
        price: '9.99',
        id: 1,
      },
      {
        image: '/book1.webp',
        title: 'Growing Pains: Clean Version',
        price: '9.99',
        id: 2,
      },
    ],
  };

  return {
    props: {
      items,
    },
  };
}
