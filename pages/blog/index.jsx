import { Fragment } from 'react';

import FeaturedPost from '../../components/BlogPage/FeaturedPost';
import RecentPost from '../../components/BlogPage/RecentPost';
import RecentPostsContainer from '../../components/BlogPage/RecentPostsContainer';
import Loader from '../../components/Loader/Loader';

export default function Blog({ featured, otherPosts }) {
  if (featured) {
    return (
      <Fragment>
        <FeaturedPost post={featured} />
        <RecentPostsContainer>
          {otherPosts.length === 0 && <p>No Posts At the Moment</p>}
          {otherPosts.map((post, index) => {
            return <RecentPost key={index} postNum={index} post={post} />;
          })}
        </RecentPostsContainer>
      </Fragment>
    );
  }

  return <Loader />;
}

export async function getStaticProps() {
  const result = await fetch(
    'https://api.joyangelica.com/api/blogs?populate=*'
  );
  const posts = await result.json();

  const featured = posts.data.reduce((a, b) =>
    new Date(a.attributes.publishedAt) > new Date(b.attributes.publishedAt)
      ? a
      : b
  );

  const otherPosts = posts.data.filter((feature) => feature.id !== featured.id);

  return {
    props: {
      featured,
      otherPosts,
    },
  };
}
