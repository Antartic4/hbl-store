import Image from 'next/image';
import axios from 'axios';

import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Product from '../../models/Product';
import db from '../../utils/db';
import React, { useContext, useEffect, useState } from 'react';
import NextLink from 'next/link';
import { Store } from '../../utils/Store';
import { toast } from 'react-toastify';

export default function ProductScreen(props) {
  const { product } = props;
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  let slug_product_exist =
    router.locale === 'en'
      ? 'Product not found.'
      : router.locale === 'es'
      ? 'Producto no encontrado.'
      : '';
  if (!product) {
    return (
      <Layout title="Producto no encontrado.">{slug_product_exist}</Layout>
    );
  }

  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error('Disculpa. El producto se agotó.');
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart');
  };

  let slug_back =
    router.locale === 'en'
      ? 'Back to products'
      : router.locale === 'es'
      ? 'Volver a productos'
      : '';

  let slug_category =
    router.locale === 'en'
      ? 'Category'
      : router.locale === 'es'
      ? 'Categoria'
      : '';

  let slug_brand =
    router.locale === 'en' ? 'Brand' : router.locale === 'es' ? 'Marca' : '';

  let slug_rating =
    router.locale === 'en'
      ? 'Ratings'
      : router.locale === 'es'
      ? 'Reseñas'
      : '';

  let slug_description =
    router.locale === 'en'
      ? 'Description'
      : router.locale === 'es'
      ? 'Descripción'
      : '';

  let slug_button =
    router.locale === 'en'
      ? 'Add to Cart'
      : router.locale === 'es'
      ? 'Agregar al carrito'
      : '';

  let slug_price =
    router.locale === 'en' ? 'Price' : router.locale === 'es' ? 'Precio' : '';

  let slug_status =
    router.locale === 'en' ? 'Status' : router.locale === 'es' ? 'Estatus' : '';

  return (
    <Layout title={product.name}>
      <div className="py-2 mb-5">
        <NextLink legacyBehavior href="/">
          <button className="text-black hover:bg-gray-200 font-montserrat flex items-center py-2 px-8 font-medium rounded-xl transition-all duration-300">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            {slug_back}
          </button>
        </NextLink>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <div className="">
            <h1 className="mb-5 text-3xl text-center">{product.name}</h1>
            <figure className="relative object-cover max-w-sm mx-auto transition-all duration-300 cursor-pointer filter">
              <a>
                <Image
                  className="pb-3 rounded-lg"
                  src={product.image}
                  alt="image description"
                  width={300}
                  height={400}
                />
              </a>
            </figure>
          </div>
        </div>
        <div className="p-5 mr-5 card">
          <ul>
            <li>
              <h1 className="mb-5 text-xl font-bold">{product.name}</h1>
            </li>
            <li className="flex justify-between mb-3">
              <h1 className="font-bold text-l">{slug_category}:</h1>
              {product.category}
            </li>
            <li className="flex justify-between mb-3">
              <h1 className="font-bold">{slug_brand}:</h1> {product.brand}
            </li>
            <li className="flex justify-between mb-3">
              <h1 className="font-bold text-l">{slug_rating}:</h1>
              {product.rating}{' '}
              {router.locale === 'en'
                ? 'of'
                : router.locale === 'es'
                ? 'de'
                : ''}{' '}
              {product.numReviews}
            </li>
            <li className="flex justify-between mb-3">
              <h1 className="font-bold text-l">{slug_description}:</h1>
              {product.description}
            </li>
          </ul>
        </div>
        <div>
          <div className="p-5 card">
            <div className="flex justify-between mb-2">
              <div>{slug_price}</div>
              <div>USD ${product.price}</div>
            </div>
            <div className="flex justify-between mb-2">
              <div>Status</div>
              <div>
                {product.countInStock > 0 ? (
                  <div className="text-green-600">
                    {router.locale === 'en'
                      ? 'Available'
                      : router.locale === 'es'
                      ? 'Disponible'
                      : ''}
                  </div>
                ) : (
                  <div className="text-red-500">
                    {router.locale === 'en'
                      ? 'Unavailable'
                      : router.locale === 'es'
                      ? 'No disponible'
                      : ''}
                  </div>
                )}
              </div>
            </div>
            <button
              className="w-full primary-button"
              onClick={addToCartHandler}
            >
              {slug_button}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
    },
  };
}
