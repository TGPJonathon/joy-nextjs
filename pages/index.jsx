import { Fragment } from 'react';

import Hero from '../components/HomePage/Hero/Hero';
import About from '../components/HomePage/About/About';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <About />
    </Fragment>
  );
}
