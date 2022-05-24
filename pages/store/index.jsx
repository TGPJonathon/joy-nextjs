import { Fragment } from 'react';

import HeroComponent from '../../components/Hero/HeroComponent';

export default function Store() {
  return (
    <Fragment>
      <header style={{ height: '25vh' }}>
        <HeroComponent
          imageSrc="/temp-contact.jpg"
          alt="temp picture"
          pictureClass="background_picture_header"
          filter={true}
          title="Store"
        />
      </header>
      <main style={{ margin: '0 10%' }}></main>
    </Fragment>
  );
}
