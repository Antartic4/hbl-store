import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function index() {
  return (
    <div>
      <div className="items-center text-center justify-center">
        {/* tres a la izquierda */}
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* tres al medio */}
        <div>
          <a className="px-4">
            <Link legacyBehavior href="/">
              <Image
                src="https://res.cloudinary.com/dcgz0kjxb/image/upload/v1670762219/hbl_white_wo_typo_transp_aaqhxv.png"
                className="flex shrink-0"
                alt="improved-l-1"
                border="0"
                width={50}
                height={75}
              />
            </Link>
          </a>
        </div>
        {/* tres a la derecha */}
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
        <header>
          <div className="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
            klk
          </div>
        </header>
      </div>
    </div>
  );
}
