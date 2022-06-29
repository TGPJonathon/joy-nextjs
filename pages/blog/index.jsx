import { Fragment } from 'react';

import FeaturedPost from '../../components/BlogPage/FeaturedPost';
import RecentPost from '../../components/BlogPage/RecentPost';
import RecentPostsContainer from '../../components/BlogPage/RecentPostsContainer';

export default function Blog() {
  return (
    <Fragment>
      <FeaturedPost />
      <RecentPostsContainer>
        <RecentPost />
        <RecentPost />
        <RecentPost />
        <RecentPost />
      </RecentPostsContainer>
    </Fragment>
  );
}
