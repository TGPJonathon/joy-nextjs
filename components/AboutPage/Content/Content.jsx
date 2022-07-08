import { Fragment } from 'react';
import Image from 'next/image';

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
          <div className={classes.testImage}>
            <Image
              src="https://d2dw0u3k29fc6y.cloudfront.net/joy7.webp"
              alt="Joy Gazing"
              width={2000}
              height={2000}
              priority={true}
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
              2020 at the beginning of the current global pandemic. I&apos;m the
              Founder of Oxon Hill High School&apos;s Slam Team, founder of
              MSUPoets, and former member of both the Baltimore City Youth
              Poetry Slam Team and Words Beats and Life Youth Poetry Slam Teams.
              I try to explore art not only through writing but through
              multi-media production and content creation.
            </p>
          </div>
          <div className={classes.middle__right}></div>
        </section>

        <section className={classes.bottom}>
          <div className={classes.testImage}>
            <Image
              src="https://d2dw0u3k29fc6y.cloudfront.net/protest.jpg"
              alt="Joy Gazing"
              width={2000}
              height={2000}
            />
          </div>
          <div className={classes.bottom__right}>
            <span>
              My creative portfolio explores themes of womanhood, hip-hop,
              blackness, love, mental health, substance abuse, and race
              relations, utilizing a multitude of creative lenses. I began my
              poetry career in 2013, and I&apos;ve won multiple awards including
              DC Youth Slam&apos;s MC Olympics in 2014, 3rd Place in
              Baltimore&apos;s Grand Slam Championship in 2016, and is a former
              Baltimore City Youth Poetry Ambassador (2015). I&apos;m also a
              NAACP ACT-SO finalist receiving silver and bronze medals for
              poetry and oratory (2015). I&apos;ve competed 2xs at the Brave New
              Voices international poetry slam, consecutively performing on the
              final stage both years I was in the competition.
            </span>
          </div>
        </section>
        <section className={classes.bottom_bottom}>
          <div className={classes.bottom_bottom__left}>
            <p className={classes.bottom_bottom__text}>
              I have dedicated almost a decade to honing my skills and creating
              communities for young artists from all walks of life, and across
              all mediums, hosting open mics, hip hop cyphers, workshops, and
              artist showcases. I was also previously the mid-Atlantic region
              Mawa Scribes champion (2016) and have featured at many notable
              venues such as DC&apos;s Kennedy Theater, The Arc Theater, and Bus
              Boys and Poets. I view art as a vehicle for change and social
              justice through entertaining and also educating audiences. ​I
              currently works as a program manager and social media coordinator
              in the public health field concentrating on substance use and
              sexual reproductive health for the Baltimore City Health
              Department and ETR.
            </p>
          </div>
          <div className={classes.testImage + ' ' + classes.bottomImage}>
            <Image
              src="https://d2dw0u3k29fc6y.cloudfront.net/test.webp"
              alt="Joy Gazing"
              width={2000}
              height={2000}
            />
          </div>
        </section>
      </article>
    </Fragment>
  );
}
