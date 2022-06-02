import Phone from '/public/icons/phone.svg';
import Mail from '/public/icons/mail.svg';

import classes from './Footer.module.css';
import SocialLinks from '../../SocialLinks/SocialLinks';

export default function Footer() {
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
          <div>ganggang@gmail.com</div>
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
        <input
          className={classes.input}
          placeholder="E-mail"
          type="email"
          name="email"
          id="email"
        />
        <button className={classes.button}>Send!</button>
      </section>
    </footer>
  );
}
