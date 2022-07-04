import Image from 'next/image';
import { Fragment, useState, useContext } from 'react';
import AppContext from '../../AppContext';
import Popup from '../Popup/Popup';
import classes from './ItemPage.module.css';

export default function ItemPage({ image, name, price, description, id }) {
  const value = useContext(AppContext);
  const [quantity, setQuantity] = useState(1);
  const [itemAdded, setItemAdded] = useState(false);

  const addItemToCart = () => {
    const x = id;
    const item = {};
    item[x] = {
      title: name,
      price: price,
      num: quantity,
      image: image,
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
      <section className={classes.flex}>
        <div className={classes.image}>
          <Image src={image} alt="test" height={800} width={800} />
        </div>
        <div className={classes.info}>
          <div className={classes.text}>
            <p className={classes.name}>{name}</p>
            <p className={classes.price}>{price}</p>
            <div className={classes.description}>
              <p>{description}</p>
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
      {itemAdded && (
        <div className={classes.mobile}>
          <Popup image={image} name={name} price={price} />
        </div>
      )}
    </Fragment>
  );
}
