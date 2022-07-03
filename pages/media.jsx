import { Fragment } from 'react';
import Gallery from '../components/Gallery/Gallery';
import Header from '../components/MediaPage/Header';
import Videos from '../components/MediaPage/Videos';

export default function Media() {
  return (
    <Fragment>
      <Header />
      <Videos />
      <Gallery />
    </Fragment>
  );
}
