import Image from 'next/image';
import Link from 'next/link';

import classes from './FeaturedPost.module.css';

export default function FeaturedPost() {
  return (
    <section className={classes.featuredPost}>
      <Link href="https://google.com">
        <div className={classes.image}>
          <Image
            src="/test-picture.jpg"
            height={2000}
            width={2000}
            alt="picture"
          />
        </div>
      </Link>

      <div className={classes.flex}>
        <div className={classes.text}>
          <p className={classes.featured}>Featured Blog Post</p>
          <Link href="https://google.com">
            <a className={classes.title}>
              Title With Some Name But I don&apos;t Really have one at the
              moment
            </a>
          </Link>

          <p>Published on this date</p>
          <p className={classes.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            inventore ipsa perferendis obcaecati nesciunt, rem dicta. Cumque
            maxime quos at ducimus ipsa aliquid facere laboriosam inventore
            facilis, adipisci, corrupti tenetur.
          </p>
          <Link href="https://google.com">
            <a className={classes.button}>View Post</a>
          </Link>
        </div>
      </div>
    </section>
  );
}
