import Image from 'next/image';
import Link from 'next/link';

import classes from './FeaturedPost.module.css';

export default function FeaturedPost({ post }) {
  const imageUrl = post.attributes.Image.data.attributes.url.split(
    'https://strapi-joy.s3.amazonaws.com/'
  )[1];

  return (
    <section className={classes.featuredPost}>
      <Link href={`/blog/${post.id}`}>
        <div className={classes.image}>
          <Image
            src={`https://d2dw0u3k29fc6y.cloudfront.net/${imageUrl}`}
            height={2000}
            width={2000}
            alt="picture"
            priority={true}
          />
        </div>
      </Link>

      <div className={classes.flex}>
        <div className={classes.text}>
          <p className={classes.featured}>Featured Blog Post</p>
          <Link href={`/blog/${post.id}`}>
            <a className={classes.title}>{post.attributes.Title}</a>
          </Link>

          <p>
            Published <span> </span>
            <span>{new Date(post.attributes.publishedAt).toDateString()}</span>
          </p>
          <p className={classes.description}>
            {post.attributes.Content.slice(0, 30)}...
          </p>
          <Link href={`/blog/${post.id}`}>
            <a className={classes.button}>View Post</a>
          </Link>
        </div>
      </div>
    </section>
  );
}
