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
            src="/joy/joy_malcolm.jpg"
            alt="temp"
            height={1500}
            width={1500}
          />
        </div>
        <div className={classes.image2}>
          <Image
            src="/joy/joy_reading.jpg"
            alt="temp"
            height={1500}
            width={1500}
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
