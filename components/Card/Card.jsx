import Image from 'next/image';
import classes from './Card.module.css';

export default function Card({ imageSrc, title, text }) {
  return (
    <article className={classes.card}>
      <div className={classes.image}>
        <Image src="/test-picture3.jpg" alt="test" height={1000} width={1000} />
      </div>
      <h3>Title</h3>
      <p className={classes.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim labore
        aliquam sapiente fugit voluptatem natus odit! Placeat delectus iure
        aspernatur molestias assumenda excepturi earum dolorum necessitatibus
        voluptate, facilis eum neque.
      </p>
    </article>
  );
}
