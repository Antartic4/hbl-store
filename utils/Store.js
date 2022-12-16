import { createContext, useReducer } from 'react';
import Cookies from 'js-cookie';

export const Store = createContext();

const initialState = {
  cart: Cookies.get('cart')
    ? JSON.parse(Cookies.get('cart'))
    : { cartItems: [], shippingAddress: {}, paymentMethod: '' },
  wish: Cookies.get('wish')
    ? JSON.parse(Cookies.get('wish'))
    : { wishItems: [] },
};

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }));
      console.log(Cookies.get('cart'));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case 'WISH_ADD_ITEM': {
      const newWishItem = action.payload;
      const existWishItem = state.wish.wishItems.find(
        (item) => item.slug === newWishItem.slug
      );
      const wishItems = existWishItem
        ? state.wish.wishItems.map((item) =>
            item.name === existWishItem.name ? newWishItem : item
          )
        : [...state.wish.wishItems, newWishItem];
      Cookies.set('wish', JSON.stringify({ ...state.wish, wishItems }));
      return { ...state, wish: { ...state.wish, wishItems } };
    }
    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.slug !== action.payload.slug
      );
      Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case 'WISH_REMOVE_ITEM': {
      const wishItems = state.wish.wishItems.filter(
        (item) => item.slug !== action.payload.slug
      );
      Cookies.set('wish', JSON.stringify({ ...state.wish, wishItems }));
      return { ...state, wish: { ...state.wish, wishItems } };
    }
    case 'CART_RESET':
      return {
        ...state,
        cart: {
          cartItems: [],
          shippingAddress: { location: {} },
          paymentMethod: '',
        },
      };
    case 'CART_CLEAR_ITEMS':
      return { ...state, cart: { ...state.cart, cartItems: [] } };

    case 'SAVE_SHIPPING_ADDRESS':
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: {
            ...state.cart.shippingAddress,
            ...action.payload,
          },
        },
      };
    case 'SAVE_PAYMENT_METHOD':
      return {
        ...state,
        cart: {
          ...state.cart,
          paymentMethod: action.payload,
        },
      };
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
