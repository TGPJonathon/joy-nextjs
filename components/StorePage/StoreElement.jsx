import Image from 'next/image';

import classes from './StoreElement.module.css';

export default function StoreElement({ image, title, price }) {
  return (
    <section className={classes.store_element}>
      <div className={classes.image}>
        <Image src={image} alt="test" height={800} width={800} />
      </div>
      <div className={classes.text}>
        <div className={classes.title}>{title}</div>
        <div className={classes.price}>{price}</div>
      </div>
    </section>
  );
}
