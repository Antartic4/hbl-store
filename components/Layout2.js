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
          <nav className="flex items-center px-2 py-2 shadow-md justify-evenly h-30">
            <div className="flex items-center px-auto ">
              <Box display="flex" alignItems="center">
                <IconButton
                  aria-label="open drawer"
                  onClick={sidebarOpenHandler}
                  className={classes.menubutton}
                ></IconButton>
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
                      <div className="flex items-center text-2xl text-gray-700">
                        <h1 className="text-black">
                          <Typography>Ver por Categorias</Typography>
                        </h1>
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
              <div className="text-left ">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                  rel="preconnect"
                  href="https://fonts.gstatic.com"
                  crossOrigin="true"
                />
                <link
                  href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap"
                  rel="stylesheet"
                />
                <div className="">
                  <Link href="/">
                    <buttton className="text-3xl font-bold shrink">
                      <div className="md:flex">
                        <h4 className="text-left shrink">M A R I E L</h4>
                        <h4 className="text-left shrink md:pl-5">F R I A S</h4>
                      </div>
                    </buttton>
                  </Link>
                </div>
              </div>
              {/* <a className="px-4">
                <Link legacyBehavior href="/">
                  <Image
                    src="https://i.ibb.co/zsrdwXs/improved-l-2.png"
                    alt="improved-l-2"
                    border="0"
                    width={300}
                    height={300}
                  />
                </Link>
              </a> */}
            </div>

            <div className="flex items-center justify-between px-4">
              <div className={classes.searchSection}>
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
                  <div className="p-1.5 bg-black rounded-md">
                    <Menu as="div" className="relative inline-block text-m ">
                      <Menu.Button className="text-white">
                        <h1 className="text-l">{session.user.name}</h1>
                      </Menu.Button>
                      <Menu.Items className="absolute right-0 z-10 w-56 pt-5 text-xl origin-top-right bg-white shadow-lg rounded-b-xl ">
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
              <div className="pl-3">
                <button className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="#666666"
                    className="text-red-400 w-7 h-7 hover:stroke-black"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
          <Divider light />
        </header>
        <main className="container px-4 m-auto mt-4">{children}</main>
        <footer className="flex items-center justify-center h-10 shadow-inner">
          <p>Copyright © 2022 Mariel Frias - Store</p>
        </footer>
      </div>
    </>
  );
}
