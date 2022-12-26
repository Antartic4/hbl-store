/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react';

import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import GradientBtn from './GradientBtn';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';

import Link from 'next/link';
import Image from 'next/image';

import img1 from './../public/images/landing/4G5A9061.JPG';
import img2 from './../public/images/landing/4G5A9143.JPG';
import img3 from './../public/images/landing/green_NCU.JPG';
import img4 from './../public/images/landing/4G5A9112.JPG';
import img5 from './../public/images/landing/4G5A9125.JPG';
import img6 from './../public/images/landing/4G5A9184.JPG';

const HeroSection = ({ isMenuShown }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const videoRef = useRef();

  const handleVideoPause = () => {
    videoRef.current.pause();
    setIsVideoPlaying(false);
  };

  const handleVideoPlay = () => {
    videoRef.current.play();
    setIsVideoPlaying(true);
  };

  return (
    <div className="flex items-end justify-center w-full  h-screen text-center text-white">
      <video
        ref={videoRef}
        src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
        autoPlay
        loop
        muted
        className="object-cover h-full w-full absolute -z-10"
      />
      <div
        className={`p-8 flex flex-col items-center justify-center duration-500 w-full  ${
          isVideoPlaying ? '' : 'bg-black/80'
        } ${isMenuShown ? 'opacity-20' : 'opacity-100'}`}
      >
        <div className="px-auto">
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            autoHeight
            autoplay={{
              delay: 2000,
            }}
          >
            <SwiperSlide>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Image
                  className="object-center justify-center"
                  src={img1}
                  alt="image slide 1"
                  width="300"
                  height="100"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Image
                  className="object-center justify-center"
                  src={img2}
                  alt="image slide 2"
                  width="300"
                  height="100"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Image
                  className="object-center justify-center"
                  src={img3}
                  alt="image slide 3"
                  width="300"
                  height="100"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Image
                  className="object-center justify-center"
                  src={img4}
                  alt="image slide 2"
                  width="300"
                  height="100"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Image
                  className="object-center justify-center"
                  src={img5}
                  alt="image slide 3"
                  width="300"
                  height="100"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Image
                  className="object-center justify-center"
                  src={img6}
                  alt="image slide 3"
                  width="300"
                  height="100"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <br />
        {/* <h1 className="text-5xl lg:text-7xl">HEARTBYLEON</h1>
        <h1 className="text-5xl lg:text-7xl capitalize mb-12">
          the <span className="text-thBlue font-bold">future</span> is here
        </h1> */}

        <div className="flex flex-row justify-center items-center">
          <Link legacyBehavior href="/shop">
            <a>
              <GradientBtn className="capitalize" title="Go Shopping" />
            </a>
          </Link>

          {isVideoPlaying ? (
            <FaPauseCircle
              size={30}
              onClick={handleVideoPause}
              className="cursor-pointer hover:scale-110 duration-200 text-thBlue"
            />
          ) : (
            <FaPlayCircle
              size={30}
              onClick={handleVideoPlay}
              className="cursor-pointer hover:scale-110 duration-200 text-thBlue"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
