import Phone from '../../public/icons/phone.svg';
import Mail from '../../public/icons/mail.svg';
import classes from './ContactInfo.module.css';

import SocialLinks from '../SocialLinks/SocialLinks';

export default function ContactInfo() {
  return (
    <section className={classes.contact_info}>
      <h3>Contact Me</h3>
      <div className={classes.flex}>
        <div>
          <Phone />
        </div>
        <div>555-555-5555</div>
      </div>

      <div className={classes.flex}>
        <div>
          <Mail />
        </div>
        <div>ganggang@gmail.com</div>
      </div>

      <div className={classes.social_icons}>
        <SocialLinks />
      </div>
    </section>
  );
}
