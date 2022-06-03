import Cart from '../../public/icons/cart.svg';

import classes from './CheckoutCart.module.css';

export default function CheckoutCart({ quantity, mobile }) {
  return (
    <div>
      <div className={classes.quantity}>{quantity}</div>
      {!mobile && <Cart />}
    </div>
  );
}
