import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../components/Layout';

export default function AboutUsScreen() {
  const router = useRouter();
  let au_title = router.locale === 'en' ? 'About Us' : 'Sobre Nosotros';
  let au_p1 =
    router.locale === 'en'
      ? 'Mariel Frias is a small fashion company for the modern woman of these days, a firm full of eccentricism and totally eclectic.'
      : 'Mariel Frias es una empresa pequeña de moda dirigida a la mujer moderna y vanguardista, una firma llena de excentricismo y totalmente ecléctica.';

  let au_p2 =
    router.locale === 'en'
      ? 'It was born in the 2000s by the hand of the designer who bears his name. Always looking for inspiration in the beauty of colors, decorating small details, seeking to close each space with harmony.'
      : 'Nació por los años 2000 de la mano de la diseñadora que lleva por nombre. Buscando siempre inspiración en la belleza de los colores, adornando las pequeños detalles, buscando cerrar cada espacio con armonía.';

  let au_p3 =
    router.locale === 'en'
      ? 'The designer studied at Mercy Jacques and Chavon Santo Domingo, reinforcing her innate talent.'
      : 'La diseñadora ejerció estudios en mercy Jacques y Chavon Santo Domingo, reforzando su talento innato y autodidacto.';

  let au_p4 =
    router.locale === 'en'
      ? 'This firm seeks to achieve the expansion of Dominican talent on a large scale and to be recognized as an international fashion house with the Latin and artisan roots that characterize us.'
      : 'Esta firma busca lograr la expansión del talento dominicano a gran escala y colocarse como casa de moda internacionalmente con las raíces latinas y artesanales que nos caracterizan.';
  return (
    <Layout title={au_title}>
      <div className="grid md:grid-cols-2 md:gap-2 justify-items-stretch">
        <div className="md:col-span-1">
          <div className="">
            <h1 className="mb-5 text-3xl text-center">Juan Miguel León</h1>
            <figure className="relative object-cover max-w-sm mx-auto transition-all duration-300 cursor-pointer filter">
              <a>
                <Image
                  className="pb-3 grayscale"
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt="image description"
                  width={400}
                  height={300}
                />
              </a>
            </figure>
          </div>
        </div>
        <div className="md:col-span-1 p-5 mr-5 bg-white "></div>
      </div>
    </Layout>
  );
}
