import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import Product from '../models/Product';
import db from '../utils/db';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Store } from '../utils/Store';
import { useContext } from 'react';
import { useRouter } from 'next/router';

export default function Home({ products }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const router = useRouter();

  const addToCartHandler = async (product) => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error(
        router.locale === 'en'
          ? 'Sorry. Product '
          : 'Disculpa. El producto se agotó.'
      );
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });

    toast.success(
      router.locale === 'en' ? 'Product Added!' : 'Producto agregado!'
    );
  };

  let titulo_variable =
    router.locale === 'en' ? 'Home Page' : 'Pagina de Inicio';

  return (
    <Layout title={titulo_variable}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductItem
            product={product}
            key={product.slug}
            addToCartHandler={addToCartHandler}
          ></ProductItem>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
