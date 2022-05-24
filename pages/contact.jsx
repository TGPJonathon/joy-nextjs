import { Fragment } from 'react';
import ContactPage from '../components/ContactPage/ContactPage';

import HeroComponent from '../components/Hero/HeroComponent';

export default function Contact() {
  return (
    <Fragment>
      <header style={{ height: '25vh' }}>
        <HeroComponent
          imageSrc="/temp-contact.jpg"
          alt="temp picture"
          pictureClass="background_picture_header"
          filter={true}
          title="Contact"
        />
      </header>
      <main style={{ margin: '0 20%' }}>
        <ContactPage />
      </main>
    </Fragment>
  );
}
