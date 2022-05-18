import { Carousel as Loop } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Card from '../Card/Card';

import classes from './Carousel.module.css';

export default function Carousel({ Cards }) {
  console.log(Cards);
  return (
    <section className={classes.carousel}>
      <Loop
        width="100%"
        autoPlay
        infiniteLoop
        showArrows={true}
        showThumbs={false}
      >
        {Cards &&
          Cards.map((card, index) => (
            <div key={index}>
              <Card
                title={card.attributes.Title}
                date={card.attributes.Time}
                time={card.attributes.Time}
              />
            </div>
          ))}
      </Loop>
    </section>
  );
}
