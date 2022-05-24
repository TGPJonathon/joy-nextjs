import classes from './ContactForm.module.css';

export default function ContactForm() {
  return (
    <section className={classes.flex}>
      <input className={classes.name} type="text" placeholder="Name" />
      <input
        className={classes.email}
        type="email"
        name="email"
        id="email"
        placeholder="E-mail"
      />
      <textarea
        className={classes.message}
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Message"
      ></textarea>
      <button className={classes.button}>Send</button>
    </section>
  );
}
