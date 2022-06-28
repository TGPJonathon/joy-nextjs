import { Fragment } from 'react';
import Link from 'next/link';

import MainPage from '../../components/BlogPage/MainPage';

import BlogCard from '../../components/BlogCard/BlogCard';

export default function Blog() {
  const posts = [
    {
      title: 'Test Title',
      description: 'What this post is about',
      date: 'June 28, 2022',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iure aut esse dolore adipisci impedit, expedita sequi consequatur amet illum eveniet laudantium praesentium, placeat cumque quo facilis dolor cupiditate. Repudiandae!',
    },
    {
      title: 'Hello! Welcome to My New Site',
      description:
        'What this post is about GAng gang gang gang gang gang gang ganga gnag gang gang gang gang gang gang gang gang gang ganga gnag gang gang gang gang gan',
      date: 'June 28, 2022',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iure aut esse dolore adipisci impedit, expedita sequi consequatur amet illum eveniet laudantium praesentium, placeat cumque quo facilis dolor cupiditate. Repudiandae!',
    },
    {
      title: 'Test Title',
      description: 'What this post is about',
      date: 'June 28, 2022',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iure aut esse dolore adipisci impedit, expedita sequi consequatur amet illum eveniet laudantium praesentium, placeat cumque quo facilis dolor cupiditate. Repudiandae!',
    },
    {
      title: 'Test Title',
      description: 'What this post is about',
      date: 'June 28, 2022',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iure aut esse dolore adipisci impedit, expedita sequi consequatur amet illum eveniet laudantium praesentium, placeat cumque quo facilis dolor cupiditate. Repudiandae!',
    },
    {
      title: 'Test Title',
      description: 'What this post is about',
      date: 'June 28, 2022',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iure aut esse dolore adipisci impedit, expedita sequi consequatur amet illum eveniet laudantium praesentium, placeat cumque quo facilis dolor cupiditate. Repudiandae!',
    },
    {
      title: 'Test Title',
      description: 'What this post is about',
      date: 'June 28, 2022',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iure aut esse dolore adipisci impedit, expedita sequi consequatur amet illum eveniet laudantium praesentium, placeat cumque quo facilis dolor cupiditate. Repudiandae!',
    },
  ];

  return (
    <Fragment>
      <MainPage />
    </Fragment>
  );
}

{
  /* <Container style="flex">
{posts.map((post, index) => {
  return (
    <div style={{ height: 'fit-content' }} key={index}>
      <Link href="/blog/10">
        <a>
          <BlogCard
            imageSrc="/test-picture2.jpg"
            title={post.title}
            description={post.description}
            date={post.date}
            content={post.content}
          />
        </a>
      </Link>
    </div>
  );
})}
</Container> */
}
