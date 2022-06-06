import { useState, useEffect } from 'react';
import Image from 'next/image';

import classes from './ItemCart.module.css';

export default function ItemCart({
  imageSrc,
  name,
  price,
  num,
  id,
  cart,
  setCart,
}) {
  const [quantity, setQuantity] = useState(num);

  useEffect(() => {
    const item = {};
    item[id] = { title: name, price: price, num: quantity };
    setCart((prevCart) => {
      return { ...prevCart, ...item };
    });
  }, [quantity, id, name, price, setCart]);

  const removeItem = () => {
    setCart((prevCart) => {
      const tempCart = { ...prevCart };
      delete tempCart[id];
      return tempCart;
    });
  };

  return (
    <div className={classes.item}>
      <div className={classes.left}>
        <div className={classes.image}>
          <Image src="/book1.webp" alt="test" height={200} width={200} />
        </div>

        <div className={classes.name_price}>
          <p>{name}</p> <p>{price}</p>
        </div>
      </div>

      <div className={classes.right}>
        <p onClick={removeItem} className={classes.remove}>
          Remove
        </p>

        <select
          className={classes.select}
          defaultValue={num}
          name="quantity"
          id="quantity"
          onChange={(e) => setQuantity(e.target.value)}
        >
          {Array(50)
            .fill(undefined)
            .map((n, i) => {
              return (
                <option value={i + 1} key={i + 1}>
                  {i + 1}
                </option>
              );
            })}
        </select>
        <p className={classes.price}>
          ${(quantity * price.substring(1)).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
