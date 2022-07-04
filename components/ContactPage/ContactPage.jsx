import { ParallaxBanner } from 'react-scroll-parallax';
import { Fragment } from 'react';
import ContactForm from './ContactForm';

import classes from './ContactPage.module.css';

export default function ContactPage() {
  return (
    <Fragment>
      <section className={classes.flex}>
        <div className={classes.left}>
          <h1 className={classes.title}>Get In Touch!</h1>
          <ContactForm />
        </div>
        <ParallaxBanner
          layers={[{ image: '/joy/joy5.webp', speed: -50 }]}
          className={classes.banner}
        />
      </section>
      <ParallaxBanner
        layers={[{ image: '/joy/joy5.webp', speed: -40 }]}
        className={classes.mobile}
      />
    </Fragment>
  );
}
