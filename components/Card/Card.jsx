import Image from 'next/image';
import classes from './Card.module.css';

export default function Card({ imageSrc, title, text, date, time }) {
  return (
    <article className={classes.card}>
      <div className={classes.image}>
        <Image src="/test-picture3.jpg" alt="test" height={1000} width={1000} />
      </div>
      <div className={classes.bottom}>
        <h3>{title}</h3>
        <p className={classes.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim labore
          aliquam sapiente fugit
        </p>
        {date && <p>{date}</p>}
        {time && <p>{time}</p>}
      </div>
    </article>
  );
}
