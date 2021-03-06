import Link from 'next/link';

import classes from './MobileNavLink.module.css';

export default function MobileNavLink({ page, svg, text, onClick }) {
  return (
    <Link href={page}>
      <a onClick={onClick} className={classes.link}>
        {svg && <div>{svg}</div>}
        <div className={classes.text}>{text}</div>
      </a>
    </Link>
  );
}
