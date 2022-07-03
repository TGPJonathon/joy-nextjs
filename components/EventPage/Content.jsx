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
        <p className={classes.events} id="events">
          Upcoming Events
        </p>
        <p className={classes.noEvents}>
          There Are Currently No Upcoming Events
        </p>
        {/* <div className={classes.listOfEvents}>
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
        </div> */}
      </section>
    </Fragment>
  );
}
