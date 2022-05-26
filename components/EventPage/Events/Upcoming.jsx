import Card from '../../Card/Card';

import classes from './Upcoming.module.css';

export default function Upcoming() {
  return (
    <section className={classes.upcoming}>
      <Card />
      <Card />
      <Card />
    </section>
  );
}
