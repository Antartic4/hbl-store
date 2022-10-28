import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import Layout from '../../components/Layout';
import Product from '../../models/Product';
import db from '../../utils/db';
import { Store } from '../../utils/Store';

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
      <div className="py-2">
        <Link legacyBehavior href="/">
          back to products
        </Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="font-bold text-l">{product.name}</h1>
            </li>
            <li>Categoria: {product.category}</li>
            <li>Marca: {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>Descripcion: {product.description}</li>
          </ul>
        </div>
        <div className="p-5 card">
          <div className="flex justify-between mb-2">
            <div>Precio</div>
            <div>DOP ${product.price}</div>
          </div>
          <div className="flex justify-between mb-2">
            <div>Status</div>
            <div>
              {product.countInStock > 0 ? 'Disponible' : 'No disponible'}
            </div>
          </div>
          <button className="w-full primary-button" onClick={addToCartHandler}>
            Agregar al Carrito
          </button>
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
