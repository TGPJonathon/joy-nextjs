import { Fragment, useEffect, useState } from 'react';

import FeaturedPost from '../../components/BlogPage/FeaturedPost';
import RecentPost from '../../components/BlogPage/RecentPost';
import RecentPostsContainer from '../../components/BlogPage/RecentPostsContainer';
import Loader from '../../components/Loader/Loader';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);

  const getPosts = async () => {
    const response = await fetch(
      'https://api.joyangelica.com/api/blogs?populate=*'
    );
    const posts = await response.json();

    const featured = posts.data.reduce((a, b) =>
      new Date(a.attributes.publishedAt) > new Date(b.attributes.publishedAt)
        ? a
        : b
    );
    setFeaturedPost(featured);

    const otherPosts = posts.data.filter(
      (feature) => feature.id !== featured.id
    );
    setPosts(otherPosts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (featuredPost) {
    return (
      <Fragment>
        <FeaturedPost post={featuredPost} />
        <RecentPostsContainer>
          {posts.map((post, index) => {
            return <RecentPost key={index} post={post} />;
          })}
        </RecentPostsContainer>
      </Fragment>
    );
  }

  return <Loader />;
}
