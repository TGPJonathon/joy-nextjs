import Image from 'next/image';

import classes from './Content.module.css';
import ItemCart from './ItemCart';
import PaymentCard from './PaymentCard';

export default function Content({ cart, numItems }) {
  return (
    <section className={classes.pay}>
      <div className={classes.top}>
        <p className={classes.cart}>
          {numItems} item{numItems == 1 ? '' : <span>s</span>} in your cart
        </p>
        <p className={classes.store}>Back to Store</p>
      </div>
      <div className={classes.middle}>
        <div className={classes.flex}>
          <ItemCart />
          <ItemCart />
        </div>

        <PaymentCard />
      </div>
    </section>
  );
}
