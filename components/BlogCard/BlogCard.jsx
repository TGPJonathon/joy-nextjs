import Image from 'next/image';
import classes from './BlogCard.module.css';

export default function BlogCard({ imageSrc, title, description, date }) {
  return (
    <article className={classes.card}>
      <div className={classes.image}>
        <Image src="/test-picture3.jpg" alt="test" height={1000} width={1000} />
      </div>
      <div className={classes.bottom}>
        <h3>{title}</h3>
        <p className={classes.content}>{description}</p>
        {date && <p>{date}</p>}
      </div>
    </article>
  );
}
