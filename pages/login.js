import Link from 'next/link';
import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';
import { getError } from '../utils/error';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

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
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ email, password }) => {
    try {
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

  let login_login =
    router.locale === 'en'
      ? 'Login'
      : router.locale === 'es'
      ? 'Iniciar sesión'
      : router.locale === 'fr'
      ? 'Authentifier'
      : '';

  let login_email =
    router.locale === 'en'
      ? 'Email'
      : router.locale === 'es'
      ? 'Correo electronico'
      : '';

  let login_password =
    router.locale === 'en'
      ? 'Password'
      : router.locale === 'es'
      ? 'Contraseña'
      : '';

  let login_mensaje =
    router.locale === 'en'
      ? `Don't have an account?`
      : router.locale === 'es'
      ? 'No tienes cuenta?'
      : '';

  let login_mensaje2 =
    router.locale === 'en'
      ? ' Create an Account'
      : router.locale === 'es'
      ? ' Crear cuenta'
      : '';

  return (
    <Layout title="Login">
      <form
        className="max-w-screen-md mx-auto"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">{login_login}</h1>
        <div className="mb-4">
          <label htmlFor="email">{login_email}</label>
          <input
            type="email"
            {...register('email', {
              required: 'Porfavor introduzca email.',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Porfavor introduzca email valido.',
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
          <label htmlFor="password">{login_password}</label>
          <input
            type="password"
            {...register('password', {
              required: 'Introduzca clave',
              minLength: {
                value: 6,
                message: 'password is more than 5 chars',
              },
            })}
            className="w-full"
            id="password"
            autoFocus
          ></input>
        </div>
        <div className="mb-4">
          <button className="primary-button">{login_login}</button>
        </div>
        <div className="mb-4">
          {login_mensaje}
          <Link
            className="text-blue-600"
            href={`/register?redirect=${redirect || '/'}`}
          >
            {login_mensaje2}
          </Link>
        </div>
      </form>
    </Layout>
  );
}
