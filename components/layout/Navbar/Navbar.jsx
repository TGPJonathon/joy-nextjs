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
            {/* <Link href="/events">Events</Link> */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.eventbrite.com/o/joy-anjelica-32259229895"
            >
              Events
            </a>
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
        </ul>
        <div className={classes.mobilenav}>
          <MobileNav />
        </div>
      </nav>
    </nav>
  );
}
