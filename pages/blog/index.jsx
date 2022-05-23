import { Fragment } from 'react';
import Link from 'next/link';

import HeroComponent from '../../components/Hero/HeroComponent';
import BlogCard from '../../components/BlogCard/BlogCard';

export default function Blog() {
  const posts = [
    {
      title: 'Test Title',
      description: 'What this post is about',
      date: 'June 28, 2022',
    },
    {
      title: 'Test Title',
      description: 'What this post is about',
      date: 'June 28, 2022',
    },
    {
      title: 'Test Title',
      description: 'What this post is about',
      date: 'June 28, 2022',
    },
    {
      title: 'Test Title',
      description: 'What this post is about',
      date: 'June 28, 2022',
    },
    {
      title: 'Test Title',
      description: 'What this post is about',
      date: 'June 28, 2022',
    },
    {
      title: 'Test Title',
      description: 'What this post is about',
      date: 'June 28, 2022',
    },
  ];
  const divStyles = {
    margin: '2em 5%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  };

  return (
    <Fragment>
      <header style={{ height: '25vh' }}>
        <HeroComponent
          imageSrc="/temp-blog.jpg"
          alt="temp picture"
          pictureClass="background_picture_header"
          filter={true}
          title="Blog"
        />
      </header>
      <main style={divStyles}>
        {posts.map((post, index) => {
          return (
            <div key={index}>
              <Link href="/blog/10">
                <a>
                  <BlogCard
                    title={post.title}
                    description={post.description}
                    date={post.date}
                  />
                </a>
              </Link>
            </div>
          );
        })}
      </main>
    </Fragment>
  );
}
