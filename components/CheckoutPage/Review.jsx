import { useEffect, useState } from 'react';
import Image from 'next/image';

import { getShippingRates } from '../../lib/shipping';
import Visa from '../../public/icons/visa.svg';
import MasterCard from '../../public/icons/mastercard.svg';
import Discover from '../../public/icons/discover.svg';
import Amex from '../../public/icons/american-express.svg';

import classes from './Review.module.css';

export default function Review({ customerInfo }) {
  const {
    email,
    name,
    address,
    city,
    apt,
    state,
    zip,
    country,
    card,
    exp,
    expYear,
    sameBillingAddress,
  } = customerInfo;

  const cardDict = {
    3: [<Amex key={0} />, 'American Express'],
    4: [<Visa key={1} />, 'Visa'],
    5: [<MasterCard key={2} />, 'MasterCard'],
    6: [<Discover key={3} />, 'Discover'],
  };
  const currentCard = [cardDict[card[0]][0], cardDict[card[0]][1]];
  const [shippingPrices, setShippingPrices] = useState([
    'Free',
    'Free',
    'Free',
  ]);

  useEffect(() => {
    getShippingRates(zip)
      .then((response) => response)
      .then((data) => {
        const shippingRates = data.RateV4Response.Package.Postage;
        setShippingPrices([
          shippingRates[34].Rate.toFixed(2),
          shippingRates[8].Rate.toFixed(2),
          shippingRates[0].Rate.toFixed(2),
        ]);
      });
  }, [zip]);

  return (
    <aside className={classes.review}>
      <p className={classes.title}>Double check your order details</p>
      <div className={classes.top}>
        <div className={classes.col1}>
          <div className={classes.shipping}>
            <p className={classes.text + ' ' + classes.bold}>
              Shipping Address
            </p>
            <p className={classes.text}>{name}</p>
            <p className={classes.text}>{address}</p>
            <p className={classes.text}>{apt}</p>
            <p className={classes.text}>
              {city}, {state} {zip}
            </p>
            <p className={classes.text}>{country}</p>
            <button className={classes.button}>Change</button>
          </div>
          <div>
            <p className={classes.text + ' ' + classes.bold}>Email Address</p>
            <p className={classes.text}>{email}</p>
            <button className={classes.button}>Change</button>
          </div>
        </div>

        <div className={classes.col2}>
          <div className={classes.payment}>
            <p className={classes.text + ' ' + classes.bold}>Payment Method</p>
            <div className={classes.card}>
              <span>{currentCard[0]}</span>
              <div className={classes.cardInfo}>
                <p className={classes.text + ' ' + classes.cardP}>
                  {currentCard[1]} ...{card.slice(-4)} <br /> Exp: {exp} /
                  {expYear}
                </p>
              </div>
            </div>
            <button className={classes.button}>Change</button>
          </div>
          <div>
            <p className={classes.text + ' ' + classes.bold}>Billing Address</p>
            {sameBillingAddress && (
              <p className={classes.shipAdd}>Same as shipping address</p>
            )}
            <button className={classes.button}>Change</button>
          </div>
        </div>

        <div className={classes.box}>
          <p
            className={
              classes.box__item + ' ' + classes.box__title + ' ' + classes.bold
            }
          >
            Order summary
          </p>
          <div className={classes.box__item}>
            <p className={classes.box__text}>Item(s) total</p>
            <p className={classes.box__text}>$Price</p>
          </div>
          <div className={classes.box__item}>
            <p className={classes.box__text}>Shipping</p>
            <p className={classes.box__text}>Free</p>
          </div>
          <div className={classes.box__item + ' ' + classes.border}>
            <p className={classes.box__text}>Sales Tax</p>
            <p className={classes.box__text}>$Tax</p>
          </div>
          <div className={classes.box__item}>
            <p className={classes.box__text + ' ' + classes.bold}>
              Order Total
            </p>
            <p className={classes.box__text + ' ' + classes.bold}>$Cost</p>
          </div>
          <div className={classes.box__item + ' ' + classes.center}>
            <button className={classes.box__button}>Place Your Order</button>
          </div>
          <p className={classes.footnote}>
            By clicking Place your order to some place, you agree to my Terms of
            Use and Privacy Policy.
          </p>
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.items}>
          <div className={classes.flex}>
            <div className={classes.image}>
              <Image src="/book1.webp" height={100} width={100} alt="book" />
            </div>
            <div className={classes.content}>
              <p className={classes.content__text}>
                Name of the Item Here Please
              </p>
              <p className={classes.content__text}>Quantity: 7</p>
              <p className={classes.content__text}>$9.99</p>
            </div>
          </div>
          <div className={classes.flex}>
            <div className={classes.image}>
              <Image src="/book1.webp" height={100} width={100} alt="book" />
            </div>
            <div className={classes.content}>
              <p className={classes.content__text}>
                Name of the Item Here Please
              </p>
              <p className={classes.content__text}>Quantity: 7</p>
              <p className={classes.content__text}>$9.99</p>
            </div>
          </div>
        </div>

        <div className={classes.shippingContainer}>
          <p className={classes.bold + ' ' + classes.shippingTitle}>
            Choose a shipping method
          </p>
          <div className={classes.x}>
            <div className={classes.test}>
              <input type="radio" name="ship" id="standard" />
              <div className={classes.shipText}>
                <label htmlFor="ship">Standard Shipping</label>
                <span className={classes.shippingFootnote}>
                  Estimated Delivery:
                </span>
              </div>
            </div>
            <span>${shippingPrices[0]}</span>
          </div>
          <div className={classes.x}>
            <div className={classes.test}>
              <input type="radio" name="ship" id="priority" />
              <div className={classes.shipText}>
                <label htmlFor="ship">Priority Mail</label>
                <span className={classes.shippingFootnote}>
                  Estimated Delivery:
                </span>
              </div>
            </div>
            <span>${shippingPrices[1]}</span>
          </div>
          <div className={classes.x}>
            <div className={classes.test}>
              <input type="radio" name="ship" id="express" />
              <div className={classes.shipText}>
                <label htmlFor="ship">Express Shipping</label>
                <span className={classes.shippingFootnote}>
                  Estimated Delivery:
                </span>
              </div>
            </div>
            <span>${shippingPrices[2]}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
