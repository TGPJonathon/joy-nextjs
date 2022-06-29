import Image from 'next/image';
import Link from 'next/link';

import classes from './RecentPost.module.css';

export default function RecentPost() {
  return (
    <article className={classes.recentPost}>
      <section className={classes.leftSide}>
        <div className={classes.postImage}>
          <Link href="https://www.google.com">
            <a>
              <Image
                src="/test-picture.jpg"
                height={500}
                width={650}
                alt="picture"
              />
            </a>
          </Link>
        </div>
      </section>
      <section className={classes.rightSide}>
        <p className={classes.postTitle}>Test Title For This Post</p>
        <p className={classes.author}>
          by Joy <span>&#183;</span> <span>Days ago</span>
        </p>
        <p className={classes.postDescription}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
          inventore in, aliquid adipisci hic dolor eaque ab voluptatibus tenetur
          ullam nihil eius nam exercitationem magni perferendis aspernatur.
          Perspiciatis, quisquam provident?
        </p>
        <Link href="https://google.com">
          <a className={classes.link}>Keep Reading</a>
        </Link>
      </section>
    </article>
  );
}
