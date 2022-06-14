import { useState } from 'react';

import CreditCard from '../../public/icons/creditcard.svg';
import Visa from '../../public/icons/visa.svg';
import MasterCard from '../../public/icons/mastercard.svg';
import Discover from '../../public/icons/discover.svg';
import Amex from '../../public/icons/american-express.svg';

import classes from './PaymentItem.module.css';

export default function PaymentItem({ inputId, selected, setSelected }) {
  const [card, setCard] = useState(<CreditCard />);

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
      {selected === inputId && (
        <form className={classes.form}>
          <div className={classes.name}>
            <label htmlFor="name">
              Name on card <span>*</span>
            </label>
            <input type="text" name="name" id="name" />
          </div>
          <div className={classes.card}>
            <label className={classes.cardIcon} htmlFor="card">
              Card number <span>*</span>
            </label>
            <input
              onInput={(e) => {
                const firstDigit = e.target.value[0];
                const length = e.target.value.length;
                const key = e.nativeEvent.inputType;

                if (firstDigit === '3') setCard(<Amex />);
                else if (firstDigit === '4') setCard(<Visa />);
                else if (firstDigit === '5') setCard(<MasterCard />);
                else if (firstDigit === '6') setCard(<Discover />);
                else {
                  setCard(<CreditCard />);
                }

                if (
                  firstDigit === '3' &&
                  (length === 4 || length === 11 || length === 17) &&
                  key !== 'deleteContentBackward'
                ) {
                  if (length === 17) document.querySelector('#name').focus();
                  else {
                    e.target.value += ' ';
                  }
                }

                if (
                  ['4', '5', '6'].includes(firstDigit) &&
                  key !== 'deleteContentBackward'
                ) {
                  if (length === 19) document.querySelector('#name').focus();
                  if ([4, 9, 14].includes(length)) e.target.value += ' ';
                }
              }}
              className={classes.cardInput}
              type="tel"
              name="card"
              id="card"
            />
            <span className={classes.cardImage}>{card}</span>
          </div>
          <div className={classes.expSec}>
            <div className={classes.exp}></div>
            <div className={classes.sec}></div>
          </div>
        </form>
      )}
    </div>
  );
}
