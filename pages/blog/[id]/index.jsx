import { Fragment } from 'react';

import HeroComponent from '../../../components/Hero/HeroComponent';

export default function Blog() {
  return (
    <Fragment>
      <header style={{ height: '25vh' }}>
        <HeroComponent
          imageSrc="/temp-blog.jpg"
          alt="temp picture"
          pictureClass="background_picture_header"
          filter={true}
          title="Blog"
        />
      </header>
      <main>WE ARE HEREEEEEEEEEEEEEEEEEEEEE</main>
    </Fragment>
  );
}
