import { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';

import { loadStripe } from '@stripe/stripe-js';

import classes from './Content.module.css';
import ItemCart from './ItemCart';
import CheckoutModal from '../CheckoutModal/CheckoutModal';

export default function Content({ cart, numItems, setCart }) {
  const [total, setTotal] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [newCart, setNewCart] = useState(
    Object.entries(cart).map(([id, obj]) => ({ id, ...obj }))
  );

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
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

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      );
    }
  }, []);

  return (
    <Fragment>
      <section className={classes.pay}>
        <div className={classes.top}>
          <p className={classes.cart}>
            {numItems} item{numItems == 1 ? '' : <span>s</span>} in your cart
          </p>
        </div>
        <div className={classes.middle}>
          {newCart.map(({ id, title, price, num, image }) => {
            return (
              <div className={classes.itemCart} key={id}>
                <ItemCart
                  setCart={setCart}
                  name={title}
                  price={price}
                  num={num}
                  id={id}
                  image={image}
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
              <form
                className={classes.form}
                action="/api/checkout_sessions"
                method="POST"
              >
                <button type="submit" role="link" className={classes.button}>
                  Checkout
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
      {modalOpen && <CheckoutModal />}
    </Fragment>
  );
}
