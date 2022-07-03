import { Fragment } from 'react';

import Container from '../../components/Containers/Container';
import Link from 'next/link';

import StoreElement from '../../components/StorePage/StoreElement';
import Content from './Content';

export default function Store({ items }) {
  const { data } = items;
  console.log(data);

  return (
    <Fragment>
      <Content />
      {/* <Container style="grid">
        {data.map((item, index) => {
          const { attributes } = item;
          return (
            <Link key={index} href={`/store/${item.id}`}>
              <a>
                <StoreElement
                  // image={`${attributes.Image.data.attributes.url}`}
                  // title={attributes.Name}
                  // price={`$${attributes.Price}`}
                  image={item.image}
                  title={item.title}
                  price={`$${item.price}`}
                />
              </a>
            </Link>
          );
        })}
      </Container> */}
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
      },
      {
        image: '/book1.webp',
        title: 'Growing Pains: Clean Version',
        price: '9.99',
      },
    ],
  };

  return {
    props: {
      items,
    },
  };
}
