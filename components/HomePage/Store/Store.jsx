import Image from 'next/image';
import classes from './Store.module.css';

export default function Store() {
  return (
    <section className={classes.flex}>
      <h2>Buy Some Stuff!</h2>
      <button>Shop All</button>
      <div className={classes.images}>
        <div className={classes.item}>
          <div className={classes.image}>
            <Image src="/book.jpg" alt="test" height={1000} width={1000} />
          </div>
          <p>My fire poetry book</p>
          <p>$9.99</p>
        </div>

        <div className={classes.item}>
          <div className={classes.image}>
            <Image src="/book.jpg" alt="test" height={1000} width={1000} />
          </div>
          <p>My fire poetry book</p>
          <p>$9.99</p>
        </div>
      </div>
    </section>
  );
}
