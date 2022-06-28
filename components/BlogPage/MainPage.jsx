import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

import classes from './MainPage.module.css';

export default function MainPage() {
  return (
    <Fragment>
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
              <p className={classes.title}>
                Title With Some Name But I don't Really have one at the moment
              </p>
            </Link>

            <p>Published on this date</p>
            <p className={classes.description}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              inventore ipsa perferendis obcaecati nesciunt, rem dicta. Cumque
              maxime quos at ducimus ipsa aliquid facere laboriosam inventore
              facilis, adipisci, corrupti tenetur.
            </p>
            <Link href="https://google.com">
              <button className={classes.button}>View Post</button>
            </Link>
          </div>
        </div>
      </section>
      <section className={classes.recentPosts}>
        <p className={classes.test}>Recent Posts</p>
        <Image src="/test-picture.jpg" height={400} width={650} alt="picture" />
      </section>
    </Fragment>
  );
}
