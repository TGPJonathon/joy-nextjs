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
          layers={[{ image: '/test-picture3.jpg', speed: -50 }]}
          className={classes.banner}
        />
      </section>
      <ParallaxBanner
        layers={[{ image: '/test-picture3.jpg', speed: -50 }]}
        className={classes.mobile}
      />
    </Fragment>
  );
}
