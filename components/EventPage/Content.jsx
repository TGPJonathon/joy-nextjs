import { Fragment } from 'react';
import Image from 'next/image';

import EventCard from './EventCard';

import classes from './Content.module.css';

export default function Content() {
  const scrollIntoView = () => {
    const eventSection = document.querySelector('#events');
    eventSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Fragment>
      <section className={classes.background}>
        <section className={classes.flex}>
          <div className={classes.landing}>
            <div className={classes.image}>
              <Image src="/joy/test.jpg" alt="joy" height={2500} width={2500} />
            </div>
            <div className={classes.interest}>
              <p className={classes.landingTitle}>Come Out To A Show</p>
              <button onClick={scrollIntoView} className={classes.button}>
                View All Events
              </button>
            </div>
          </div>
        </section>
      </section>
      <section className={classes.eventSection}>
        <p id="events">Events</p>
        <div className={classes.listOfEvents}>
          <div className={classes.eventElements}>
            <EventCard />
          </div>
          <div className={classes.eventElements}>
            <EventCard />
          </div>
          <div className={classes.eventElements}>
            <EventCard />
          </div>
          <div className={classes.eventElements}>
            <EventCard />
          </div>
        </div>
      </section>
    </Fragment>
  );
}

{
  /* <div className={classes.event}>
<div className={classes.image}>
  <ParallaxBanner
    layers={[{ image: '/test-picture2.jpg', speed: -50 }]}
    className={classes.banner}
  />
</div>
<div className={classes.content}>
  <h2 className={classes.content__title}>Enjoy The Mic!</h2>
  <p className={classes.content__description}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
    reiciendis? Magnam expedita minus non similique aliquam, beatae esse
    error fugiat aspernatur voluptates facere fugit incidunt harum ut
    tempore et temporibus. Eos eaque quis tenetur omnis voluptate
    doloremque illum neque. Quidem consectetur repellat perspiciatis
    quas doloribus reprehenderit neque. Quis iure eligendi laboriosam,
    dolor quos dignissimos aliquid fugit tempora fuga ducimus ipsam!
  </p>
  <p className={classes.content__location}>
    10000 Allentown Rd, Fort Washington MD
  </p>
  <p className={classes.content__date}>Friday, May 27, 2022</p>
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://eventbrite.com"
    className={classes.content__link}
  >
    Click Me For Details
  </a>
</div>
</div>
<div className={classes.event}>
<div className={classes.image}>
  <ParallaxBanner
    layers={[{ image: '/temp-contact2.jpg', speed: -50 }]}
    className={classes.banner}
  />
</div>
<div className={classes.content}>
  <h2 className={classes.content__title}>Enjoy The Mic!</h2>
  <p className={classes.content__description}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
    reiciendis? Magnam expedita minus non similique aliquam, beatae esse
    error fugiat aspernatur voluptates facere fugit incidunt harum ut
    tempore et temporibus. Eos eaque quis tenetur omnis voluptate
    doloremque illum neque. Quidem consectetur repellat perspiciatis
    quas doloribus reprehenderit neque. Quis iure eligendi laboriosam,
    dolor quos dignissimos aliquid fugit tempora fuga ducimus ipsam!
  </p>
  <p className={classes.content__location}>
    10000 Allentown Rd, Fort Washington MD
  </p>
  <p className={classes.content__date}>Friday, May 27, 2022</p>
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://eventbrite.com"
    className={classes.content__link}
  >
    Click Me For Details
  </a>
</div>
</div> */
}
