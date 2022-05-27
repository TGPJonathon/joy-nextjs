import { ParallaxBanner } from 'react-scroll-parallax';

import classes from './Parallax.module.css';

export default function Parallax() {
  return (
    <section className={classes.top}>
      <ParallaxBanner
        layers={[{ image: '/joy-picture.jpg', speed: -50 }]}
        className={classes.banner}
      />
      <div className={classes.test}>
        <h1 className={classes.text}>Events</h1>
      </div>
    </section>
  );
}
