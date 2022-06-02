import { Fragment } from 'react';
import Gallery from '../components/Gallery/Gallery';

import HeroComponent from '../components/Hero/HeroComponent';
import Youtube from '../components/Youtube/Youtube';

export default function Media() {
  return (
    <Fragment>
      <header style={{ height: '25vh' }}>
        <HeroComponent
          imageSrc="/temp-contact2.jpg"
          alt="temp picture"
          pictureClass="background_picture_header"
          filter={true}
          title="Media"
        />
      </header>
      <main style={{ padding: '0 10%', backgroundColor: '#d7a86e' }}>
        <Youtube />
        <Gallery />
      </main>
    </Fragment>
  );
}
