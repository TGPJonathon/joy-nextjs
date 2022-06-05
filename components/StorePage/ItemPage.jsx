import Image from 'next/image';
import { Fragment, useState, useContext } from 'react';
import AppContext from '../../AppContext';
import Parallax from '../Parallax/Parallax';
import Popup from '../Popup/Popup';
import classes from './ItemPage.module.css';

export default function ItemPage() {
  const value = useContext(AppContext);
  const [quantity, setQuantity] = useState(1);
  const [itemAdded, setItemAdded] = useState(false);

  const addItemToCart = () => {
    const x = 1;
    const item = {};
    item[x] = {
      title: 'Growing Pains: Clean Edition',
      price: '$9.99',
      num: quantity,
    };
    value.setCart({ ...value.cart, ...item });
    console.log(value.cart);
    setItemAdded(true);
    setTimeout(() => {
      setItemAdded(false);
    }, 3000);
  };

  return (
    <Fragment>
      <Parallax image="/temp-contact2.jpg" text="Merch" />
      <section className={classes.flex}>
        <div className={classes.image}>
          <Image src="/book1.webp" alt="test" height={800} width={800} />
        </div>
        <div className={classes.info}>
          <div className={classes.text}>
            <p className={classes.name}>Growing Pains: Clean Version</p>
            <p className={classes.price}>$9.99</p>
            <div className={classes.description}>
              <p>
                Growing Pains explores the pains of navigating through life as a
                young, black woman by asking the author, the reader, and God
                difficult questions. Each poem is an emotional meditation that
                demands to be deeply examined. Growing Pains is a book of woven
                stories that say we have survived our darkest moments thus far,
                and we can survive anything else that may come our way.
              </p>
            </div>
          </div>

          <label className={classes.label} htmlFor="quantity">
            Quantity
          </label>
          <select
            onChange={(e) => setQuantity(e.target.value)}
            className={classes.select}
            name="quantity"
            id="quantity"
          >
            <option value={1}>1</option>
            {Array(49)
              .fill(undefined)
              .map((n, i) => {
                return (
                  <option value={i + 2} key={i}>
                    {i + 2}
                  </option>
                );
              })}
          </select>
          <button onClick={addItemToCart} className={classes.button}>
            Add to cart
          </button>
        </div>
      </section>
      {itemAdded && <Popup />}
    </Fragment>
  );
}
