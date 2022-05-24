import Image from 'next/image';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

import classes from './ContactPage.module.css';

export default function ContactPage() {
  return (
    <section>
      <h2 className={classes.title}>Get In Touch</h2>
      <section>
        <div className={classes.flex + ' ' + classes.top}>
          <Image src="/test-picture3.jpg" alt="test" height={400} width={400} />
          <ContactForm />
        </div>
        <div className={classes.flex + ' ' + classes.bottom}>
          <ContactInfo />
          <div className={classes.mobile}>
            <Image
              src="/test-picture3.jpg"
              alt="test"
              height={400}
              width={400}
            />
          </div>
        </div>
      </section>
    </section>
  );
}
