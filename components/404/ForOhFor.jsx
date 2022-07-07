import Image from 'next/image';
import Link from 'next/link';

import ChevronDown from '../../public/icons/chevron_down.svg';

import classes from './ForOhFor.module.css';

export default function ForOhFor() {
  return (
    <section className={classes.blur}>
      <div className={classes.image}>
        <Image
          src="https://d2dw0u3k29fc6y.cloudfront.net/joy1.jpeg"
          alt="Joy"
          height={2000}
          width={2000}
        />
      </div>
      <div className={classes.lost}>
        <p>Honey, I think you might be lost</p>
        <p>Try Going Here</p>
        <p>
          <Link href="/media">
            <span className={classes.clickable}>Media</span>
          </Link>
          <span>|</span>
          <Link href="/store">
            <span className={classes.clickable}>Store</span>
          </Link>
          <span>|</span>
          <Link href="/blog">
            <span className={classes.clickable}>Blog</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
