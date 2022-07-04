import Cog from '../../public/icons/cog.svg';

import classes from './Loader.module.css';

export default function Loader() {
  return (
    <aside className={classes.background}>
      <div className={classes.spinner}>
        <p className={classes.text}>Loading...</p>
        <div className={classes.cog}>
          <Cog />
        </div>
      </div>
    </aside>
  );
}
