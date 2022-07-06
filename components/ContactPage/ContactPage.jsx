import { ParallaxBanner } from 'react-scroll-parallax';
import { Fragment, useState } from 'react';
import ContactForm from './ContactForm';

import classes from './ContactPage.module.css';
import MessageSent from './MessageSent';

export default function ContactPage() {
  const [emailSent, setEmailSent] = useState(false);

  const tryEmail = (statusCode) => {
    if (statusCode) setEmailSent(true);

    setTimeout(() => {
      setEmailSent(false);
    }, 2000);
  };

  return (
    <Fragment>
      <section className={classes.flex}>
        <div className={classes.left}>
          <h1 className={classes.title}>Get In Touch!</h1>
          <ContactForm tryEmail={tryEmail} />
        </div>
        <ParallaxBanner
          layers={[
            {
              image: 'https://strapi-joy.s3.amazonaws.com/joy5.webp',
              speed: -50,
            },
          ]}
          className={classes.banner}
        />
      </section>
      <ParallaxBanner
        layers={[
          {
            image: 'https://strapi-joy.s3.amazonaws.com/joy5.webp',
            speed: -40,
          },
        ]}
        className={classes.mobile}
      />
      {emailSent && <MessageSent />}
    </Fragment>
  );
}
