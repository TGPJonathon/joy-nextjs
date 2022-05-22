import { Fragment } from 'react';
import Image from 'next/image';
import HeroComponent from '../components/Hero/HeroComponent';
import Content from '../components/AboutPage/Content/Content';

export default function About() {
  return (
    <Fragment>
      <header style={{ height: '25vh' }}>
        <HeroComponent
          imageSrc="/temp-header.jpg"
          alt="temp picture"
          pictureClass="background_picture_header"
          filter={true}
          title="About Joy"
        />
      </header>
      <main>
        <Content />
      </main>
    </Fragment>
  );
}
