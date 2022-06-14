import { useState } from 'react';

import classes from './Payment.module.css';
import PaymentItem from './PaymentItem';

export default function Payment({
  register,
  handleSubmit,
  errors,
  setCustomerInfo,
  setSteps,
}) {
  const [selected, setSelected] = useState('');

  return (
    <aside className={classes.payment}>
      <div className={classes.paymentInfo}>
        <p>Choose a payment method</p>
        <p>
          You will not be charged until you review this order on the next page
        </p>
      </div>
      <PaymentItem
        inputId="card"
        selected={selected}
        setSelected={setSelected}
      />
      <PaymentItem
        inputId="paypal"
        selected={selected}
        setSelected={setSelected}
      />
      <PaymentItem
        inputId="gang"
        selected={selected}
        setSelected={setSelected}
      />
    </aside>
  );
}
