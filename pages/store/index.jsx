import { Fragment, useContext } from 'react';
import AppContext from '../../AppContext';
import Container from '../../components/Containers/Container';
import Link from 'next/link';

import HeroComponent from '../../components/Hero/HeroComponent';
import StoreElement from '../../components/StorePage/StoreElement';

export default function Store() {
  const value = useContext(AppContext);

  //Replace with actual store items from database
  const array = [1, 2, 3, 4];

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
          {array.map((items, index) => {
            return (
              <Link key={index} href={`/store/${index}`}>
                <a>
                  <StoreElement />
                </a>
              </Link>
            );
          })}
        </Container>
      </main>
    </Fragment>
  );
}
