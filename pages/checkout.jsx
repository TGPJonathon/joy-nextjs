import { Fragment, useContext } from 'react';
import Head from 'next/head';
import AppContext from '../AppContext';

import Content from '../components/CheckoutPage/Content';

export default function Checkout() {
  const { cart, setCart } = useContext(AppContext);
  const numItems = Object.keys(cart).length;

  return (
    <Fragment>
      <Head>
        <title>Checkout</title>
        <meta name="description" content="Are you ready to buy?" />
      </Head>
      <main>
        <Content setCart={setCart} cart={cart} numItems={numItems} />
      </main>
    </Fragment>
  );
}
