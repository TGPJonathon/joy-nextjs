import { Fragment, useContext } from 'react';
import AppContext from '../AppContext';

import Content from '../components/CheckoutPage/Content';

export default function Checkout() {
  const { cart, setCart } = useContext(AppContext);
  const numItems = Object.keys(cart).length;

  return (
    <Fragment>
      <main>
        <Content setCart={setCart} cart={cart} numItems={numItems} />
      </main>
    </Fragment>
  );
}
