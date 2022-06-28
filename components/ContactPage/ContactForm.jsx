import classes from './ContactForm.module.css';

export default function ContactForm() {
  const emailHandler = async (e) => {
    const response = await fetch('/api/email', {
      method: 'POST',

      body: JSON.stringify({
        name: e.target[0].value,
        email: e.target[1].value,
        message: e.target[2].value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <section className={classes.flex}>
      <h2>Contact Me</h2>
      <form
        className={classes.form}
        action="/api/email"
        onSubmit={(e) => {
          e.preventDefault();
          emailHandler(e);
        }}
      >
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
      </form>
    </section>
  );
}
