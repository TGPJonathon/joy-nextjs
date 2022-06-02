import { ParallaxBanner } from 'react-scroll-parallax';

import classes from './Parallax.module.css';

export default function Parallax({ image, text }) {
  return (
    <section className={classes.top}>
      <ParallaxBanner
        layers={[{ image: image, speed: -50 }]}
        className={classes.banner}
      />
      <div className={classes.test}>
        <h1 className={classes.text}>{text}</h1>
      </div>
    </section>
  );
}
