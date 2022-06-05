import { Fragment, useState, useEffect } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

import classes from './Content.module.css';
import ItemCart from './ItemCart';

export default function Content({ cart, numItems, setCart }) {
  const [total, setTotal] = useState(0);
  const newCart = Object.entries(cart).map(([id, obj]) => ({ id, ...obj }));

  useEffect(() => {
    let total = 0;
    for (const id in cart) {
      const item = cart[id];
      total += parseFloat(item.price.substring(1)) * parseInt(item.num);
    }
    setTotal(total.toFixed(2));
  }, [cart]);

  return (
    <Fragment>
      {/* <div className={classes.image}>
        <ParallaxBanner
          layers={[{ image: '/test-picture2.jpg', speed: -50 }]}
          className={classes.banner}
        />
      </div> */}
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
                  cart={cart}
                  setCart={setCart}
                  name={title}
                  price={price}
                  num={num}
                  id={id}
                />
              </div>
            );
          })}

          <div className={classes.total}>
            <p>${total}</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
