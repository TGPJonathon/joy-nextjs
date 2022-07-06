import classes from './MessageSent.module.css';

export default function MessageSent() {
  return (
    <aside className={classes.background}>
      <div className={classes.success}>
        <p>Email Successfully Sent</p>
      </div>
    </aside>
  );
}
