import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CheckoutWizard from '../components/CheckoutWizard';
import Layout from '../components/Layout';
import { getError } from '../utils/error';
import { Store } from '../utils/Store';

export default function PlaceOrderScreen() {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { cartItems, shippingAddress, paymentMethod } = cart;

  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;

  const itemsPrice = round2(
    cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
  );

  const shippingPrice = itemsPrice > 200 ? 0 : 15;
  const taxPrice = round2(itemsPrice * 0.15);
  const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);

  const router = useRouter();
  useEffect(() => {
    if (!paymentMethod) {
      router.push('/payment');
    }
  }, [paymentMethod, router]);

  const [loading, setLoading] = useState(false);

  const placeOrderHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post('/api/orders', {
        orderItems: cartItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      });
      setLoading(false);
      dispatch({ type: 'CART_CLEAR_ITEMS' });
      Cookies.set(
        'cart',
        JSON.stringify({
          ...cart,
          cartItems: [],
        })
      );
      router.push(`/order/${data._id}`);
    } catch (err) {
      setLoading(false);
      toast.error(getError(err));
    }
  };

  let po_title = router.locale === 'en' ? 'Place Order' : 'Colocar Orden';
  let po_t1 =
    router.locale === 'en' ? 'Shipping Address' : 'Direccion de Envio';
  let po_t2 = router.locale === 'en' ? 'Payment Method' : 'Metodo de Pago';
  let po_t3 = router.locale === 'en' ? 'Order Items' : 'Articulos en Orden';
  let po_item = router.locale === 'en' ? 'Item' : 'Articulo';
  let po_quantity = router.locale === 'en' ? 'Quantity' : 'Cantidad';
  let po_price = router.locale === 'en' ? 'Price' : 'Precio';

  let po_summary =
    router.locale === 'en' ? 'Order Summary' : 'Resumen de Orden';

  return (
    <Layout title={po_title}>
      <CheckoutWizard activeStep={3} />
      <h1 className="mb-4 text-xl">{po_title}</h1>
      {cartItems.length === 0 ? (
        <div>
          {router.locale === 'en' ? 'Cart is empty.' : 'El carrito está vacio.'}
          <Link legacyBehavior href="/">
            {router.locale === 'en' ? 'Go Shopping!' : 'Ir de compras!'}
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <div className="p-5 card">
              <h2 className="mb-2 text-lg">{po_t1}</h2>
              <div>
                {shippingAddress.fullName}, {shippingAddress.address},{' '}
                {shippingAddress.city}, {shippingAddress.postalCode},{' '}
                {shippingAddress.country}
              </div>
              <div>
                <Link legacyBehavior href="/shipping">
                  <button>
                    <h1 className="text-blue-500 font-semibold hover:text-blue-900">
                      {router.locale === 'en' ? 'Edit' : 'Editar'}
                    </h1>
                  </button>
                </Link>
              </div>
            </div>
            <div className="p-5 card">
              <h2 className="mb-2 text-lg">{po_t2}</h2>
              <div className="font-semibold">{paymentMethod}</div>
              <div>
                <Link legacyBehavior href="/payment">
                  <button>
                    <h1 className="text-blue-500 hover:text-blue-900 font-semibold">
                      {router.locale === 'en' ? 'Edit' : 'Editar'}
                    </h1>
                  </button>
                </Link>
              </div>
            </div>
            <div className="p-5 overflow-x-auto card">
              <h2 className="mb-2 text-lg">{po_t3}</h2>
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th className="px-5 text-left">{po_item}</th>
                    <th className="p-5 text-right ">{po_quantity}</th>
                    <th className="p-5 text-right ">{po_price}</th>
                    <th className="p-5 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item._id} className="border-b">
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
                      <td className="p-5 text-right ">{item.quantity}</td>
                      <td className="p-5 text-right">${item.price}</td>
                      <td className="p-5 text-right">
                        ${item.quantity * item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>
                <Link legacyBehavior href="/cart">
                  <a className="text-blue-700 hover:text-blue-900 font-semibold">
                    {router.locale === 'en' ? 'Edit' : 'Editar'}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="p-5 card">
              <h2 className="mb-2 text-lg">{po_summary}</h2>
              <ul>
                <li>
                  <div className="flex justify-between mb-2">
                    <div>{router.locale === 'en' ? 'Items' : 'Articulos'}</div>
                    <div>${itemsPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between mb-2">
                    <div>{router.locale === 'en' ? 'Taxes' : 'Impuestos'}</div>
                    <div>${taxPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between mb-2">
                    <div>{router.locale === 'en' ? 'Shipping' : 'Envio'}</div>
                    <div>${shippingPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between mb-2">
                    <div>Total</div>
                    <div>${totalPrice}</div>
                  </div>
                </li>
                <li>
                  <button
                    disabled={loading}
                    onClick={placeOrderHandler}
                    className="w-full font-bold primary-button"
                  >
                    {loading
                      ? 'Cargando...'
                      : router.locale === 'en'
                      ? 'Place Order'
                      : 'Colocar Orden'}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

PlaceOrderScreen.auth = true;
