import { forwardRef } from 'react';

import classes from './Logo.module.css';

const Logo = forwardRef(() => {
  return <div className={classes.logo}>Joyful Angelica</div>;
});

Logo.displayName = 'Logo';

export default Logo;
