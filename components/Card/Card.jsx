import Image from 'next/image';
import classes from './Card.module.css';

export default function Card({ imageSrc, title, text, date, time, location }) {
  return (
    <article className={classes.card}>
      <div className={classes.image}>
        <Image src="/test-picture3.jpg" alt="test" height={1000} width={1000} />
      </div>
      <div className={classes.information}>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.content}>{text}</p>
        {location && (
          <div>
            <h3>Location</h3>
            <p className={classes.datetime}>{location}</p>
          </div>
        )}
        {date && (
          <div>
            <h3>Date</h3>
            <p className={classes.datetime}>{date}</p>
          </div>
        )}
        {time && (
          <div>
            <h3>Time</h3>
            <p className={classes.datetime}>{time}</p>
          </div>
        )}
        <p className={classes.bold}>Click or Tap to see more Info!</p>
      </div>
    </article>
  );
}
