import Image from 'next/image';
import classes from './Card.module.css';

export default function Card({ imageSrc, title, text, date, time, location }) {
  return (
    <article className={classes.card}>
      <div className={classes.image}>
        <Image src="/test-picture3.jpg" alt="test" height={1000} width={1000} />
      </div>
      <div className={classes.information}>
        <h3 className={classes.title}>Enjoy The Mic</h3>
        <p className={classes.location}>Baltimore, MD</p>
        <p className={classes.date}> June 2, 2022</p>
        <p className={classes.link}>Click Me For Details</p>
      </div>
    </article>
  );
}
