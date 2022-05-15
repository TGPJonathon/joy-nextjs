import Card from '../../Card/Card';

import classes from './About.module.css';

export default function About() {
  return (
    <section className={classes.about}>
      <h2 className={classes.about_title}>About Me</h2>
      <div className={classes.grid}>
        <Card />
        <Card />
        <Card />
      </div>
      <div className={classes.button}>
        <button>Come Learn Some More About Me!</button>
      </div>
    </section>
  );
}
