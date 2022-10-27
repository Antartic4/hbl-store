import Head from 'next/head';
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { Store } from '../utils/Store';

export default function Layout({ title, children }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);
  return (
    <>
      <Head>
        <title>{title ? title + ' - Store' : 'MF - Store'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 px-4 justify-between shadow-md items-center">
            <Link legacyBehavior href="/">
              <a className="text-lg font-bold">MF-Store</a>
            </Link>
            <div>
              <Link legacyBehavior href="/cart">
                <a className="p-2">
                  Cart
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>
              <Link legacyBehavior href="/login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner">
          <p>Copyright © 2022 Mariel Frias - Store</p>
        </footer>
      </div>
    </>
  );
}
