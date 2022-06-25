import Image from 'next/image';

import LocationMarker from '../../public/icons/location.svg';
import Clock from '../../public/icons/clock.svg';

import classes from './EventCard.module.css';

export default function EventCard({ name, date, location, time, linkToEvent }) {
  return (
    <figure className={classes.eventCard}>
      <div className={classes.backgroundImage}>
        <Image src="/temp-contact.jpg" height={500} width={500} alt="temp" />
      </div>
      <div className={classes.titleDate}>
        <p className={classes.name}>Enjoy The Mic</p>
        <p className={classes.date}>12 May</p>
      </div>
      <div className={classes.eventInfo}>
        <p className={classes.location}>
          <span className={classes.icon}>
            <LocationMarker />
          </span>
          Baltimore MD
        </p>
        <p className={classes.time}>
          <span className={classes.icon}>
            <Clock />
          </span>
          Wednesday 4:30 PM
        </p>
        <button className={classes.button}>View Event</button>
      </div>
    </figure>
  );
}
