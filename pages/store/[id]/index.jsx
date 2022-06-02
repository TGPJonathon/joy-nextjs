import { Fragment } from 'react';
import HeroComponent from '../../../components/Hero/HeroComponent';
import ItemPage from '../../../components/StorePage/ItemPage';

export default function Store() {
  return (
    <Fragment>
      {/* <header style={{ height: '25vh' }}>
        <HeroComponent
          imageSrc="/temp-contact.jpg"
          alt="temp picture"
          pictureClass="background_picture_header"
          filter={true}
          title="Merch"
        />
      </header> */}
      <main>
        <ItemPage />
      </main>
    </Fragment>
  );
}
