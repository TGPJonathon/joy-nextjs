import Visa from '../../public/icons/visa.svg';
import MasterCard from '../../public/icons/mastercard.svg';
import Discover from '../../public/icons/discover.svg';
import Amex from '../../public/icons/american-express.svg';

import classes from './PaymentItem.module.css';

export default function PaymentItem({ inputId, selected, setSelected }) {
  return (
    <div className={classes.paymentItem}>
      <div className={classes.paymentElements}>
        <div className={classes.left}>
          <input
            onChange={(e) => {
              setSelected(e.target.value);
            }}
            type="radio"
            name="payment"
            id={inputId}
            value={inputId}
          />
          <label htmlFor="payment">Card</label>
        </div>
        <div className={classes.right}>
          <div className={classes.icons}>
            <div className={classes.icon}>
              <Visa />
            </div>
            <div className={classes.icon}>
              <MasterCard />
            </div>
            <div className={classes.icon}>
              <Amex />
            </div>
            <div className={classes.icon}>
              <Discover />
            </div>
          </div>
        </div>
      </div>
      {selected === inputId && <p className={classes.other}>THIS WORKS</p>}
    </div>
  );
}
