import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie';
import CheckoutWizard from '../components/CheckoutWizard';
import Layout from '../components/Layout';
import { Store } from '../utils/Store';
import { useRouter } from 'next/router';

export default function ShippingScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress } = cart;
  const router = useRouter();

  useEffect(() => {
    setValue('fullName', shippingAddress.fullName);
    setValue('address', shippingAddress.address);
    setValue('city', shippingAddress.city);
    setValue('postalCode', shippingAddress.postalCode);
    setValue('country', shippingAddress.country);
  }, [setValue, shippingAddress]);

  const submitHandler = ({ fullName, address, city, postalCode, country }) => {
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: { fullName, address, city, postalCode, country },
    });
    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        shippingAddress: {
          fullName,
          address,
          city,
          postalCode,
          country,
        },
      })
    );

    router.push('/payment');
  };

  let shipping_title =
    router.locale === 'en'
      ? 'Shipping Address'
      : router.locale === 'es'
      ? 'Dirección de Envío'
      : '';

  let shipping_name =
    router.locale === 'en'
      ? 'Full Name'
      : router.locale === 'es'
      ? 'Nombre Completo'
      : '';

  let shipping_address =
    router.locale === 'en'
      ? 'Address'
      : router.locale === 'es'
      ? 'Direccion'
      : '';

  let shipping_city =
    router.locale === 'en' ? 'City' : router.locale === 'es' ? 'Ciudad' : '';

  let shipping_zip =
    router.locale === 'en'
      ? 'Zip Code'
      : router.locale === 'es'
      ? 'Codigo Postal'
      : '';

  let shipping_country =
    router.locale === 'en' ? 'Country' : router.locale === 'es' ? 'Pais' : '';

  return (
    <Layout title={shipping_title}>
      <CheckoutWizard activeStep={1} />
      <form
        className="max-w-screen-md mx-auto"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">{shipping_title}</h1>
        <div className="mb-4">
          <label htmlFor="fullName">{shipping_name}</label>
          <input
            className="w-full"
            id="fullName"
            autoFocus
            {...register('fullName', {
              required:
                router.locale === 'en'
                  ? 'Please enter full name'
                  : 'Favor introducir nombre completo',
            })}
          />
          {errors.fullName && (
            <div className="text-red-500">{errors.fullName.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="address">{shipping_address}</label>
          <input
            className="w-full"
            id="address"
            {...register('address', {
              required:
                router.locale === 'en'
                  ? 'Please enter address'
                  : 'Favor entrar una direccion',
              minLength: {
                value: 3,
                message:
                  router.locale === 'en'
                    ? 'Address is more than 2 chars'
                    : 'La direccion lleva más caracteres',
              },
            })}
          />
          {errors.address && (
            <div className="text-red-500">{errors.address.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="city">{shipping_city}</label>
          <input
            className="w-full"
            id="city"
            {...register('city', {
              required:
                router.locale === 'en'
                  ? 'Please enter city'
                  : 'Favor entrar ciudad',
            })}
          />
          {errors.city && (
            <div className="text-red-500 ">{errors.city.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode">{shipping_zip}</label>
          <input
            className="w-full"
            id="postalCode"
            {...register('postalCode', {
              required:
                router.locale === 'en'
                  ? 'Please enter postal code'
                  : 'Favor entrar codigo postal',
            })}
          />
          {errors.postalCode && (
            <div className="text-red-500 ">{errors.postalCode.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="country">{shipping_country}</label>
          <input
            className="w-full"
            id="country"
            {...register('country', {
              required:
                router.locale === 'en'
                  ? 'Please enter country'
                  : 'Favor entrar pais',
            })}
          />
          {errors.country && (
            <div className="text-red-500 ">{errors.country.message}</div>
          )}
        </div>
        <div className="flex justify-between mb-4">
          <button className="primary-button">
            {router.locale === 'en' ? 'Next' : 'Continuar'}
          </button>
        </div>
      </form>
    </Layout>
  );
}

ShippingScreen.auth = true;
