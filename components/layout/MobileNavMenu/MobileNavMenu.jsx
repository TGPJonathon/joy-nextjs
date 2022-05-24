import MobileNavLink from './MobileNavLink';

import Calendar from '/public/icons/calendar.svg';
import Camera from '/public/icons/camera.svg';
import CreditCard from '/public/icons/creditcard.svg';
import Home from '/public/icons/home.svg';
import Pencil from '/public/icons/pencil.svg';
import Person from '/public/icons/person.svg';
import Phone from '/public/icons/phone.svg';

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
        <li className={classes.link_width}>
          <MobileNavLink
            onClick={toggleMenu}
            page="/"
            svg={<Home />}
            text="Home"
          />
        </li>
        <li className={classes.link_width + ' ' + classes.menu_color}>
          <MobileNavLink
            onClick={toggleMenu}
            page="/about"
            svg={<Person />}
            text="About"
          />
        </li>
        <li className={classes.link_width}>
          <MobileNavLink
            onClick={toggleMenu}
            page="/events"
            svg={<Calendar />}
            text="Events"
          />
        </li>
        <li className={classes.link_width + ' ' + classes.menu_color}>
          <MobileNavLink
            onClick={toggleMenu}
            page="/blog"
            svg={<Pencil />}
            text="Blog"
          />
        </li>
        <li className={classes.link_width}>
          <MobileNavLink
            onClick={toggleMenu}
            page="/contact"
            svg={<Phone />}
            text="Contact"
          />
        </li>
        <li className={classes.link_width + ' ' + classes.menu_color}>
          <MobileNavLink
            onClick={toggleMenu}
            page="#"
            svg={<Camera />}
            text="Media"
          />
        </li>
        <li className={classes.link_width}>
          <MobileNavLink
            onClick={toggleMenu}
            page="#"
            svg={<CreditCard />}
            text="Store"
          />
        </li>
      </ul>
    </nav>
  );
}
