import Facebook from '../../../public/social_media_icons/facebook.svg';
import Instagram from '../../../public/social_media_icons/instagram.svg';
import Twitter from '../../../public/social_media_icons/twitter.svg';
import Youtube from '../../../public/social_media_icons/youtube.svg';

import classes from './Hero.module.css';

export default function Hero() {
  return (
    <div className={classes.background_picture}>
      <section className={classes.name}>
        <h1 className={classes.text + ' ' + classes.title_text}>
          Joyful Angelica
        </h1>
        <p className={classes.text + ' ' + classes.content_text}>
          poet. author. artist. creative.
        </p>
      </section>
      <section className={classes.socials}>
        <div className={classes.line + ' ' + classes.line_one}></div>
        <Facebook /> <Instagram /> <Twitter /> <Youtube />
        <div className={classes.line + ' ' + classes.line_two}></div>
      </section>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
      veritatis accusantium fuga expedita quae, et corrupti ratione ducimus,
      delectus quo eveniet? Nihil, sint! A repudiandae soluta delectus, vero
      minus facere!
    </div>
  );
}
