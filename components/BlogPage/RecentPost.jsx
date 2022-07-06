import Image from 'next/image';
import Link from 'next/link';

import classes from './RecentPost.module.css';

export default function RecentPost({ post, postNum }) {
  return (
    <article className={classes.recentPost}>
      <section className={classes.leftSide}>
        <div className={classes.postImage}>
          <Link href={`/blog/${post.id}`}>
            <a>
              <Image
                src={post.attributes.Image.data.attributes.url}
                height={500}
                width={650}
                alt="picture"
                priority={postNum === 0 ? true : false}
              />
            </a>
          </Link>
        </div>
      </section>
      <section className={classes.rightSide}>
        <p className={classes.postTitle}>{post.attributes.Title}</p>
        <p className={classes.author}>
          by Joy <span>&#183;</span>
          <span>{new Date(post.attributes.publishedAt).toDateString()}</span>
        </p>
        <p className={classes.postDescription}>
          {post.attributes.Content.slice(0, 30)}...
        </p>
        <Link href={`/blog/${post.id}`}>
          <a className={classes.link}>Keep Reading</a>
        </Link>
      </section>
    </article>
  );
}
