import HeroComponent from '../../Hero/HeroComponent';

import classes from './Hero.module.css';
import SocialLinks from '../../SocialLinks/SocialLinks';

export default function Hero() {
  return (
    <section className={classes.container}>
      <HeroComponent
        imageSrc="https://d2dw0u3k29fc6y.cloudfront.net/joy1.jpeg"
        alt="black woman"
        pictureClass="background_picture"
      />

      <section className={classes.name}>
        <h1 className={classes.text + ' ' + classes.title_text}>
          Joy Angelica
        </h1>
        <p className={classes.text + ' ' + classes.content_text}>
          poet. author. artist. creative.
        </p>
      </section>
      <section className={classes.socials}>
        <div className={classes.line + ' ' + classes.line_one}></div>
        <SocialLinks />
        <div className={classes.line + ' ' + classes.line_two}></div>
      </section>
    </section>
  );
}
