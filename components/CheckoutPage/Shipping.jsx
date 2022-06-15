import ShippingForm from './ShippingForm';

import classes from './Shipping.module.css';

export default function Shipping({ register, handleSubmit, errors, onSubmit }) {
  return (
    <div className={classes.shipping}>
      <h1 className={classes.title}>Enter Your Shipping Address</h1>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <ShippingForm register={register} errors={errors} billing={false} />
        <button type="submit" className={classes.button}>
          Continue to Payment
        </button>
      </form>
    </div>
  );
}
