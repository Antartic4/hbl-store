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
import MenuIcon from '@material-ui/icons/Menu';
import axios from 'axios';
import { useRouter } from 'next/router';
import { US, ES } from 'country-flag-icons/react/3x2';

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
  const { cart, wish } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [wishItemsCount, setWishItemsCount] = useState(0);

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
    setWishItemsCount(wish.wishItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems, wish.wishItems]);

  const logoutClickHandler = () => {
    Cookies.remove('cart');
    Cookies.remove('wish');
    dispatch({ type: 'CART_RESET' });
    dispatch({ type: 'WISH_RESET' });
    signOut({ callbackUrl: '/login' });
  };

  let nav_home = router.locale === 'en' ? 'Home' : 'Inicio';

  let nav_shop = router.locale === 'en' ? 'Shop' : 'Tienda';

  let nav_cart = router.locale === 'en' ? 'Cart' : 'Carrito';

  let nav_aboutus = router.locale === 'en' ? 'About Us' : 'Sobre Nosotros';

  let nav_search =
    router.locale === 'en' ? 'Search Products' : 'Buscar Productos';

  let nav_profile = router.locale === 'en' ? 'Profile' : 'Perfil';

  let nav_historyorders =
    router.locale === 'en' ? 'Order History' : 'Historial Ordenes';

  let nav_adminportal =
    router.locale === 'en' ? 'Admin Portal' : 'Portal de Admin';

  let nav_logout = router.locale === 'en' ? 'Logout' : 'Cerrar Session';

  let nav_login = router.locale === 'en' ? 'Login' : 'Iniciar sesión';

  let nav_myprofile = router.locale === 'en' ? 'My Profile' : 'Mi Perfil';

  return (
    <>
      <Head>
        <title>{title ? title + ' - Store' : 'HBL - Store'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex flex-col justify-between min-h-screen">
        <header className="z-10">
          <div className="pt-28">
            <nav className="fixed top-0 left-0 w-full bg-black shadow">
              <div className="container flex items-center justify-between m-auto text-gray-700">
                {/* SideBar Button + Menu */}
                <div className="block pl-3 py-3 mx-2 xl:hidden focus:outline-none">
                  <Box display="flex" alignItems="center">
                    <IconButton
                      edge="start"
                      aria-label="open drawer"
                      onClick={sidebarOpenHandler}
                    >
                      <MenuIcon
                        className={classes.navbarButton}
                        htmlColor="#ffffff"
                      />
                    </IconButton>
                  </Box>
                  <Drawer
                    anchor="left"
                    open={sidebarVisible}
                    onClose={sidebarCloseHandler}
                  >
                    <List>
                      <ListItem>
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          className="flex"
                        >
                          <Typography className="py-2 text-center">
                            <h1 className="font-bold">
                              {router.locale === 'en'
                                ? 'Shopping by Category'
                                : 'Comprando por Categoria'}
                            </h1>
                          </Typography>
                          <IconButton
                            aria-label="close"
                            onClick={sidebarCloseHandler}
                          >
                            <CancelIcon />
                          </IconButton>
                        </Box>
                      </ListItem>
                      <Divider light />
                      <Box>
                        <div className="px-3 py-3 font-bold text-center hover:bg-gray-200">
                          <Link href="/">{nav_home}</Link>
                        </div>
                        <div className="px-3 py-3 font-bold text-center hover:bg-gray-200">
                          <Link href="/">{nav_shop}</Link>
                        </div>
                        <div className="px-3 py-3 text-center hover:bg-gray-200">
                          <Link legacyBehavior href="/cart">
                            <div className="item-center">
                              <h1 className="font-bold text-center">
                                {nav_cart}
                              </h1>
                            </div>
                          </Link>
                        </div>
                        <div className="px-3 py-3 font-bold text-center hover:bg-gray-200">
                          <Link href="/aboutus">{nav_aboutus}</Link>
                        </div>
                        <Divider light />
                        <div className="px-3 py-3 font-bold text-center hover:bg-gray-200">
                          <Link href="/profile">{nav_myprofile}</Link>
                        </div>
                        <Divider light />
                        <div className="items-center px-3 py-3 font-bold text-center hover:bg-gray-200">
                          <Link href="/search">
                            <h1 className="flex items-center justify-center text-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                              </svg>
                              {nav_search}
                            </h1>
                          </Link>
                        </div>
                      </Box>
                    </List>
                  </Drawer>
                </div>
                <div className="flex items-center">
                  <button onClick={sidebarOpenHandler} className="mr-5">
                    <a className="px-4">
                      <Link legacyBehavior href="/">
                        <Image
                          src="https://res.cloudinary.com/dcgz0kjxb/image/upload/v1671569841/landing/HEARTBYLEON_logo_white_transp_sin_name_cy6arv.png"
                          className=""
                          alt="improved-l-1"
                          width="125"
                          height="100"
                          quality="100"
                        />
                      </Link>
                    </a>
                  </button>
                  <div className="items-center hidden pr-10 text-base font-semibold cursor-pointer xl:flex">
                    <Link href="/">
                      <buttton className="font-bold text-xl text-white shrink">
                        HEARTBYLEON
                      </buttton>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center">
                  <ul className="items-center hidden pr-10 text-base font-semibold cursor-pointer xl:flex">
                    <li className="px-3 py-3 text-white hover:text-gray-200">
                      {nav_home}
                    </li>
                    <li className="px-3 py-3 text-white hover:text-gray-200">
                      {nav_shop}
                    </li>
                    <li className="px-3 py-3 text-white hover:text-gray-200">
                      <Link legacyBehavior href="/cart">
                        <div className="flex items-center justify-between">
                          {nav_cart}
                        </div>
                      </Link>
                    </li>
                    <li className="items-center px-3 py-3 text-center text-white hover:text-gray-200">
                      <Link legacyBehavior href="/aboutus">
                        <div>{nav_aboutus}</div>
                      </Link>
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
                    <li className="pl-2"></li>
                    <li className="px-2 py-4">
                      <div>
                        {/* wish con number */}
                        <Link legacyBehavior href="/wish">
                          <div className="flex items-center justify-between">
                            <a className="hover:text-red-700">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="white"
                                className="w-8 h-8 hover:text-red-400 hover:fill-red-300"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                              </svg>
                            </a>
                            {wishItemsCount > 0 && (
                              <Link legacyBehavior href="/wish">
                                <span className="p-0.5 px-1 py-1 font-bold text-black bg-white rounded-full">
                                  <p className="text-sm">{wishItemsCount}</p>
                                </span>
                              </Link>
                            )}
                          </div>
                        </Link>
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
                                stroke="white"
                                className="w-8 h-8 hover:fill-red-300"
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
                                <span className="p-0.5 px-1 py-1 font-bold text-black bg-white rounded-full">
                                  <p className="text-sm">{cartItemsCount}</p>
                                </span>
                              </Link>
                            )}
                          </div>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center pr-2">
                  <div className="">
                    {status === 'loading' ? (
                      'Cargando...'
                    ) : session?.user ? (
                      <div className="p-1.5 bg-white rounded-md">
                        <Menu
                          as="div"
                          className="relative inline-block text-m "
                        >
                          <Menu.Button className="font-bold text-black">
                            <h1 className="text-l">{session.user.name}</h1>
                          </Menu.Button>
                          <Menu.Items className="absolute right-0 z-10 w-56 pt-5 text-xl origin-top-right bg-white shadow-lg rounded-b-xl ">
                            <Menu.Item>
                              <DropdownLink
                                className="text-black dropdown-link"
                                href="/profile"
                              >
                                {nav_profile}
                              </DropdownLink>
                            </Menu.Item>
                            <Menu.Item>
                              <DropdownLink
                                className="text-black dropdown-link "
                                href="/order-history"
                              >
                                {nav_historyorders}
                              </DropdownLink>
                            </Menu.Item>
                            {session.user.isAdmin && (
                              <Menu.Item>
                                <DropdownLink
                                  className="text-black dropdown-link"
                                  href="/admin/dashboard"
                                >
                                  {nav_adminportal}
                                </DropdownLink>
                              </Menu.Item>
                            )}
                            <Menu.Item>
                              <a
                                className="text-black dropdown-link"
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
                      <div className="p-1.5 bg-white rounded text-black ">
                        <Link legacyBehavior href="/login">
                          <a className="p-2 text-lg font-bold text-black">
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
        <main className="container px-4 m-auto mt-4">
          <br />
          {children}
        </main>
        <footer className="items-center justify-center h-20 pt-3 text-center shadow-inner">
          <p className="">Copyright © 2022 Heart by Leon - Store</p>
          <div className="flex justify-center items-center">
            <div>
              <Link legacyBehavior href={router.asPath} locale="en">
                <a>
                  <US title="English" width={50} className="pr-1" />
                </a>
              </Link>
            </div>
            <div>
              <Link legacyBehavior href={router.asPath} locale="es">
                <a>
                  <ES title="Español" width={50} className="pl-1" />
                </a>
              </Link>
            </div>
            <Link legacyBehavior href="https://www.instagram.com/heartbyleon/">
              <div className="pl-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-7 h-7"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
