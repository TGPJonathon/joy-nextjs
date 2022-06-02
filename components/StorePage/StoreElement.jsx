import Image from 'next/image';

import classes from './StoreElement.module.css';

export default function StoreElement() {
  return (
    <section className={classes.store_element}>
      <div className={classes.image}>
        <Image src="/book1.webp" alt="test" height={800} width={800} />
      </div>
      <div className={classes.text}>
        <div className={classes.title}>Growing Pains: Clean Version</div>
        <div className={classes.price}>$10.00</div>
      </div>
    </section>
  );
}
