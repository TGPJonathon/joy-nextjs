import Image from 'next/image';

import classes from './ItemCart.module.css';

export default function ItemCart() {
  return (
    <div className={classes.middle__left}>
      <div className={classes.image}>
        <Image src="/book1.webp" alt="test" height={200} width={200} />
      </div>
      <div className={classes.content}>
        <div className={classes.left_side}>
          <p>Name of Item</p>
          <p className={classes.remove}>Remove</p>
        </div>

        <select
          className={classes.select}
          defaultValue="gang"
          name="quantity"
          id="quantity"
        >
          <option value="free">Free</option>
          <option value="gang">Gang</option>
        </select>
        <p className={classes.price}>$9.99</p>
      </div>
    </div>
  );
}
