import classes from './Posts.module.css';

export default function Posts({ content }) {
  return <article className={classes.post}>{content}</article>;
}
