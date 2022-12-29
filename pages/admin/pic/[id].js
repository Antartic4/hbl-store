import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useReducer } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Layout from '../../../components/Layout';
import { getError } from '../../../utils/error';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true, errorUpdate: '' };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false, errorUpdate: '' };
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false, errorUpdate: action.payload };
    case 'UPLOAD_REQUEST':
      return { ...state, loadingUpload: true, errorUpload: '' };
    case 'UPLOAD_SUCCESS':
      return { ...state, loadingUpload: false, errorUpload: '' };
    case 'UPLOAD_FAIL':
      return {
        ...state,
        loadingUpload: false,
        errorUpload: action.payload,
      };

    default:
      return state;
  }
}
export default function AdminPicEditScreen() {
  const { query } = useRouter();
  const productId = query.id;
  const [{ loading, error, loadingUpdate, loadingUpload }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/admin/pics/${productId}`);
        dispatch({ type: 'FETCH_SUCCESS' });
        setValue('idimage', data.idimage);
        setValue('idprod', data.idprod);
        setValue('color', data.color);
        setValue('image3', data.image3);
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
  }, [productId, setValue]);

  const router = useRouter();

  const uploadHandler = async (e, imageField = 'image') => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload/`;
    try {
      dispatch({ type: 'UPLOAD_REQUEST' });
      const {
        data: { signature, timestamp },
      } = await axios('/api/admin/cloudinary-sign');

      const file = e.target.files[0];

      //resize

      const formData = new FormData();
      formData.append('file', file);
      formData.append('signature', signature);
      formData.append('timestamp', timestamp);
      formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
      const { data } = await axios.post(url, formData);

      dispatch({ type: 'UPLOAD_SUCCESS' });

      setValue(imageField, data.secure_url);
      toast.success('Archivo fue agregado exitosamente');
    } catch (err) {
      dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
      toast.error(getError(err));
    }
  };

  const uploadHandler2 = async (e, imageField2 = 'image2') => {
    const url2 = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload/`;
    try {
      dispatch({ type: 'UPLOAD_REQUEST' });
      const {
        data: { signature, timestamp },
      } = await axios('/api/admin/cloudinary-sign');

      const file2 = e.target.files[0];

      //resize

      const formData2 = new FormData();
      formData2.append('file', file2);
      formData2.append('signature', signature);
      formData2.append('timestamp', timestamp);
      formData2.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
      const { data } = await axios.post(url2, formData2);

      dispatch({ type: 'UPLOAD_SUCCESS' });

      setValue(imageField2, data.secure_url);
      toast.success('Archivo fue agregado exitosamente');
    } catch (err) {
      dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
      toast.error(getError(err));
    }
  };

  const submitHandler = async ({ idimage, idprod, color, image3 }) => {
    try {
      dispatch({ type: 'UPDATE_REQUEST' });
      await axios.put(`/api/admin/pics/${productId}`, {
        idimage,
        idprod,
        color,
        image3,
      });
      dispatch({ type: 'UPDATE_SUCCESS' });
      toast.success('Producto modificado correctamente');
    } catch (err) {
      dispatch({ type: 'UPDATE_FAIL', payload: getError(err) });
      toast.error(getError(err));
    }
  };

  return (
    <Layout title={`Editar fotos ${productId}`}>
      <div className="grid md:grid-cols-4 md:gap-5">
        <div>
          <ul>
            <li>
              <Link legacyBehavior href="/admin/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/admin/orders">
                Ordenes
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/admin/products">
                <a className="font-bold">Productos</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/admin/users">
                Usuarios
              </Link>
            </li>
          </ul>
        </div>
        <div className=" md:col-span-3">
          {loading ? (
            <div>Cargando...</div>
          ) : error ? (
            <div className="alert-error">{error}</div>
          ) : (
            <form
              className="max-w-screen-md mx-auto"
              onSubmit={handleSubmit(submitHandler)}
            >
              <h1 className="mb-4 text-xl">{`Editar Producto ${productId}`}</h1>
              <div className="mb-4">
                <label htmlFor="name">idImage</label>
                <input
                  type="text"
                  className="w-full"
                  id="idimage"
                  autoFocus
                  {...register('idimage', {
                    required: 'Porfavor introduzca idimage',
                  })}
                />
                {errors.name && (
                  <div className="text-red-500">{errors.idimage.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="price">idProd</label>
                <input
                  type="text"
                  className="w-full"
                  id="idprod"
                  {...register('idprod', {
                    required: 'Porfavor introduzca idProd',
                  })}
                />
                {errors.price && (
                  <div className="text-red-500">{errors.idprod.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="brand">Color</label>
                <input
                  type="text"
                  className="w-full"
                  id="color"
                  {...register('color', {
                    required: 'Porfavor introduzca color',
                  })}
                />
                {errors.brand && (
                  <div className="text-red-500">{errors.brand.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="brand">ImgLink</label>
                <input
                  type="text"
                  className="w-full"
                  id="image3"
                  {...register('image3', {
                    required: 'Porfavor introduzca image3',
                  })}
                />
                {errors.brand && (
                  <div className="text-red-500">{errors.image3.message}</div>
                )}
              </div>

              {/* <div className="mb-4">
                <label htmlFor="image">image2</label>
                <input
                  type="text"
                  className="w-full"
                  id="image"
                  {...register('image2', {
                    required: 'Porfavor introduzca imagen2',
                  })}
                />
                {errors.image2 && (
                  <div className="text-red-500">{errors.image2.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="imageFile2">Subir imagen 2</label>
                <input
                  type="file"
                  className="w-full"
                  id="imageFile2"
                  onChange={uploadHandler2}
                />
                {loadingUpload && <div>Subiendo...</div>}
              </div> */}

              <div className="mb-4">
                <button disabled={loadingUpdate} className="primary-button">
                  {loadingUpdate ? 'Cargando...' : 'Actualizar'}
                </button>
              </div>
              <div className="mb-4">
                <Link legacyBehavior href={`/admin/products`}>
                  Atras
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
}

AdminPicEditScreen.auth = { adminOnly: true };
