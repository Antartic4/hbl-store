import axios from 'axios';
import Link from 'next/link';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import React, { useEffect, useReducer } from 'react';
import Layout from '../../components/Layout';
import { getError } from '../../utils/error';
import { useRouter } from 'next/router';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, summary: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      state;
  }
}

function AdminDashboardScreen() {
  const [{ loading, error, summary }, dispatch] = useReducer(reducer, {
    loading: true,
    summary: { salesData: [] },
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/admin/summary`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
  }, []);

  const router = useRouter();

  const data = {
    labels: summary.salesData.map((x) => x._id),
    datasets: [
      {
        label: 'Ventas',
        backgroundColor: 'rgba(162,222,208,1)',
        data: summary.salesData.map((x) => x.totalSales),
      },
    ],
  };

  let db_title = router.locale === 'en' ? 'Dashboard' : 'Portal';
  let db_orders = router.locale === 'en' ? 'Orders' : 'Ordenes';
  let db_products = router.locale === 'en' ? 'Products' : 'Productos';
  let db_users = router.locale === 'en' ? 'Users' : 'Usuarios';
  let db_title2 =
    router.locale === 'en' ? 'Administrative Portal' : 'Portal de Admin';

  return (
    <Layout title={db_title}>
      <div className="grid md:grid-cols-4 md:gap-5">
        <div className="card text-center pt-5">
          <ul>
            <li>
              <Link legacyBehavior href="/admin/dashboard">
                <a className="font-bold text-xl">{db_title}</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/admin/orders">
                <a className="text-blue-500 hover:text-blue-700">{db_orders}</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/admin/products">
                <a className="text-blue-500 hover:text-blue-700">
                  {db_products}
                </a>
              </Link>
            </li>
            <li className="pb-5">
              <Link legacyBehavior href="/admin/users">
                <a className="text-blue-500 hover:text-blue-700">{db_users}</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h1 className="mb-4 text-2xl font-bold pt-5">{db_title2}</h1>
          {loading ? (
            <div>{router.locale === 'en' ? 'Loading...' : 'Cargando...'}</div>
          ) : error ? (
            <div className="alert-error">{error}</div>
          ) : (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="p-5 m-5 card">
                  <p className="text-3xl">${summary.ordersPrice}</p>
                  <p>{router.locale === 'en' ? 'Sales' : 'Ventas'}</p>
                  <Link legacyBehavior href="/admin/orders">
                    <a className="text-blue-700 hover:text-blue-500">
                      {router.locale === 'en' ? 'View Sales' : 'Ver Ventas'}
                    </a>
                  </Link>
                </div>
                <div className="p-5 m-5 card">
                  <p className="text-3xl">{summary.ordersCount}</p>
                  <p>{router.locale === 'en' ? 'Orders' : 'Ordenes'}</p>
                  <Link legacyBehavior href="/admin/orders">
                    <a className="text-blue-700 hover:text-blue-500">
                      {router.locale === 'en' ? 'View Orders' : 'Ver Ordenes'}
                    </a>
                  </Link>
                </div>
                <div className="p-5 m-5 card">
                  <p className="text-3xl">{summary.productsCount}</p>
                  <p>{router.locale === 'en' ? 'Products' : 'Productos'}</p>
                  <Link legacyBehavior href="/admin/products">
                    <a className="text-blue-700 hover:text-blue-500">
                      {router.locale === 'en'
                        ? 'View Products'
                        : 'Ver Productos'}
                    </a>
                  </Link>
                </div>
                <div className="p-5 m-5 card">
                  <p className="text-3xl">{summary.usersCount}</p>
                  <p>{router.locale === 'en' ? 'Users' : 'Usuarios'}</p>
                  <Link legacyBehavior href="/admin/users">
                    <a className="text-blue-700 hover:text-blue-500">
                      {router.locale === 'en' ? 'View Users' : 'Ver Usuarios'}
                    </a>
                  </Link>
                </div>
              </div>
              <h2 className="text-xl">
                {router.locale === 'en' ? 'Sales Report' : 'Reporte de Ventas'}
              </h2>
              <Bar
                options={{
                  legend: { display: true, positions: 'right' },
                }}
                data={data}
              />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

AdminDashboardScreen.auth = { adminOnly: true };
export default AdminDashboardScreen;
