import { Fragment } from 'react';

import Carousel from '../../components/Carousel/Carousel';

import HeroComponent from '../../components/Hero/HeroComponent';

export default function Events() {
  //   const titles = [];
  const titles = [
    'Enjoy The Mic!',
    'Enjoy The Mic!',
    'Enjoy The Mic!',
    'Enjoy The Mic!',
  ];
  const cards = titles.map((title) => {
    return {
      attributes: {
        Title: title,
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero veniam corrupti consequuntur accusantium dolore vero voluptatibus deserunt excepturi obcaecati cupiditate! Deserunt natus veritatis sequi veniam atque quod minus! Modi, ab.',
        Time: '2022-12-21z2:30',
        location: '10000 Allentown Rd, Fort Washington MD, 20744',
      },
    };
  });

  return (
    <Fragment>
      <header style={{ height: '25vh' }}>
        <HeroComponent
          imageSrc="/stage-picture.jpg"
          alt="temp picture"
          pictureClass="background_picture_header"
          filter={true}
          title="Events"
        />
      </header>
      <main>
        <p
          style={{
            width: '100%',
            textAlign: 'center',
            fontSize: 'clamp(1rem, 1vw, 2rem)',
          }}
        >
          I currently have {titles.length} event
          {titles.length > 1 || titles.length == 0 ? 's' : ''} coming up!
        </p>
        {titles.length == 0 && <p>Check back here for new events!</p>}
        {titles.length > 1 && <Carousel Cards={cards} />}
      </main>
    </Fragment>
  );
}
