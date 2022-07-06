import Image from 'next/image';

import ChevronDown from '../../public/icons/chevron_down.svg';

import classes from './Header.module.css';

export default function Header({ numItems }) {
  const scrollIntoView = (area) => {
    const eventSection = document.querySelector(area);
    eventSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={classes.header}>
      <div className={classes.flex}>
        <div className={classes.image1}>
          <Image
            src="https://d2dw0u3k29fc6y.cloudfront.net/joy_malcolm.webp"
            alt="temp"
            height={1500}
            width={1500}
            priority={true}
          />
        </div>
        <div className={classes.image2}>
          <Image
            src="https://d2dw0u3k29fc6y.cloudfront.net/joy_reading.webp"
            alt="temp"
            height={1500}
            width={1500}
            priority={true}
          />
        </div>
      </div>

      {numItems === 'all' && (
        <div className={classes.headerTextContainer}>
          <p className={classes.headerText}>Merch</p>
          <p className={classes.headerTextUnder}>
            Thank you for being here! I hope you find something you like
          </p>
          <div
            onClick={() => scrollIntoView('#storeItems')}
            className={classes.chevron}
          >
            <p>Scroll Down To Items</p>
            <ChevronDown />
          </div>
        </div>
      )}
    </header>
  );
}
