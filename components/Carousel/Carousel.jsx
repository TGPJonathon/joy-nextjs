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
              <a
                target="_blank"
                href="https://eventbrite.com"
                rel="noopener noreferrer"
              >
                <Card
                  title={card.attributes.Title}
                  date={card.attributes.Time}
                  time={card.attributes.Time}
                  text={card.attributes.text}
                  location={card.attributes.location}
                />
              </a>
            </div>
          ))}
      </Loop>
    </section>
  );
}
