import Link from 'next/link';

import classes from './MobileNavLink.module.css';

export default function MobileNavLink({ page, svg, text }) {
  return (
    <Link href={page}>
      <a className={classes.link}>
        <div>{svg}</div>
        <div>{text}</div>
      </a>
    </Link>
  );
}
