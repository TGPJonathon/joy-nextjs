import { countryList, stateList } from './listOfStatesAndCountries';

import classes from './Shipping.module.css';

export default function Shipping({
  register,
  handleSubmit,
  errors,
  setCustomerInfo,
  setSteps,
}) {
  const onSubmit = (data) => {
    setSteps([true]);
    setCustomerInfo((prevState) => {
      return { ...prevState, ...data };
    });
  };

  return (
    <div className={classes.shipping}>
      <h1 className={classes.title}>Enter Your Shipping Address</h1>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.item}>
          <label>
            Email <span className={classes.required}>*</span>
          </label>
          <input
            className={errors.email ? classes.error : ''}
            type="text"
            {...register('email')}
          />
          {errors.email && (
            <p className={classes.errorMessage}>{errors.email.message}</p>
          )}
        </div>
        <div className={classes.item}>
          <label>
            Confirm Email <span className={classes.required}>*</span>
          </label>
          <input
            className={errors.confirmEmail ? classes.error : ''}
            type="text"
            {...register('confirmEmail')}
          />
          {errors.confirmEmail && (
            <p className={classes.errorMessage}>
              {errors.confirmEmail.message}
            </p>
          )}
        </div>
        <div className={classes.item}>
          <label>
            Country <span className={classes.required}>*</span>
          </label>
          <select name="country" id="country" {...register('country')}>
            {countryList.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className={classes.item}>
          <label>
            Full Name <span className={classes.required}>*</span>
          </label>
          <input
            className={errors.name ? classes.error : ''}
            {...register('name')}
          />
          {errors.name && (
            <p className={classes.errorMessage}>{errors.name.message}</p>
          )}
        </div>
        <div className={classes.item}>
          <label>
            Street Address <span className={classes.required}>*</span>
          </label>
          <input
            className={errors.address ? classes.error : ''}
            {...register('address')}
          />
          {errors.address && (
            <p className={classes.errorMessage}>{errors.address.message}</p>
          )}
        </div>
        <div className={classes.item}>
          <label>Apt/ Suite/ Other</label>
          <input {...register('apt')} />
        </div>
        <div className={classes.cityZip}>
          <div className={classes.item}>
            <label>
              Zip Code <span className={classes.required}>*</span>
            </label>
            <input
              className={errors.zip ? classes.error : ''}
              {...register('zip')}
            />
            {errors.zip && (
              <p className={classes.errorMessage}>{errors.zip.message}</p>
            )}
          </div>
          <div className={classes.item}>
            <label>
              City <span className={classes.required}>*</span>
            </label>
            <input
              className={errors.city ? classes.error : ''}
              {...register('city')}
            />
            {errors.city && (
              <p className={classes.errorMessage}>{errors.city.message}</p>
            )}
          </div>
        </div>

        <div className={classes.item}>
          <label>
            State <span className={classes.required}>*</span>
          </label>
          <select name="state" id="state" {...register('state')}>
            {stateList.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit" className={classes.button}>
          Continue to Payment
        </button>
      </form>
    </div>
  );
}
