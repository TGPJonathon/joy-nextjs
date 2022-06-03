import { Fragment, useContext } from 'react';
import AppContext from '../AppContext';

import Content from '../components/CheckoutPage/Content';

export default function Checkout() {
  const { cart } = useContext(AppContext);
  const numItems = Object.keys(cart).length;

  return (
    <Fragment>
      <main>
        <Content cart={cart} numItems={numItems} />
      </main>
    </Fragment>
  );
}
