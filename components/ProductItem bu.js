/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <div className="card">
      <Link legacyBehavior href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            height={800}
            width={700}
            className="rounded shadow"
          />
        </a>
      </Link>
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
