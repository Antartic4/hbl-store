import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MyMenu from '../components/Menu';

export default function index() {
  return (
    <>
      <div className="bg-black flex justify-center items-center px-4">
        <div className="container flex justify-center">
          <a className="px-4">
            <Link legacyBehavior href="/">
              <Image
                src="https://i.ibb.co/R0HGrKr/HEARTBYLEON-logo-white-transp.png"
                className=""
                alt="improved-l-1"
                width="150"
                height="50"
                quality="100"
              />
            </Link>
          </a>
        </div>
        <MyMenu></MyMenu>
      </div>
      <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden px-auto pl-3">
        <div className="relative z-30 p-5 mx-5 text-center text-2xl text-white bg-white bg-opacity-50">
          Shop
          <a className="px-4">
            <Link legacyBehavior href="/shop">
              <Image
                src="https://res.cloudinary.com/dumdvqpid/image/upload/v1668311440/color3_scfvyw.jpg"
                className=""
                alt="improved-l-1"
                width="300"
                height="50"
                quality="100"
              />
            </Link>
          </a>
        </div>
        <div className="relative z-30 p-5 mx-5 text-2xl text-white bg-white bg-opacity-50">
          <a className="px-4">
            <Link legacyBehavior href="/shop">
              <Image
                src="https://res.cloudinary.com/dumdvqpid/image/upload/v1668311245/color1_uyltu3.jpg"
                className=""
                alt="improved-l-1"
                width="300"
                height="50"
                quality="100"
              />
            </Link>
          </a>
        </div>
        <div className="relative z-30 p-5 mx-5 text-2xl text-white bg-white bg-opacity-50">
          <a className="px-4">
            <Link legacyBehavior href="/shop">
              <Image
                src="https://res.cloudinary.com/dumdvqpid/image/upload/v1668309068/bee1_dfhyz4.jpg"
                className=""
                alt="improved-l-1"
                width="300"
                height="50"
                quality="100"
              />
            </Link>
          </a>
        </div>

        <video
          autoPlay={true}
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </header>
      <div className="max-w-lg m-auto">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          placerat a magna non varius. Proin leo felis, euismod non porta eget,
          varius sit amet sapien. Maecenas in nulla at leo convallis consectetur
          id a sapien. Nulla nec pulvinar nisi. Vivamus non facilisis lacus, et
          volutpat libero. Nulla ac odio aliquam, accumsan arcu ut, lacinia est.
          Nulla eu sem elit. Fusce nec laoreet sem, semper molestie libero.
        </p>
        <p className="mb-4">
          Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin,
          lectus et fringilla ultrices, dolor nisi scelerisque tortor, vel
          finibus magna massa non nunc. Phasellus massa quam, egestas a nisl
          sed, porta volutpat metus. Nunc sed elit ac tellus tempor cursus.
          Suspendisse potenti. Vestibulum varius rutrum nisl nec consequat.
          Suspendisse semper dignissim sem viverra semper. Nulla porttitor,
          purus nec accumsan pharetra, nisi dolor condimentum ipsum, id
          consequat nulla nunc in ligula.
        </p>
        <p className="mb-12">
          Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris
          porta dignissim hendrerit. Cras id velit varius, fermentum lectus
          vitae, ultricies dolor. In bibendum rhoncus purus vel rutrum. Nam
          vulputate imperdiet fringilla. Donec blandit libero massa. Suspendisse
          dictum diam mauris, vitae fermentum dolor tincidunt in. Pellentesque
          sollicitudin venenatis dolor, vitae scelerisque elit ultrices eu.
          Donec eget sodales risus, quis dignissim neque.
        </p>
      </div>
    </>
  );
}
