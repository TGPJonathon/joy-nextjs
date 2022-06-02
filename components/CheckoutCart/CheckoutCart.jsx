import Cart from '../../public/icons/cart.svg';

import classes from './CheckoutCart.module.css';

export default function CheckoutCart({ quantity }) {
  return (
    <div>
      <div className={classes.quantity}>{quantity}</div>
      <Cart />
    </div>
  );
}
