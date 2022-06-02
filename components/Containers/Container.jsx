import classes from './Container.module.css';

export default function Container(props) {
  return <section className={classes[props.style]}>{props.children}</section>;
}
