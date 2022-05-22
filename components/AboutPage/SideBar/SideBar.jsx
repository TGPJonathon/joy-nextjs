import classes from './SideBar.module.css';

export default function SideBar({ icon, text }) {
  return (
    <div className={classes.sidebar}>
      <div className={classes.icon}>{icon}</div>
      <div className={classes.text}>{text}</div>
    </div>
  );
}
