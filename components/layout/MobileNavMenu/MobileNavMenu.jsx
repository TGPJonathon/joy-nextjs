import Link from 'next/link';

import MobileNavLink from './MobileNavLink';

import classes from './MobileNavMenu.module.css';

export default function MobileNavMenu({ toggleMenu }) {
  return (
    <nav className={classes.menu}>
      <button onClick={toggleMenu} className={classes.menu_button}>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <path d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z" />
        </svg>
      </button>
      <ul className={classes.navlist}>
        <li>
          <Link href="#">
            <a>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Events</Link>
        </li>
        <li>
          <Link href="#">Blog</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
        <li>
          <Link href="#">Media</Link>
        </li>
        <li>
          <Link href="#">Store</Link>
        </li>
      </ul>
    </nav>
  );
}
