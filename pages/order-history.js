import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useReducer } from 'react';
import Layout from '../components/Layout';
import { getError } from '../utils/error';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, orders: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

function OrderHistoryScreen() {
  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    loading: true,
    orders: [],
    error: '',
  });

  const router = useRouter();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/orders/history`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchOrders();
  }, []);
  return (
    <Layout title="Order History">
      <h1 className="mb-4 text-xl font-bold">
        {router.locale === 'en' ? 'Order History' : 'Historial de Ordenes'}
      </h1>
      {loading ? (
        <div>{'Cargando...'}</div>
      ) : error ? (
        <div className="alert-error">{error}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="border-b">
              <tr>
                <th className="px-5 text-left">ID</th>
                <th className="p-5 text-left">
                  {router.locale === 'en' ? 'DATE' : 'FECHA'}
                </th>
                <th className="p-5 text-left">TOTAL</th>
                <th className="p-5 text-left">
                  {router.locale === 'en' ? 'PAID' : 'PAGO'}
                </th>
                <th className="p-5 text-left">
                  {router.locale === 'en' ? 'DELIVERED' : 'ENTREGADO'}
                </th>
                <th className="p-5 text-left">
                  {router.locale === 'en' ? 'ACTION' : 'ACCION'}
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="border-b">
                  <td className="p-5">{order._id.substring(20, 24)}</td>
                  <td className="p-5">{order.createdAt.substring(0, 10)}</td>
                  <td className="p-5">${order.totalPrice}</td>
                  <td className="p-5">
                    {order.isPaid
                      ? `${order.paidAt.substring(0, 10)}`
                      : router.locale === 'en'
                      ? 'not paid'
                      : 'no paga'}
                  </td>
                  <td className="p-5">
                    {order.isDelivered
                      ? `${order.deliveredAt.substring(0, 10)}`
                      : router.locale === 'en'
                      ? 'not deliviered'
                      : 'no entregado'}
                  </td>
                  <td className="p-5">
                    <Link legacyBehavior href={`/order/${order._id}`} passHref>
                      <a>{router.locale === 'en' ? 'Details' : 'Detalles'}</a>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Layout>
  );
}

OrderHistoryScreen.auth = true;
export default OrderHistoryScreen;
