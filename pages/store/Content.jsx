import Image from 'next/image';

import classes from './Content.module.css';

export default function Content() {
  return (
    <section className={classes.header}>
      <div className={classes.flex}>
        <div className={classes.image1}>
          <Image
            src="/joy/joy_malcolm.jpg"
            alt="temp"
            height={1500}
            width={1500}
          />
        </div>
        <div className={classes.image2}>
          <Image
            src="/joy/joy_reading.jpg"
            alt="temp"
            height={1500}
            width={1500}
          />
        </div>
      </div>
    </section>
  );
}
