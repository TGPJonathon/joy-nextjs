import { forwardRef } from 'react';

import Link from 'next/link';

import classes from './Logo.module.css';

const Logo = forwardRef(() => {
  return (
    <div className={classes.logo}>
      <Link href="/">J. Angelica</Link>
    </div>
  );
});

Logo.displayName = 'Logo';

export default Logo;
