import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { XCircleIcon } from '@heroicons/react/outline';
import Layout from '../components/Layout';
import { Store } from '../utils/Store';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { toast } from 'react-toastify';

function WishScreen() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    wish: { wishItems },
  } = state;

  const removeItemHandler = (item) => {
    dispatch({ type: 'WISH_REMOVE_ITEM', payload: item });
  };
  const updateWishHandler = async (item, qty) => {
    const quantity = Number(qty);
    const { data } = await axios.get(`/api/products/${item._id}`);

    dispatch({ type: 'WISH_ADD_ITEM', payload: { ...item, quantity } });
    toast.success('WishList actualizado!');
  };
  let cart_cart =
    router.locale === 'en'
      ? 'Wishlist'
      : router.locale === 'es'
      ? 'Wishlist'
      : '';

  let cart_empty =
    router.locale === 'en'
      ? 'The wishlist is empty! '
      : router.locale === 'es'
      ? 'El wishlist esta vacio!'
      : '';
  let cart_link =
    router.locale === 'en'
      ? 'Go buy!'
      : router.locale === 'es'
      ? 'Ir a comprar!'
      : '';

  let cart_item =
    router.locale === 'en' ? 'Item' : router.locale === 'es' ? 'Articulo' : '';

  let cart_cant =
    router.locale === 'en'
      ? 'Quantity'
      : router.locale === 'es'
      ? 'Cantidad'
      : '';

  let cart_price =
    router.locale === 'en' ? 'Price' : router.locale === 'es' ? 'Precio' : '';

  let cart_action =
    router.locale === 'en' ? 'Action' : router.locale === 'es' ? 'Accion' : '';

  let cart_button =
    router.locale === 'en'
      ? 'Finalizar Compra'
      : router.locale === 'es'
      ? 'Check Out'
      : '';

  return (
    <Layout title={cart_cart}>
      <h1 className="mb-4 text-xl">{cart_cart}</h1>
      {wishItems.length === 0 ? (
        <div>
          {cart_empty}{' '}
          <Link legacyBehavior href="/">
            <a className="text-blue-600 hover:text-blue-700">{cart_link}</a>
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th className="px-5 text-left">{cart_item}</th>
                  <th className="p-5 text-right">{cart_cant}</th>
                  <th className="p-5 text-right">{cart_price}</th>
                  <th className="p-5">{cart_action}</th>
                </tr>
              </thead>
              <tbody>
                {wishItems.map((item) => (
                  <tr key={item.slug} className="border-b">
                    <td>
                      <Link legacyBehavior href={`/product/${item.slug}`}>
                        <a className="flex items-center">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}
                          ></Image>
                          &nbsp;
                          {item.name}
                        </a>
                      </Link>
                    </td>
                    <td className="p-5 text-right">
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateWishHandler(item, e.target.value)
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="p-5 text-right">${item.price}</td>
                    <td className="p-5 text-center">
                      <button onClick={() => removeItemHandler(item)}>
                        <XCircleIcon className="w-5 h-5"></XCircleIcon>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(WishScreen), { ssr: false });
