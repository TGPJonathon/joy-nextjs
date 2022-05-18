import Link from 'next/link';

import Logo from '../Logo/Logo';
import MobileNav from '../MobileNav/MobileNav';
import classes from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={classes.navbar}>
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
            <Link href="#">Events</Link>
          </li>
          <li className={classes.links}>
            <Link href="#">Blog</Link>
          </li>
          <li className={classes.links}>
            <Link href="#">Contact</Link>
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
    </header>
  );
}
