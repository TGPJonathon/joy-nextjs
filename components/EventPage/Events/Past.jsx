import Card from '../../Card/Card';
import classes from './Past.module.css';

export default function Past() {
  return (
    <section className={classes.past}>
      <h2>Past Events</h2>
      <div className={classes.cards}>
        <Card />
      </div>
    </section>
  );
}
