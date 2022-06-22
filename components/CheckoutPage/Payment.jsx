import { useState } from 'react';

// import { CreditCard } from 'react-square-web-payments-sdk';
// import { PaymentForm } from 'react-square-web-payments-sdk';

import classes from './Payment.module.css';
import PaymentItem from './PaymentItem';

export default function Payment({ setCustomerInfo, setSteps, customerInfo }) {
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
        setCustomerInfo={setCustomerInfo}
        customerInfo={customerInfo}
        setSteps={setSteps}
      />

      {/* <PaymentForm
        applicationId="sandbox-sq0idb-GzB_Wa1DqXEOAQaiSrZ66g"
        locationId="LWQZGVZN4Q00K"
        cardTokenizeResponseReceived={async (token, buyer) => {
          alert(JSON.stringify(token, null, 2));
        }}
      >
        <CreditCard />
      </PaymentForm> */}
    </aside>
  );
}
