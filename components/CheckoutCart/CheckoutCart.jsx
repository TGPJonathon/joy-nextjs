import Cart from '../../public/icons/cart.svg';

import classes from './CheckoutCart.module.css';

export default function CheckoutCart({ quantity, mobile, menu }) {
  return (
    <div>
      {quantity > 0 && (
        <div className={menu ? classes.menu : classes.quantity}>{quantity}</div>
      )}
      {!mobile && (
        <div className={classes.cart}>
          <Cart />
        </div>
      )}
    </div>
  );
}
