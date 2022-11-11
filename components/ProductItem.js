/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <div className="card">
      <div className="flex object-cover">
        <Link legacyBehavior href={`/product/${product.slug}`}>
          <figure className="transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale mx-auto relative max-w-sm">
            <a className="bg-red-300">
              <Image
                className="rounded-lg"
                src={product.image}
                alt={product.slug}
                width={300}
                height={200}
              />
            </a>
          </figure>
        </Link>
      </div>
      {/* div abajo 2/2 */}
      <div className="flex flex-col items-center justify-center p-5">
        <Link legacyBehavior href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>USD ${product.price}</p>
        <button
          className="primary-button"
          type="button"
          onClick={() => addToCartHandler(product)}
        >
          <h1 className="font-medium hover:font-bold text-l">
            Agregar al Carrito
          </h1>
        </button>
      </div>
    </div>
  );
}
