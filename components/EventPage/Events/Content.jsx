import { ParallaxBanner } from 'react-scroll-parallax';

import classes from './Content.module.css';

export default function Content() {
  return (
    <section className={classes.flex}>
      <div className={classes.event}>
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
      </div>
    </section>
  );
}
