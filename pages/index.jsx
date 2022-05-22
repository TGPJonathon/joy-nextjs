import { Fragment } from 'react';

import Hero from '../components/HomePage/Hero/Hero';
import About from '../components/HomePage/About/About';
import Event from '../components/HomePage/Events/Event';
import Store from '../components/HomePage/Store/Store';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      {/* <About />
      <Event />
      <Store /> */}
    </Fragment>
  );
}
