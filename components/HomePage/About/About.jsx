import Image from 'next/image';
import Link from 'next/link';

import classes from './About.module.css';

export default function About() {
  return (
    <section className={classes.about}>
      <h2 className={classes.about_title}>About Me</h2>
      <div className={classes.image1}>
        <Image
          src="/test-picture2.jpg"
          alt="black woman 2"
          width={1000}
          height={1000}
          objectFit="contain"
        />
      </div>
      <div className={classes.content}>
        <h2 className={classes.about_title_larger}>About Me</h2>
        <p className={classes.about_text}>
          Joy Anjelica is an award-winning slam champion, open mic host, content
          creator, closet Soundcloud rapper, and social media manager based out
          of the DMV area.....
        </p>

        <Link href="#">
          <button className={classes.more}>More</button>
        </Link>
      </div>
    </section>
  );
}
