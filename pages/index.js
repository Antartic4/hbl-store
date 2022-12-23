/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import MyMenu from '../components/Menu';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Head from 'next/head';

import img1 from './../public/images/landing/4G5A9061.JPG';
import img2 from './../public/images/landing/4G5A9143.JPG';
import img3 from './../public/images/landing/green_NCU.JPG';
import img4 from './../public/images/landing/4G5A9112.JPG';
import img5 from './../public/images/landing/4G5A9125.JPG';
import img6 from './../public/images/landing/4G5A9184.JPG';

function Klk() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </Head>
      <div>
        <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
        <br />
        <br />
        <HeroSection isMenuShown={isMenuShown} />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 pl-5 pr-5 bg-black">
          <div className="rounded-lg ">
            <div className="flex object-cover items-center justify-center">
              <div className="rounded-lg ">
                <br />
                <div className="flex object-cover">
                  <Image
                    className="object-center justify-center"
                    src={img1}
                    alt="image slide 2"
                    width="300"
                    height="100"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg ">
            <div className="flex object-cover items-center justify-center">
              <div className="rounded-lg ">
                <br />
                <div className="flex object-cover">
                  <Image
                    className="object-center justify-center"
                    src={img2}
                    alt="image slide 2"
                    width="300"
                    height="100"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg ">
            <div className="flex object-cover items-center justify-center">
              <div className="rounded-lg ">
                <br />
                <div className="flex object-cover">
                  <Image
                    className="object-center justify-center"
                    src={img3}
                    alt="image slide 2"
                    width="300"
                    height="100"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg ">
            <div className="flex object-cover items-center justify-center">
              <div className="rounded-lg ">
                <br />
                <div className="flex object-cover">
                  <Image
                    className="object-center justify-center"
                    src={img4}
                    alt="image slide 2"
                    width="300"
                    height="100"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg ">
            <div className="flex object-cover items-center justify-center">
              <div className="rounded-lg ">
                <br />
                <div className="flex object-cover">
                  <Image
                    className="object-center justify-center"
                    src={img5}
                    alt="image slide 2"
                    width="300"
                    height="100"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg ">
            <div className="flex object-cover items-center justify-center">
              <div className="rounded-lg ">
                <br />
                <div className="flex object-cover">
                  <Image
                    className="object-center justify-center"
                    src={img6}
                    alt="image slide 2"
                    width="300"
                    height="100"
                  />
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Klk;
