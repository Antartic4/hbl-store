/* eslint-disable @next/next/no-page-custom-font */
import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import { Menu } from '@headlessui/react';
import 'react-toastify/dist/ReactToastify.css';
import useStyles from '../utils/styles';
import { Store } from '../utils/Store';
import DropdownLink from './DropdownLink';
import { getError } from '../utils/error';
import CancelIcon from '@material-ui/icons/Cancel';
import SearchIcon from '@material-ui/icons/Search';
import NextLink from 'next/link';
import Cookies from 'js-cookie';
import Image from 'next/image';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Layout({ title, children }) {
  const classes = useStyles();

  const router = useRouter();
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const sidebarOpenHandler = () => {
    setSidebarVisible(true);
  };

  const sidebarCloseHandler = () => {
    setSidebarVisible(false);
  };

  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`/api/products/categories`);
      setCategories(data);
    } catch (err) {
      toast(getError(err), { variant: 'error' });
    }
  };

  const [query, setQuery] = useState('');
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const { status, data: session } = useSession();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  };

  let nav_home =
    router.locale === 'en'
      ? 'Home'
      : router.locale === 'es'
      ? 'Inicio'
      : router.locale === 'fr'
      ? 'Page Principale'
      : '';

  let nav_shop =
    router.locale === 'en'
      ? 'Shop'
      : router.locale === 'es'
      ? 'Tienda'
      : router.locale === 'fr'
      ? 'Boutique'
      : '';

  let nav_cart =
    router.locale === 'en'
      ? 'Cart'
      : router.locale === 'es'
      ? 'Carrito'
      : router.locale === 'fr'
      ? 'Chariot'
      : '';

  let nav_aboutus =
    router.locale === 'en'
      ? 'About Us'
      : router.locale === 'es'
      ? 'Sobre Nosotros'
      : router.locale === 'fr'
      ? 'À propos de nous'
      : '';

  let nav_search =
    router.locale === 'en'
      ? 'Search products'
      : router.locale === 'es'
      ? 'Buscar productos'
      : router.locale === 'fr'
      ? 'Recherche de produits'
      : '';

  let nav_profile =
    router.locale === 'en'
      ? 'Profile'
      : router.locale === 'es'
      ? 'Perfil'
      : router.locale === 'fr'
      ? 'Profil'
      : '';

  let nav_historyorders =
    router.locale === 'en'
      ? 'Order History'
      : router.locale === 'es'
      ? 'Historial Ordenes'
      : router.locale === 'fr'
      ? 'Historique des commandes'
      : '';

  let nav_adminportal =
    router.locale === 'en'
      ? 'Admin Portal'
      : router.locale === 'es'
      ? 'Portal de Admin'
      : router.locale === 'fr'
      ? `Portail d'administration`
      : '';

  let nav_logout =
    router.locale === 'en'
      ? 'Logout'
      : router.locale === 'es'
      ? 'Cerrar Session'
      : router.locale === 'fr'
      ? 'Se déconnecter'
      : '';

  let nav_login =
    router.locale === 'en'
      ? 'Login'
      : router.locale === 'es'
      ? 'Iniciar sesión'
      : router.locale === 'fr'
      ? 'Authentifier'
      : '';

  return (
    <>
      <Head>
        <title>{title ? title + ' - Store' : 'MF - Store'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex flex-col justify-between min-h-screen ">
        <header className="z-10">
          <div className="pt-32">
            <nav className="fixed top-0 left-0 w-full bg-white shadow">
              <div className="container flex items-center justify-between pl-5 m-auto text-gray-700">
                <div className="flex items-center">
                  <button onClick={sidebarOpenHandler} className="mr-5">
                    <a className="px-4">
                      <Link legacyBehavior href="/">
                        <Image
                          src="https://i.ibb.co/nRPJC8J/improved-l-1.png"
                          className="flex shrink-0"
                          alt="improved-l-1"
                          border="0"
                          width={50}
                          height={75}
                        />
                      </Link>
                    </a>
                  </button>
                  <div className="">
                    <Link href="/">
                      <buttton className="text-2xl font-bold shrink">
                        <div className="md:flex">
                          <h4 className="text-left shrink">M A R I E L</h4>
                          <h4 className="text-left shrink md:pl-5">
                            F R I A S
                          </h4>
                        </div>
                      </buttton>
                    </Link>
                  </div>
                </div>
                <ul className="items-center hidden pr-10 text-base font-semibold cursor-pointer xl:flex">
                  <li className="px-3 py-3 hover:bg-gray-200">{nav_home}</li>
                  <li className="px-3 py-3 hover:bg-gray-200">{nav_shop}</li>
                  <li className="px-3 py-3 hover:bg-gray-200">
                    <Link legacyBehavior href="/cart">
                      <div className="flex items-center justify-between">
                        {nav_cart}
                      </div>
                    </Link>
                  </li>
                  <li className="px-3 py-3 text-center items-center hover:bg-gray-200">
                    {nav_aboutus}
                  </li>
                </ul>
                <ul className="items-center hidden text-base font-semibold cursor-pointer justify-evenly xl:flex">
                  <li className="px-3 py-3">
                    <div className={classes.searchSection}>
                      <form
                        onSubmit={submitHandler}
                        className={classes.searchForm}
                      >
                        <InputBase
                          name="query"
                          className={classes.searchInput}
                          placeholder={nav_search}
                          onChange={queryChangeHandler}
                        />
                        <IconButton
                          type="submit"
                          className={classes.iconButton}
                          aria-label="search"
                        >
                          <SearchIcon />
                        </IconButton>
                      </form>
                    </div>
                  </li>
                  <li className="px-2 py-4">
                    <div>
                      <Link legacyBehavior href="/cart">
                        <div className="flex items-center justify-between">
                          <a className="hover:text-red-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="black"
                              className="w-8 h-8"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                              />
                            </svg>
                          </a>
                          {cartItemsCount > 0 && (
                            <Link legacyBehavior href="/cart">
                              <span className="p-0.5 px-1 py-1 font-medium text-white bg-black rounded-full">
                                <p className="text-sm">{cartItemsCount}</p>
                              </span>
                            </Link>
                          )}
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="px-2 py-4">
                    <div className="pl-3">
                      <button className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="#666666"
                          className="text-red-400 w-7 h-7 hover:stroke-black"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                          />
                          <button onClick={sidebarOpenHandler} className="mr-5">
                            <Link legacyBehavior href="/">
                              <a className="px-4"></a>
                            </Link>
                          </button>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                </ul>
                <div className="flex items-center justify-center bg">
                  <button className="block px-4 py-3 mx-2 rounded xl:hidden focus:outline-none hover:bg-gray-200 group">
                    <div className="w-5 h-1 mb-1 bg-gray-600"></div>
                    <div className="w-5 h-1 mb-1 bg-gray-600"></div>
                    <div className="w-5 h-1 bg-gray-600"></div>
                    <div className="absolute top-0 z-30 w-8/12 h-screen transition-all duration-300 bg-white border opacity-100 -right-full group-focus:right-0 group-focus:opacity-100">
                      <ul className="z-10 flex flex-col items-center w-full pt-10 text-base bg-white cursor-pointer">
                        <li className="w-full px-6 py-4 hover:bg-gray-200">
                          <Link legacyBehavior href="/">
                            <a>{nav_home}</a>
                          </Link>
                        </li>
                        <li className="w-full px-6 py-4 hover:bg-gray-200">
                          <Link legacyBehavior href="/search">
                            <a>{nav_shop}</a>
                          </Link>
                        </li>
                        <li className="w-full px-6 py-4 hover:bg-gray-200">
                          <Link legacyBehavior href="/">
                            <a>{nav_home}</a>
                          </Link>
                        </li>
                        <li className="w-full px-6 py-4 hover:bg-gray-200">
                          <div className="">
                            <Link legacyBehavior href="/cart">
                              <buttton className="text-md shrink">
                                <div className="md:flex">{nav_cart}</div>
                              </buttton>
                            </Link>
                          </div>
                        </li>
                        <li className="w-full px-6 py-4 hover:bg-gray-200">
                          <div className="">
                            <Link legacyBehavior href="/aboutus">
                              <buttton className="text-md shrink">
                                <div className="md:flex text-center">
                                  {nav_aboutus}
                                </div>
                              </buttton>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </button>
                  <div className="pr-3">
                    {status === 'loading' ? (
                      'Cargando...'
                    ) : session?.user ? (
                      <div className="p-1.5 bg-black rounded-md">
                        <Menu
                          as="div"
                          className="relative inline-block text-m "
                        >
                          <Menu.Button className="text-white">
                            <h1 className="text-l">{session.user.name}</h1>
                          </Menu.Button>
                          <Menu.Items className="absolute right-0 z-10 w-56 pt-5 text-xl origin-top-right bg-white shadow-lg rounded-b-xl ">
                            <Menu.Item>
                              <DropdownLink
                                className="dropdown-link"
                                href="/profile"
                              >
                                {nav_profile}
                              </DropdownLink>
                            </Menu.Item>
                            <Menu.Item>
                              <DropdownLink
                                className="dropdown-link "
                                href="/order-history"
                              >
                                {nav_historyorders}
                              </DropdownLink>
                            </Menu.Item>
                            {session.user.isAdmin && (
                              <Menu.Item>
                                <DropdownLink
                                  className="dropdown-link"
                                  href="/admin/dashboard"
                                >
                                  {nav_adminportal}
                                </DropdownLink>
                              </Menu.Item>
                            )}
                            <Menu.Item>
                              <a
                                className="dropdown-link"
                                href="#"
                                onClick={logoutClickHandler}
                              >
                                {nav_logout}
                              </a>
                            </Menu.Item>
                          </Menu.Items>
                        </Menu>
                      </div>
                    ) : (
                      <div className="p-1.5 bg-black rounded">
                        <Link legacyBehavior href="/login">
                          <a className="p-2 text-lg text-white hover:text-gray-200">
                            {nav_login}
                          </a>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <main className="container px-4 m-auto mt-4">{children}</main>
        <footer className="text-center pt-3 items-center justify-center h-20 shadow-inner">
          <p>Copyright © 2022 Mariel Frias - Store</p>
          <ul>
            {router.locales.map((locale) => (
              <li key={locale}>
                <Link legacyBehavior href={router.asPath} locale={locale}>
                  <a>{locale}</a>
                </Link>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </>
  );
}
