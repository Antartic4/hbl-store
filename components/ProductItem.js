/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <div className="rounded-lg ">
      <div className="flex object-cover">
        <Link legacyBehavior href={`/product/${product.slug}`}>
          <figure className="relative max-w-sm mx-auto">
            <a className="bg-red-300 ">
              {/* <Image
                className="rounded-lg"
                src={product.image}
                alt={product.slug}
                width={300}
                height={200}
              /> */}
              <div className="figure">
                <img className="image-main" src={product.image} alt="" />
                <img className="image-hover" src={product.image2} alt="" />
              </div>
            </a>
          </figure>
        </Link>
      </div>
      {/* div abajo 2/2 */}
      <div className="flex flex-col items-center justify-center p-5">
        <Link legacyBehavior href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg font-bold">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>USD ${product.price}</p>
        <div className="flex w-full justify-evenly">
          <button
            className=""
            type="button"
            onClick={() => addToCartHandler(product)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 hover:text-red-400 hover:fill-red-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
          <button
            className=""
            type="button"
            onClick={() => addToCartHandler(product)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
