import { Fragment } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

import classes from './Content.module.css';

export default function Content() {
  return (
    <Fragment>
      <article>
        <section className={classes.top}>
          <div className={classes.top__text__container}>
            <span className={classes.top__text}>
              Hello! My name is Joy, and I got a lot to talk about
            </span>
          </div>
          <div className={classes.image}>
            <ParallaxBanner
              layers={[{ image: '/joy/joy7.jpg', speed: -50 }]}
              className={classes.banner}
            />
          </div>
        </section>

        <section className={classes.middle}>
          <div className={classes.middle__left}>
            <span className={classes.rotate}>About Me</span>
          </div>
          <div className={classes.middle__middle}>
            <p>
              I am an award-winning slam champion, open mic host, content
              creator, closet Soundcloud rapper, and social media manager based
              out of the DMV area. I graduated from Morgan State University in
              2018, with a B.A. in Psychology and a minor in Creative Writing.
            </p>
            <p>
              My debut collection of poetry, Growing Pains, was published in
              2020 at the beginning of the current global pandemic. I'm the
              Founder of Oxon Hill High School's Slam Team, founder of MSUPoets,
              and former member of both the Baltimore City Youth Poetry Slam
              Team and Words Beats and Life Youth Poetry Slam Teams. I try to
              explore art not only through writing but through multi-media
              production and content creation.
            </p>
          </div>
          <div className={classes.middle__right}></div>
        </section>

        <section className={classes.bottom}>
          <div className={classes.image}>
            <ParallaxBanner
              layers={[{ image: '/joy/joy7.jpg', speed: -50 }]}
              className={classes.banner}
            />
          </div>
          <div className={classes.bottom__right}>
            <span>
              Her creative portfolio explores themes of womanhood, hip-hop,
              blackness, love, mental health, substance abuse, and race
              relations, utilizing a multitude of creative lenses. Beginning her
              poetry career in 2013, Joy has won multiple awards including DC
              Youth Slam's MC Olympics in 2014, 3rd Place in Baltimore's Grand
              Slam Championship in 2016, and is a former Baltimore City Youth
              Poetry Ambassador (2015). She is also an NAACP ACT-SO finalist
              receiving silver and bronze medals for poetry and oratory (2015).
              She is a 2xs competitor at the Brave New Voices international
              poetry slam, consecutively performing on the final stage both
              years she competed in the competition.
            </span>
          </div>
        </section>
        <section className={classes.bottom_bottom}>
          <div className={classes.bottom_bottom__left}>
            <h1 className={classes.bottom_bottom__title}>
              Come Look Around And Browse!
            </h1>
            <div className={classes.cards}>
              <button className={classes.button}>Hit Me Up!</button>
              <button className={classes.button}>Come To An Event</button>
              <button className={classes.button}>Buy Merch!</button>
            </div>
          </div>
          <div className={classes.image}>
            <ParallaxBanner
              layers={[{ image: '/joy/joy7.jpg', speed: -50 }]}
              className={classes.banner}
            />
          </div>
        </section>
      </article>
    </Fragment>
  );
}
