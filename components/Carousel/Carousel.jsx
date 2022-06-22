import { Carousel as Loop } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import classes from './Carousel.module.css';

export default function Carousel({ Cards }) {
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
              ></a>
            </div>
          ))}
      </Loop>
    </section>
  );
}
