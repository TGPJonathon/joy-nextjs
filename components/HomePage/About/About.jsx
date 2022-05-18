import Carousel from '../../Carousel/Carousel';
import Card from '../../Card/Card';

import classes from './About.module.css';

export default function About() {
  const titles = ['Poet', 'Author', 'Creative', 'Artist'];
  const cards = titles.map((title) => {
    return {
      attributes: {
        Title: title,
        text: 'Hey',
      },
    };
  });

  //Maybe consider removing pictures from About section

  return (
    <section className={classes.about}>
      <div className={classes.flex}>
        <h2 className={classes.about_title}>About Me</h2>
        <p className={classes.title_content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Distinctio, omnis!
          Veritatis similique amet
        </p>
      </div>

      <div className={classes.mobile}>
        {console.log(cards)}
        <Carousel Cards={cards} />
      </div>
      <div className={classes.larger_screen}>
        <div className={classes.grid}>
          {titles.map((title) => {
            return <Card key={title} title={title} />;
          })}
        </div>
      </div>

      <div className={classes.button}>
        <button>Learn More</button>
      </div>
    </section>
  );
}
