import Link from 'next/link';
import { useContext } from 'react';

import Logo from '../Logo/Logo';
import MobileNav from '../MobileNav/MobileNav';
import classes from './Navbar.module.css';

import AppContext from '../../../AppContext';

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
            {/* <Link href="/events">Events</Link> */}
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.eventbrite.com/o/joy-anjelica-32259229895"
            > */}
            <Link href="/events">Events</Link>
            {/* </a> */}
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
          {value.cart.length > 0 && (
            <li className={classes.links}>
              <Link href="/checkout">Cart</Link>
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
