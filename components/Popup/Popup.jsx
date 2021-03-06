import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';

import classes from './Popup.module.css';

export default function Popup({ image, name, price }) {
  const [xClicked, setXClicked] = useState(false);

  if (xClicked) {
    return;
  }

  return (
    <div className={classes.background}>
      <aside className={classes.popup}>
        <div className={classes.inside}>
          <div className={classes.top}>
            <p>Added to Bag</p>
            <p onClick={() => setXClicked(true)} className={classes.close}>
              X
            </p>
          </div>
          <div className={classes.middle}>
            <div className={classes.image}>
              <Image src={image} alt="test" height={100} width={100} />
            </div>
            <div className={classes.content}>
              <p>{name}</p> <p>{price}</p>
            </div>
          </div>
          <div className={classes.bottom}>
            <Link href="/checkout">
              <a>
                <button className={classes.button}>View Cart</button>
              </a>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
