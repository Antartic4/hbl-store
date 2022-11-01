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
import MenuIcon from '@material-ui/icons/Menu';
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

export default function Layout({ title, children }) {
  const classes = useStyles();

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

  return (
    <>
      <Head>
        <title>{title ? title + ' - Store' : 'MF - Store'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex flex-col justify-between min-h-screen ">
        <header>
          <nav className="flex items-center justify-between px-2 py-2 shadow-md h-30">
            <div className="flex items-center px-auto ">
              <Box display="flex" alignItems="center">
                <IconButton
                  aria-label="open drawer"
                  onClick={sidebarOpenHandler}
                  className={classes.menubutton}
                >
                  <MenuIcon className={classes.navbar}></MenuIcon>
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
                    >
                      <div className="text-gray-700 text-2xl flex items-center">
                        <Typography>Ver por Categorias</Typography>
                        <IconButton
                          aria-label="close"
                          onClick={sidebarCloseHandler}
                        >
                          <CancelIcon></CancelIcon>
                        </IconButton>
                      </div>
                    </Box>
                  </ListItem>
                  <Divider light />
                  {categories.map((category) => (
                    <NextLink
                      key={category}
                      href={`/search?category=${category}`}
                      passHref
                    >
                      <ListItem
                        button
                        component="a"
                        onClick={sidebarCloseHandler}
                      >
                        <ListItemText primary={category}></ListItemText>
                      </ListItem>
                    </NextLink>
                  ))}
                </List>
              </Drawer>
              <a className="px-4">
                <Link legacyBehavior href="/">
                  <Image
                    src="https://i.ibb.co/nRPJC8J/improved-l-1.png"
                    alt="improved-l-1"
                    border="0"
                    width={70}
                    height={100}
                  />
                </Link>
              </a>
              <a className="px-4">
                <Link legacyBehavior href="/">
                  <Image
                    src="https://i.ibb.co/zsrdwXs/improved-l-2.png"
                    alt="improved-l-2"
                    border="0"
                    width={300}
                    height={300}
                  />
                </Link>
              </a>
            </div>

            <div className="flex items-center justify-between px-4">
              <div>
                <Link legacyBehavior href="/cart">
                  <div className="flex items-center justify-between pr-5">
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
              <div>
                {status === 'loading' ? (
                  'Cargando...'
                ) : session?.user ? (
                  <div className="p-1.5 bg-black rounded-lg">
                    <Menu as="div" className="relative inline-block text-xl ">
                      <Menu.Button className="text-white ">
                        {session.user.name}
                      </Menu.Button>
                      <Menu.Items className="absolute right-0 w-56 pt-5 text-xl origin-top-right bg-white shadow-lg rounded-b-xl ">
                        <Menu.Item>
                          <DropdownLink
                            className="dropdown-link"
                            href="/profile"
                          >
                            Perfil
                          </DropdownLink>
                        </Menu.Item>
                        <Menu.Item>
                          <DropdownLink
                            className="dropdown-link "
                            href="/order-history"
                          >
                            Historial de Ordenes
                          </DropdownLink>
                        </Menu.Item>
                        {session.user.isAdmin && (
                          <Menu.Item>
                            <DropdownLink
                              className="dropdown-link"
                              href="/admin/dashboard"
                            >
                              Portal Admin
                            </DropdownLink>
                          </Menu.Item>
                        )}
                        <Menu.Item>
                          <a
                            className="dropdown-link"
                            href="#"
                            onClick={logoutClickHandler}
                          >
                            Logout
                          </a>
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </div>
                ) : (
                  <div className="p-1.5 bg-black rounded">
                    <Link legacyBehavior href="/login">
                      <a className="p-2 text-2xl text-white hover:text-gray-200">
                        Acceder
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </nav>
          <Divider light />
          <div className="flex justify-center pt-2">
            <div className={classes.searchSection}>
              <Divider light />
              <form onSubmit={submitHandler} className={classes.searchForm}>
                <InputBase
                  name="query"
                  className={classes.searchInput}
                  placeholder="Buscar Productos"
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
          </div>
        </header>
        <main className="container px-4 m-auto mt-4">{children}</main>
        <footer className="flex items-center justify-center h-10 shadow-inner">
          <p>Copyright © 2022 Mariel Frias - Store</p>
        </footer>
      </div>
    </>
  );
}
