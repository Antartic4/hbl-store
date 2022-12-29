import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useReducer } from 'react';
import Layout from '../../components/Layout';
import { getError } from '../../utils/error';
import { useRouter } from 'next/router';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, orders: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      state;
  }
}

export default function PicsScreen() {
  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    loading: true,
    orders: [],
    error: '',
  });

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/admin/pics`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
  }, []);

  return (
    <Layout title="Admin Dashboard">
      <div className="grid md:grid-cols-4 md:gap-5">
        <div className="card text-center pt-5 ">
          <ul>
            <li>
              <Link legacyBehavior href="/admin/dashboard">
                <a className="text-blue-500 hover:text-blue-700">Dashboard</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/admin/orders">
                <a className="text-blue-500 hover:text-blue-700">Ordenes</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/admin/products">
                <a className="text-blue-500 hover:text-blue-700">Productos</a>
              </Link>
            </li>
            <li className="">
              <Link legacyBehavior href="/admin/users">
                <a className="text-blue-500 hover:text-blue-700">Usuarios</a>
              </Link>
            </li>
            <li className="pb-5">
              <Link legacyBehavior href="/admin/pics">
                <a className="font-bold text-xl">
                  {router.locale === 'en' ? 'Pictures' : 'Fotos'}
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="overflow-x-auto md:col-span-3">
          <h1 className="mb-4 text-xl">Admin Orders</h1>
          {loading ? (
            <div>Cargando...</div>
          ) : error ? (
            <div className="alert-error">{error}</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th className="px-5 text-left">ID NAT</th>
                    <th className="px-5 text-left">ID IMG</th>
                    <th className="p-5 text-left">ID PROD</th>
                    <th className="p-5 text-left">COLOR</th>
                    <th className="p-5 text-left">Link_TO_IMG3</th>
                    <th className="p-5 text-left">ACCION</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.idimage} className="border-b">
                      <td className="p-5">{order._id}</td>
                      <td className="p-10">{order.idimage}</td>
                      <td className="p-10">{order.idprod}</td>
                      <td className="p-5">{order.color}</td>
                      <td className="p-5">{order.image3}</td>
                      <td className="p-5">
                        <Link
                          legacyBehavior
                          href={`/admin/pic/${order._id}`}
                          passHref
                        >
                          <a>Detalles</a>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

PicsScreen.auth = { adminOnly: true };
