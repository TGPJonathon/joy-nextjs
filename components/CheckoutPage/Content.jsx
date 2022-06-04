import { Fragment } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

import classes from './Content.module.css';
import ItemCart from './ItemCart';

export default function Content({ cart, numItems }) {
  const newCart = Object.entries(cart).map(([id, obj]) => ({ id, ...obj }));
  console.log(newCart);
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
                <ItemCart name={title} price={price} num={num} />
              </div>
            );
          })}

          <div className={classes.total}>
            <p>Hey</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
