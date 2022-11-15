import Link from 'next/link';
import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';
import { getError } from '../utils/error';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function LoginScreen() {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ name, email, password }) => {
    try {
      await axios.post('/api/auth/signup', {
        name,
        email,
        password,
      });
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  let register_title =
    router.locale === 'en'
      ? 'Create an account'
      : router.locale === 'es'
      ? 'Crear una cuenta'
      : '';

  let register_name =
    router.locale === 'en' ? 'Name' : router.locale === 'es' ? 'Nombre' : '';

  let warn_name =
    router.locale === 'en'
      ? 'Please enter your name.'
      : router.locale === 'es'
      ? 'Porfavor introduzca su nombre.'
      : '';

  let register_email =
    router.locale === 'en'
      ? 'Email'
      : router.locale === 'es'
      ? 'Correo electronico'
      : '';

  let warn_email =
    router.locale === 'en'
      ? 'Please enter your email.'
      : router.locale === 'es'
      ? 'Porfavor introduzca su correo electronico.'
      : '';

  let register_password =
    router.locale === 'en'
      ? 'Password'
      : router.locale === 'es'
      ? 'Contraseña'
      : '';

  let register_password2 =
    router.locale === 'en'
      ? 'Confirm password'
      : router.locale === 'es'
      ? 'Confirmar contraseña'
      : '';

  let register_validate =
    router.locale === 'en'
      ? `Passwords don't match`
      : router.locale === 'es'
      ? 'Las claves no concuerdan'
      : '';

  let register_message =
    router.locale === 'en'
      ? 'Already have an account?'
      : router.locale === 'es'
      ? 'Ya tienes una cuenta?'
      : '';

  let register_message2 =
    router.locale === 'en'
      ? 'Login!'
      : router.locale === 'es'
      ? 'Autenticarse!'
      : '';

  let register_button =
    router.locale === 'en'
      ? 'Register!'
      : router.locale === 'es'
      ? 'Registrarse!'
      : '';

  return (
    <Layout title={register_title}>
      <form
        className="max-w-screen-md mx-auto"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">{register_title}</h1>
        <div className="mb-4">
          <label htmlFor="name">{register_name}</label>
          <input
            type="text"
            className="w-full"
            id="name"
            autoFocus
            {...register('name', {
              required:
                router.locale === 'es'
                  ? 'Porfavor introduzca su nombre.'
                  : 'Please enter your name.',
            })}
          />
          {errors.name && (
            <div className="text-red-500">{errors.name.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email">{register_email}</label>
          <input
            type="email"
            {...register('email', {
              required:
                router.locale === 'en'
                  ? 'Please enter your email.'
                  : router.locale === 'es'
                  ? 'Porfavor introduzca su correo electronico.'
                  : '',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message:
                  router.locale === 'en'
                    ? 'Please enter a valid email.'
                    : router.locale === 'es'
                    ? 'Porfavor introduzca email valido.'
                    : '',
              },
            })}
            className="w-full"
            id="email"
            autoFocus
          ></input>
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password">{register_password}</label>
          <input
            type="password"
            {...register('password', {
              required:
                router.locale === 'en'
                  ? 'Please enter your password.'
                  : router.locale === 'es'
                  ? 'Porfavor introduzca su contraseña.'
                  : '',
              minLength: {
                value: 6,
                message:
                  router.locale === 'en'
                    ? 'Make sure the password has more than 5 characters.'
                    : router.locale === 'es'
                    ? 'Confirmar que la contraseña tenga mas de 5 caracteres.'
                    : '',
              },
            })}
            className="w-full"
            id="password"
            autoFocus
          />
          {errors.confirmPassword && (
            <div className="text-red-500">{errors.confirmPassword.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword">{register_password2}</label>
          <input
            className="w-full"
            type="password"
            id="confirmPassword"
            {...register('confirmPassword', {
              required:
                router.locale === 'en'
                  ? 'Please enter the password again.'
                  : router.locale === 'es'
                  ? 'Porfavor introduzca la clave nuevamente.'
                  : '',
              validate: (value) => value === getValues('password'),
              minLength: {
                value: 6,
                message:
                  router.locale === 'en'
                    ? 'Make sure the password has more than 5 characters.'
                    : router.locale === 'es'
                    ? 'Confirmar que la contraseña tenga mas de 5 caracteres.'
                    : '',
              },
            })}
          />
          {errors.confirmPassword && (
            <div className="text-red-500">{errors.confirmPassword.message}</div>
          )}
          {errors.confirmPassword &&
            errors.confirmPassword.type === 'validate' && (
              <div className="text-red-500">{register_validate}</div>
            )}
        </div>

        <div className="mb-4">
          <button className="primary-button">{register_button}</button>
        </div>
        <div className="mb-4">
          {register_message}
          <Link className="pl-3 text-blue-700" href={`/login`}>
            {register_message2}
          </Link>
        </div>
      </form>
    </Layout>
  );
}
