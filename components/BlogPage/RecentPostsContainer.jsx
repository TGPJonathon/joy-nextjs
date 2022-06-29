import classes from './RecentPostsContainer.module.css';

export default function RecentPostsContainer({ children }) {
  return (
    <section className={classes.recentPosts}>
      <div className={classes.recentPosts__margins}>
        <p className={classes.recentPosts__title}>Recent Posts</p>
        {children}
      </div>
    </section>
  );
}
