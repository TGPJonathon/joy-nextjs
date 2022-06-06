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
          <ParallaxBanner
            layers={[{ image: '/joy/joy7.jpg', speed: -50 }]}
            className={classes.banner}
          />
        </section>

        <section className={classes.middle}>
          <div className={classes.middle__left}>
            <span className={classes.rotate}>About Me</span>
          </div>
          <div className={classes.middle__middle}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              et quae aspernatur dignissimos! Facilis natus quo eos minus eum
              cupiditate officiis sapiente vero, in, sint reiciendis ducimus
              voluptatem fuga expedita.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem natus ullam nesciunt enim saepe nobis unde quam,
              nostrum odio, ducimus quod possimus impedit magni accusantium,
              libero placeat vitae temporibus quaerat! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Non facere ut magni porro
              quidem ipsa, excepturi, perferendis nesciunt eveniet earum
              architecto laudantium totam veritatis quos amet natus corrupti
              omnis saepe!
            </p>
          </div>
          <div className={classes.middle__right}></div>
        </section>

        <section className={classes.bottom}>
          <ParallaxBanner
            layers={[{ image: '/test-picture3.jpg', speed: -50 }]}
            // className="aspect-[2/1]"
          />
          <div className={classes.bottom__right}>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem sunt temporibus amet vel quidem doloremque
              provident, dicta dolores vero, similique tenetur itaque dolorum
              quas ipsa tempore quae! Voluptas, illo laborum?
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
          <ParallaxBanner
            layers={[{ image: '/test-picture3.jpg', speed: -50 }]}
            // className="aspect-[2/1]"
          />
        </section>
      </article>
    </Fragment>
  );
}
