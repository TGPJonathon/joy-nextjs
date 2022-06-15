import { Fragment, useState } from 'react';

import CreditCard from '../../public/icons/creditcard.svg';
import Visa from '../../public/icons/visa.svg';
import MasterCard from '../../public/icons/mastercard.svg';
import Discover from '../../public/icons/discover.svg';
import Amex from '../../public/icons/american-express.svg';

import ShippingForm from './ShippingForm';
import classes from './CardForm.module.css';

export default function CardForm({
  customerInfo,
  register,
  errors,
  onSubmit,
  handleSubmit,
}) {
  const [card, setCard] = useState(<CreditCard />);
  const [check, setCheck] = useState(true);
  const year = new Date().getFullYear();
  const { name, address, city, state, zip, country } = customerInfo;
  const billingAddress =
    name +
    ', ' +
    address +
    ', ' +
    city +
    ', ' +
    state +
    ', ' +
    zip +
    ', ' +
    country;

  return (
    <Fragment>
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
              if (length === 17) document.querySelector('#exp').focus();
              else {
                e.target.value += ' ';
              }
            }

            if (
              ['4', '5', '6'].includes(firstDigit) &&
              key !== 'deleteContentBackward'
            ) {
              if (length === 19) document.querySelector('#exp').focus();
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
        <div className={classes.exp}>
          <label htmlFor="exp">
            Expiration Date <span>*</span>
          </label>
          <div className={classes.cardDate}>
            <select name="exp" id="exp">
              {[...Array(12).keys()].map((item) => {
                return (
                  <option key={item} value={item + 1}>
                    {item + 1}
                  </option>
                );
              })}
            </select>
            <select name="expYear" id="expYear">
              {[...Array(20)]
                .map((_, i) => year + i)
                .map((item) => {
                  return (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        <div className={classes.sec}>
          <label htmlFor="sec">
            Security Code <span>*</span>
          </label>
          <input type="text" name="sec" id="sec" />
        </div>
      </div>

      <div className={classes.cardBilling}>
        <input
          checked={check}
          type="checkbox"
          name="billing"
          id="billing"
          onChange={() => setCheck(!check)}
        />
        <div>
          <label htmlFor="billing">
            My billing address is the same as my shipping address
          </label>
          <p>{billingAddress}</p>
        </div>
      </div>
      {!check && (
        <ShippingForm
          onSubmit={onSubmit}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          billing={true}
        />
      )}
    </Fragment>
  );
}
