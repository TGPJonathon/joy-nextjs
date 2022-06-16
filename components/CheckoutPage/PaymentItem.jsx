import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Visa from '../../public/icons/visa.svg';
import MasterCard from '../../public/icons/mastercard.svg';
import Discover from '../../public/icons/discover.svg';
import Amex from '../../public/icons/american-express.svg';

import classes from './PaymentItem.module.css';

import CardForm from './CardForm';

export default function PaymentItem({
  inputId,
  selected,
  setSelected,
  customerInfo,
  setSteps,
  setCustomerInfo,
}) {
  const billingSchema = yup
    .object({
      name: yup.string().required('Please enter your name'),
      card: yup
        .string()
        .matches(/^[0-9 ]*$/gm, 'Please enter only numbers')
        .min(17, 'Must be at least 15 numbers')
        .max(19, "Can't be more than 16 numbers")
        .required('Please enter your card number'),
      sec: yup
        .string()
        .matches(/^[0-9]*$/gm, 'Please enter only numbers')
        .min(3, 'Must be at least 3 numbers')
        .max(4, "Can't be more than 4 numbers")
        .required('Please enter your security code'),
      billingName: yup.string().required('Please enter your name'),
      billingAddress: yup.string().required('Please enter an address'),
      billingApt: yup.string(),
      billingZip: yup.string().required('Please enter your zip code'),
      billingCity: yup.string().required('Please enter your city'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all', resolver: yupResolver(billingSchema) });

  const onSubmit = (data) => {
    setSteps([true, true]);
    setCustomerInfo((prevState) => {
      return { ...prevState, ...data };
    });
  };

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
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <CardForm
            register={register}
            errors={errors}
            customerInfo={customerInfo}
          />
          <button type="submit">Review Your Order</button>
        </form>
      )}
    </div>
  );
}
