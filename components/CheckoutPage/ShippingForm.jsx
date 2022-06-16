import { Fragment } from 'react';

import { countryList, stateList } from './listOfStatesAndCountries';

import classes from './ShippingForm.module.css';

export default function ShippingForm({ register, errors, billing }) {
  return (
    <Fragment>
      {!billing && (
        <div>
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
        </div>
      )}

      <div className={classes.item}>
        <label>
          Country <span className={classes.required}>*</span>
        </label>
        <select
          name="country"
          id="country"
          {...register(billing ? 'billingCountry' : 'country')}
        >
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
          className={
            (billing ? errors.billingName : errors.name) ? classes.error : ''
          }
          {...register(billing ? 'billingName' : 'name')}
        />
        {billing
          ? errors.billingName && (
              <p className={classes.errorMessage}>
                {errors.billingName.message}
              </p>
            )
          : errors.name && (
              <p className={classes.errorMessage}>{errors.name.message}</p>
            )}
      </div>

      <div className={classes.item}>
        <label>
          Street Address <span className={classes.required}>*</span>
        </label>
        <input
          className={
            (billing ? errors.billingAddress : errors.address)
              ? classes.error
              : ''
          }
          {...register(billing ? 'billingAddress' : 'address')}
        />
        {billing
          ? errors.billingAddress && (
              <p className={classes.errorMessage}>
                {errors.billingAddress.message}
              </p>
            )
          : errors.address && (
              <p className={classes.errorMessage}>{errors.address.message}</p>
            )}
      </div>

      <div className={classes.item}>
        <label>Apt/ Suite/ Other</label>
        <input {...register(billing ? 'billingApt' : 'apt')} />
      </div>

      <div className={classes.cityZip}>
        <div className={classes.item}>
          <label>
            Zip Code <span className={classes.required}>*</span>
          </label>
          <input
            className={
              (billing ? errors.billingZip : errors.zip) ? classes.error : ''
            }
            {...register(billing ? 'billingZip' : 'zip')}
          />
          {billing
            ? errors.billingZip && (
                <p className={classes.errorMessage}>
                  {errors.billingZip.message}
                </p>
              )
            : errors.zip && (
                <p className={classes.errorMessage}>{errors.zip.message}</p>
              )}
        </div>

        <div className={classes.item}>
          <label>
            City <span className={classes.required}>*</span>
          </label>
          <input
            className={
              (billing ? errors.billingCity : errors.city) ? classes.error : ''
            }
            {...register(billing ? 'billingCity' : 'city')}
          />
          {billing
            ? errors.billingCity && (
                <p className={classes.errorMessage}>
                  {errors.billingCity.message}
                </p>
              )
            : errors.city && (
                <p className={classes.errorMessage}>{errors.city.message}</p>
              )}
        </div>
      </div>

      <div className={classes.item}>
        <label>
          State <span className={classes.required}>*</span>
        </label>
        <select
          name="state"
          id="state"
          {...register(billing ? 'billingState' : 'state')}
        >
          {stateList.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </Fragment>
  );
}
