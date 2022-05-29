import Image from 'next/image';
import classes from './BlogCard.module.css';

export default function BlogCard({
  imageSrc,
  title,
  description,
  date,
  content,
}) {
  return (
    <article className={classes.card}>
      <div className={classes.image}>
        {imageSrc && (
          <Image
            src="/test-picture3.jpg"
            alt="test"
            height={1000}
            width={1000}
          />
        )}
      </div>
      <div className={classes.bottom}>
        <div className={classes.info}>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            ></path>
          </svg>
          <div className={classes.text}>
            <p className={classes.text__name}>Joy</p>
            <p className={classes.text__date}>Mar 3, 2022</p>
          </div>
        </div>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.content}>{description}</p>
      </div>
    </article>
  );
}
