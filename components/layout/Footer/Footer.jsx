import Phone from '/public/icons/phone.svg';
import Mail from '/public/icons/mail.svg';

import classes from './Footer.module.css';
import SocialLinks from '../../SocialLinks/SocialLinks';

export default function Footer() {
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
  };

  return (
    <footer className={classes.flex}>
      <section className={classes.space}>
        <div className={classes.p_flex}>
          <div className={classes.margin}>
            <Phone />
          </div>
          <div>555-555-5555</div>
        </div>

        <div className={classes.p_flex}>
          <div className={classes.margin}>
            <Mail />
          </div>
          <div>temporary@gmail.com</div>
        </div>
      </section>
      <section className={classes.space}>
        <p>Social Media</p>
        <p>
          <SocialLinks />
        </p>
        <p>Copyright &copy; 2022&#9702;All Rights Reserved</p>
      </section>
      <section className={classes.space}>
        <p>Stay in Touch!</p>
        <div className={classes.form}>
          <form
            action="/api/email"
            onSubmit={(e) => {
              e.preventDefault();
              emailHandler(e);
              document.querySelector('#email').value = '';
            }}
          >
            <input
              className={classes.input}
              placeholder="E-mail"
              type="email"
              name="email"
              id="email"
              minLength="8"
              required
            />
            <input
              style={{ display: 'none' }}
              type="text"
              name="name"
              id="name"
              defaultValue="Email"
            />
            <input
              style={{ display: 'none' }}
              type="text"
              name="message"
              id="message"
              defaultValue="Someone sent you their email through the footer"
            />
            <button type="submit" className={classes.button}>
              Send!
            </button>
          </form>
        </div>
      </section>
    </footer>
  );
}
