import { useState } from 'react';

import MobileNavMenu from '../MobileNavMenu/MobileNavMenu';
import classes from './MobileNav.module.css';

export default function MobileNav({ numItems }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <aside>
      <button className={classes.button} onClick={toggleMenu}>
        <svg
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
        >
          <path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z" />
        </svg>
      </button>
      <div className={menuOpen ? classes.visible : classes.invisible}>
        <MobileNavMenu numItems={numItems} toggleMenu={toggleMenu} />
      </div>
    </aside>
  );
}
