import Link from 'next/link';
import { useContext } from 'react';

import Logo from '../Logo/Logo';
import MobileNav from '../MobileNav/MobileNav';
import classes from './Navbar.module.css';

import AppContext from '../../../AppContext';
import CheckoutCart from '../../CheckoutCart/CheckoutCart';

export default function Navbar() {
  const value = useContext(AppContext);

  return (
    <nav className={classes.navbar}>
      <Logo />
      <nav>
        <ul className={classes.navlinks}>
          <li className={classes.links}>
            <Link href="/">Home</Link>
          </li>
          <li className={classes.links}>
            <Link href="/about">About</Link>
          </li>
          <li className={classes.links}>
            <Link href="/events">Events</Link>
          </li>
          <li className={classes.links}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className={classes.links}>
            <Link href="/contact">Contact</Link>
          </li>
          <li className={classes.links}>
            <Link href="/media">Media</Link>
          </li>
          <li className={classes.links + ' ' + classes.important}>
            <Link href="/store">Store</Link>
          </li>
          {Object.keys(value.cart).length > 0 && (
            <li className={classes.links}>
              <Link href="/checkout">
                <a>
                  <CheckoutCart quantity={Object.keys(value.cart).length} />
                </a>
              </Link>
            </li>
          )}
        </ul>
        <div className={classes.mobilenav}>
          <MobileNav />
        </div>
      </nav>
    </nav>
  );
}
