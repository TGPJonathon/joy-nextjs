import Image from 'next/image';

import classes from './Recent.module.css';

export default function Recent() {
  return (
    <section className={classes.post}>
      <div className={classes.image}>
        <Image src="/test-picture3.jpg" alt="test" height={150} width={250} />
      </div>
      <h4>Interview with Gang</h4>
    </section>
  );
}
