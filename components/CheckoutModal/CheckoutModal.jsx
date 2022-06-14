import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Shipping from '../CheckoutPage/Shipping';

import classes from './CheckoutModal.module.css';
import Payment from '../CheckoutPage/Payment';

export default function CheckoutModal() {
  const [customerInfo, setCustomerInfo] = useState({});
  const [steps, setSteps] = useState([]);

  const schema = yup
    .object({
      email: yup
        .string()
        .email('Please enter a valid email')
        .required('Please Enter An Email'),
      confirmEmail: yup
        .string()
        .oneOf([yup.ref('email'), null], 'Emails must match'),
      name: yup.string().required('Please enter your name'),
      address: yup.string().required('Please enter an address'),
      apt: yup.string(),
      zip: yup.string().required('Please enter your zip code'),
      city: yup.string().required('Please enter your city'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all', resolver: yupResolver(schema) });

  useEffect(() => {
    console.log(customerInfo);
  }, [customerInfo]);

  const stepList = ['Shipping', 'Payment', 'Review'];

  return (
    <aside className={classes.checkout}>
      <div className={classes.top}>
        <div className={classes.steps}>
          {stepList.map((item, index) => {
            return (
              <div key={index} className={classes.step}>
                <div
                  className={
                    classes.circle +
                    (steps[index] ? ' ' + classes.confirmed : '')
                  }
                >
                  <span>{index + 1}</span>
                </div>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      </div>
      {!steps[0] && (
        <Shipping
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          setCustomerInfo={setCustomerInfo}
          setSteps={setSteps}
        />
      )}
      {steps[0] && (
        <Payment
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          setCustomerInfo={setCustomerInfo}
          setSteps={setSteps}
        />
      )}
    </aside>
  );
}
