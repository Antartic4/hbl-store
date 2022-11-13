import Image from 'next/image';
import axios from 'axios';

import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Product from '../../models/Product';
import db from '../../utils/db';
import React, { useContext, useEffect, useState } from 'react';
import NextLink from 'next/link';
import {
  Grid,
  Link,
  List,
  ListItem,
  Typography,
  Card,
  Button,
  TextField,
  CircularProgress,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import useStyles from '../../utils/styles';
import { Store } from '../../utils/Store';
import { getError } from '../../utils/error';
import { toast } from 'react-toastify';

export default function ProductScreen(props) {
  const { product } = props;
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  if (!product) {
    return (
      <Layout title="Producto no encontrado.">Producto no encontrado.</Layout>
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

  return (
    <Layout title={product.name}>
      <div className="py-2 mb-5">
        <NextLink legacyBehavior href="/">
          <button class="text-black hover:bg-gray-200 font-montserrat flex items-center py-2 px-8 font-medium rounded-xl transition-all duration-300">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            Volver a productos
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
              <h1 className="font-bold text-l"> Categoria:</h1>
              {product.category}
            </li>
            <li className="flex justify-between mb-3">
              <h1 className="font-bold">Marca:</h1> {product.brand}
            </li>
            <li className="flex justify-between mb-3">
              <h1 className="font-bold text-l">Reseñas:</h1>
              {product.rating} de {product.numReviews}
            </li>
            <li className="flex justify-between mb-3">
              <h1 className="font-bold text-l">Descripcion:</h1>{' '}
              {product.description}
            </li>
          </ul>
        </div>
        <div>
          <div className="p-5 card">
            <div className="flex justify-between mb-2">
              <div>Precio</div>
              <div>USD ${product.price}</div>
            </div>
            <div className="flex justify-between mb-2">
              <div>Status</div>
              <div>
                {product.countInStock > 0 ? (
                  <div className="text-green-600">Disponible</div>
                ) : (
                  <div className="text-red-500">No disponible</div>
                )}
              </div>
            </div>
            <button
              className="w-full primary-button"
              onClick={addToCartHandler}
            >
              Agregar al Carrito
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
