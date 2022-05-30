import Image from 'next/image';

import SocialLinks from '../SocialLinks/SocialLinks';
import classes from './Posts.module.css';
import Recent from './Recent';

export default function Posts({ content }) {
  return (
    <article className={classes.background}>
      <div className={classes.post}>
        <section className={classes.start}>
          <div className={classes.post__info}>
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
            <div className={classes.post__info__text}>
              <p className={classes.joy}>Joy</p>
              <p> &#8226;</p>
              <p className={classes.date}>Mar 2, 2022</p>
              <p> &#8226;</p>
              <p className={classes.time}>5 min read</p>
            </div>
          </div>
          <div className={classes.title}>
            <h1>Interview with Joy</h1>
          </div>
          <div className={classes.author}>by Joy Angelica</div>
          <div className={classes.image}>
            <Image
              src="/test-picture3.jpg"
              alt="test"
              height={400}
              width={400}
            />
          </div>
        </section>
        <section className={classes.content}>
          <p className={classes.content__text}>{content}</p>
        </section>
        <section className={classes.socials}>
          <SocialLinks />
        </section>
        <section className={classes.recent}>
          <div className={classes.recent__top}>
            <h3>Recent Posts</h3> <p>See all</p>
          </div>
          <div className={classes.recent_posts}>
            <Recent />
            <Recent />
            <Recent />
          </div>
        </section>
      </div>
    </article>
  );
}
