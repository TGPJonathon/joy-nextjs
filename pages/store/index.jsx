import { Fragment } from 'react';

import Container from '../../components/Containers/Container';
import Link from 'next/link';

import HeroComponent from '../../components/Hero/HeroComponent';
import StoreElement from '../../components/StorePage/StoreElement';

export default function Store({ items }) {
  const { data } = items;

  return (
    <Fragment>
      <header style={{ height: '25vh' }}>
        <HeroComponent
          imageSrc="/temp-contact.jpg"
          alt="temp picture"
          pictureClass="background_picture_header"
          filter={true}
          title="Merch"
        />
      </header>
      <main
        style={{
          display: 'flex',
          // backgroundColor: '#d7a86e',
          justifyContent: 'center',
        }}
      >
        <Container style="grid">
          {data.map((item, index) => {
            const { attributes } = item;
            return (
              <Link key={index} href={`/store/${item.id}`}>
                <a>
                  <StoreElement
                    image={`http://localhost:1337${attributes.Image.data.attributes.url}`}
                    title={attributes.Name}
                    price={`$${attributes.Price}`}
                  />
                </a>
              </Link>
            );
          })}
        </Container>
      </main>
    </Fragment>
  );
}

export async function getStaticProps() {
  const result = await fetch('http://localhost:1337/api/stores?populate=*');
  const items = await result.json();

  return {
    props: {
      items,
    },
  };
}
