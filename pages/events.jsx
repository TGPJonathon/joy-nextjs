import { Fragment } from 'react';
import Past from '../components/EventPage/Events/Past';
import Upcoming from '../components/EventPage/Events/Upcoming';

import Parallax from '../components/EventPage/Parallax/Parallax';

export default function Events() {
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
      <main>
        <Parallax />
        <h2>Upcoming Events</h2>
        <Upcoming />
        {/* <Past /> */}
      </main>
    </Fragment>
  );
}
