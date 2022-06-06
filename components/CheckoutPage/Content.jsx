import { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';

import classes from './Content.module.css';
import ItemCart from './ItemCart';

export default function Content({ cart, numItems, setCart }) {
  const [total, setTotal] = useState(0);
  const [newCart, setNewCart] = useState(
    Object.entries(cart).map(([id, obj]) => ({ id, ...obj }))
  );

  useEffect(() => {
    if (Object.keys(cart).length > 0) {
      let total = 0;
      for (const id in cart) {
        const item = cart[id];
        total += parseFloat(item.price.substring(1)) * parseInt(item.num);
      }
      setTotal(total.toFixed(2));
    }

    setNewCart(Object.entries(cart).map(([id, obj]) => ({ id, ...obj })));
  }, [cart]);

  return (
    <Fragment>
      <section className={classes.pay}>
        <div className={classes.top}>
          <p className={classes.cart}>
            {numItems} item{numItems == 1 ? '' : <span>s</span>} in your cart
          </p>
        </div>
        <div className={classes.middle}>
          {newCart.map(({ id, title, price, num }) => {
            return (
              <div className={classes.itemCart} key={id}>
                <ItemCart
                  setCart={setCart}
                  name={title}
                  price={price}
                  num={num}
                  id={id}
                />
              </div>
            );
          })}

          {newCart.length == 0 && (
            <div className={classes.empty}>
              <p>Your cart is empty</p>
              <Link href="/store">
                <button className={classes.empty_button}>
                  Continue Shopping &#8594;
                </button>
              </Link>
            </div>
          )}

          {newCart.length > 0 && (
            <div className={classes.total}>
              <div className={classes.subtotal}>
                <p>Subtotal</p>
                <p className={classes.margins}>${total}</p>
              </div>

              <p className={classes.shipping}>
                Shipping & taxes calculated at checkout
              </p>
              <button className={classes.button}>Checkout</button>
            </div>
          )}
        </div>
      </section>
    </Fragment>
  );
}
