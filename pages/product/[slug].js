import Image from 'next/image';
import axios from 'axios';

import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Product from '../../models/Product';
import Imagetable from '../../models/Imagetable';
import Variations from '../../models/Variations';
import db from '../../utils/db';
import React, { useContext, useEffect, useState } from 'react';
import NextLink from 'next/link';
import { Store } from '../../utils/Store';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

export default function ProductScreen(props) {
  const { product, variations, colors } = props;
  const [imagen, setImagen] = useState(product.image);
  const [value, setValue] = useState('XL');
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

  const setColor = (x) => {
    setImagen(x);
  };

  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error('Disculpa. El producto se agotó.');
    }

    let color = Cookies.get('color');
    let size = Cookies.get('size');
    if (color === undefined) {
      alert(
        router.locale === 'en'
          ? 'Must select a color.'
          : 'Debe seleccionar un color.'
      );
      return;
    }

    if (size === undefined) {
      alert(
        router.locale === 'en'
          ? 'Must select a size.'
          : 'Debe seleccionar un size.'
      );
      return;
    }

    console.log(color);

    Cookies.remove('color');
    Cookies.remove('size');

    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity, color, size },
    });
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

  const color_azul = product.image;

  let slug_price =
    router.locale === 'en' ? 'Price' : router.locale === 'es' ? 'Precio' : '';

  let slug_status =
    router.locale === 'en' ? 'Status' : router.locale === 'es' ? 'Estatus' : '';

  //funciones inventando

  const objvar = JSON.parse(variations);
  const objcol = JSON.parse(colors);

  var sizeArrayAll = Object.keys(objvar).map(function (k) {
    return objvar[k].size;
  });

  let ArrColRes = [];

  var colorArrayAll = Object.keys(objcol).map(function (k) {
    return ArrColRes.push({ id: objcol[k].color, value: objcol[k].image3 });
  });

  var sizeArray = sizeArrayAll.filter((c, index) => {
    return sizeArrayAll.indexOf(c) === index;
  });

  const sizeCaps = sizeArray.map((element) => {
    return element.toUpperCase();
  });

  //otras funciones
  return (
    <Layout title={product.name}>
      <div className="py-2 mb-5">
        <NextLink legacyBehavior href="/">
          <button className="flex items-center px-8 py-2 font-medium text-black transition-all duration-300 hover:bg-gray-200 font-montserrat rounded-xl">
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
              <div className="figure2">
                <a>
                  <Image
                    className="object-cover pb-3 rounded-lg image-main"
                    src={imagen}
                    alt="image description"
                    width={300}
                    height={400}
                  />
                  <Image
                    className="object-cover pb-3 rounded-lg image-hover"
                    src={product.image2}
                    alt="image description"
                    width={300}
                    height={400}
                  />
                </a>
              </div>
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
            <li className="flex justify-between mb-3">
              <h1 className="font-bold text-l">Color:</h1>
              <div className="flex space-x-2">
                <button
                  className="p-3 bg-white border rounded-md"
                  onClick={() => {
                    setColor(ArrColRes[0].value);
                    Cookies.remove('color');
                    Cookies.set('color', 'white');
                    console.log(Cookies.get('color'));
                  }}
                ></button>
                <button
                  className="p-3 bg-black border rounded-md"
                  onClick={() => {
                    setColor(ArrColRes[1].value);
                    Cookies.remove('color');
                    Cookies.set('color', 'black');
                    console.log(Cookies.get('color'));
                  }}
                ></button>
                <button
                  className="p-3 bg-red-500 border rounded-md"
                  onClick={() => {
                    setColor(ArrColRes[2].value);
                    Cookies.remove('color');
                    Cookies.set('color', 'red');
                    console.log(Cookies.get('color'));
                  }}
                ></button>
                <button
                  className="p-3 bg-blue-600 border rounded-md"
                  onClick={() => {
                    setColor(ArrColRes[3].value);
                    Cookies.remove('color');
                    Cookies.set('color', 'blue');
                    console.log(Cookies.get('color'));
                  }}
                ></button>
                <button
                  className="p-3 bg-green-600 border rounded-md"
                  onClick={() => {
                    setColor(ArrColRes[4].value);
                    Cookies.remove('color');
                    Cookies.set('color', 'green');
                    console.log(Cookies.get('color'));
                  }}
                ></button>
              </div>
            </li>
            <li className="flex justify-between mb-3">
              <h1 className="font-bold text-l">Size:</h1>
              <select
                onChange={(e) => {
                  Cookies.remove('size');
                  Cookies.set('size', e.target.value);
                }}
                name="size"
                id="size-select"
                className=""
              >
                {sizeCaps.map((option, index) => (
                  <option key={option} value={option.value}>
                    {option}
                  </option>
                ))}
              </select>
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
                      ? 'In Stock'
                      : router.locale === 'es'
                      ? 'En Inventario'
                      : ''}
                  </div>
                ) : (
                  <div className="text-red-500">
                    {router.locale === 'en'
                      ? 'Out of Stock'
                      : router.locale === 'es'
                      ? 'Fuera de Inventario'
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
  const prodid = await Product.findOne({ idprod: product.idprod });
  const variations = await Variations.find({ idprod: product.idprod });
  const colors = await Imagetable.find({ idprod: product.idprod });
  await db.disconnect();
  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
      variations: variations ? JSON.stringify(variations) : null,
      colors: colors ? JSON.stringify(colors) : null,
    },
  };
}
