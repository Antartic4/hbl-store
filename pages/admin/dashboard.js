import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';

function AdminDashboardScreen() {
  return (
    <Layout title="Admin Dashboard">
      <div className="grid md:grid-cols-4 md:gap-5">
        <div>
          <ul>
            <li>
              <Link legacyBehavior href="/admin/dashboard">
                <a className="font-bold">Dashboard</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/admin/orders">
                Ordenes
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/admin/products">
                Productos
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/admin/users">
                Usuarios
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h1 className="mb-4 text-xl">Portal de Admin</h1>
          {loading ? (
            <div>Cargando...</div>
          ) : error ? (
            <div className="alert-error">{error}</div>
          ) : (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="card m-5 p-5">
                  <p className="text-3xl">${summary.ordersPrice}</p>
                  <p>Ventas</p>
                  <Link legacyBehavior href="/admin/orders">
                    Ver Ventas
                  </Link>
                </div>
                <div className="card m-5 p-5">
                  <p className="text-3xl">${summary.ordersCount}</p>
                  <p>Ordenes</p>
                  <Link legacyBehavior href="/admin/orders">
                    Ver Ordenes
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

AdminDashboardScreen.auth = { adminOnly: true };
export default AdminDashboardScreen;
