import MobileNavLink from './MobileNavLink';

import CheckoutCart from '../../CheckoutCart/CheckoutCart';

import classes from './MobileNavMenu.module.css';

export default function MobileNavMenu({ toggleMenu, numItems }) {
  return (
    <nav className={classes.blur}>
      <div className={classes.menu}>
        <button onClick={toggleMenu} className={classes.menu_button}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z" />
          </svg>
        </button>
        <ul className={classes.navlist}>
          <li className={classes.link_width}>
            <MobileNavLink onClick={toggleMenu} page="/" text="Home" />
          </li>
          <li className={classes.link_width}>
            <MobileNavLink onClick={toggleMenu} page="/about" text="About" />
          </li>
          <li className={classes.link_width}>
            <MobileNavLink onClick={toggleMenu} page="/events" text="Events" />
          </li>
          <li className={classes.link_width}>
            <MobileNavLink onClick={toggleMenu} page="/blog" text="Blog" />
          </li>
          <li className={classes.link_width}>
            <MobileNavLink
              onClick={toggleMenu}
              page="/contact"
              text="Contact"
            />
          </li>
          <li className={classes.link_width}>
            <MobileNavLink onClick={toggleMenu} page="/media" text="Media" />
          </li>
          <li className={classes.link_width}>
            <MobileNavLink onClick={toggleMenu} page="/store" text="Store" />
          </li>
          <li className={classes.link_width}>
            <MobileNavLink
              onClick={toggleMenu}
              page="/checkout"
              svg={
                numItems > 0 && (
                  <CheckoutCart
                    mobile={false}
                    quantity={numItems}
                    menu={true}
                  />
                )
              }
              text="Checkout"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
