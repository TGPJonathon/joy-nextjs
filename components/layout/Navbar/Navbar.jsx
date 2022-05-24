import Link from 'next/link';

import Logo from '../Logo/Logo';
import MobileNav from '../MobileNav/MobileNav';
import classes from './Navbar.module.css';

export default function Navbar() {
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
            <Link href="#">Media</Link>
          </li>
          <li className={classes.links + ' ' + classes.important}>
            <Link href="#">Store</Link>
          </li>
        </ul>
        <div className={classes.mobilenav}>
          <MobileNav />
        </div>
      </nav>
    </nav>
  );
}
