import classes from './GridContainer.module.css';

export default function GridContainer(props) {
  return <section className={classes.grid}>{props.children}</section>;
}
