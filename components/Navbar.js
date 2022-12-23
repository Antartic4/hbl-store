import React from 'react';
import GradientBtn from './GradientBtn';

import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = ({ isMenuShown, setIsMenuShown }) => {
  const links = [
    {
      id: 1,
      link: 'shop',
      href: '/shop',
    },
    {
      id: 2,
      link: 'wishlist',
      href: '/wish',
    },
    {
      id: 3,
      link: 'cart',
      href: '/cart',
    },
    {
      id: 4,
      link: 'search',
      href: '/search',
    },
    {
      id: 5,
      link: 'contact',
      href: '/aboutus',
    },
  ];

  return (
    <>
      <div className="absolute w-full h-24 bg-black text-white z-20">
        <div className="flex justify-between items-center max-w-screen-xl text-white mx-auto px-4 h-full">
          <div>
            <Link legacyBehavior href="/">
              <a>
                <Image
                  src="https://res.cloudinary.com/dcgz0kjxb/image/upload/v1671569841/landing/HEARTBYLEON_logo_white_transp_sin_name_cy6arv.png"
                  className=""
                  alt="improved-l-1"
                  width="125"
                  height="100"
                  quality="100"
                />
              </a>
            </Link>
          </div>

          <div className="hidden lg:flex items-center text-white">
            <ul className="flex text-white">
              {links.map(({ id, link, href }) => (
                <li
                  key={id}
                  className="p-4 uppercase duration-200 hover:text-white cursor-pointer"
                >
                  <Link legacyBehavior href={href} className="text-white">
                    <a className="text-white">{link}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <Link legacyBehavior href="/shop">
              <a className="text-white">
                <GradientBtn className="ml-4 capitalize" title="Go Shopping" />
              </a>
            </Link>
          </div>

          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer text-white"
          >
            {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>

      <div
        className={`w-full bg-black text-white absolute z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown ? 'top-24 rounded-b-2xl opacity-95' : 'top-[-100%]'
        }`}
      >
        <ul>
          {links.map(({ id, link, href }) => (
            <li key={id} className="p-4 uppercase cursor-pointer text-white">
              <Link legacyBehavior href={href} smooth duration={500}>
                <a className="text-white">{link}</a>
              </Link>
            </li>
          ))}
          <GradientBtn
            className="mt-10 capitalize font-bold"
            title="Go Shopping"
            href="/shop"
          />
        </ul>
      </div>
    </>
  );
};

export default Navbar;
