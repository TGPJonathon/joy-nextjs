import Image from 'next/image';

import classes from './ContactBar.module.css';

export default function ContactBar() {
  return (
    <section className={classes.contact}>
      <div className={classes.image_wrapper}>
        {/* <Image
          src="/test-picture3.jpg"
          alt="test"
          layout="fill"
          objectFit="cover"
          quality={100}
        /> */}
        <div className={classes.text}>Overlay stuff goes here</div>
      </div>
    </section>
  );
}
