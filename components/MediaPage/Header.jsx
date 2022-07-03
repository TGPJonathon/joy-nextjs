import classes from './Header.module.css';

export default function Header() {
  const scrollIntoView = (area) => {
    const eventSection = document.querySelector(area);
    eventSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header>
      <div className={classes.header}>
        <p onClick={() => scrollIntoView('#videos')} className={classes.text}>
          Videos
        </p>
        <span className={classes.text + ' ' + classes.bar}>|</span>
        <p onClick={() => scrollIntoView('#gallery')} className={classes.text}>
          Gallery
        </p>
      </div>
    </header>
  );
}
