import classes from './PaymentCard.module.css';

export default function PaymentCard() {
  return (
    <div className={classes.middle__right}>
      <div className={classes.background}>
        <div className={classes.middle__right__content}>
          <p>How You'll Pay</p>
          <ul className={classes.payment_options}>
            <li>
              <input type="radio" name="payment" id="card" defaultChecked />
              <label htmlFor="card">Card</label>
            </li>
            <li>
              <input type="radio" name="payment" id="applepay" />
              <label htmlFor="applepay">ApplePay</label>
            </li>
          </ul>
          <div className={classes.price_total}>
            <p>Item(s) total</p>
            <p>Total</p>
          </div>
          <div className={classes.shipping}>
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
}
