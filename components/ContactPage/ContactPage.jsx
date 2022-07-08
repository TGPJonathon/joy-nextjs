import { Fragment, useState } from 'react';
import Image from 'next/image';
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
        <div className={classes.image}>
          <Image
            src="https://d2dw0u3k29fc6y.cloudfront.net/joy5.webp"
            height={2000}
            width={2000}
            alt="Joy sitting on couch"
            priority={true}
          />
        </div>
      </section>
      {emailSent && <MessageSent />}
    </Fragment>
  );
}
