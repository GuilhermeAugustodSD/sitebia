'use client'

import { GetStaticProps } from 'next';
import React, { useRef } from 'react';
import './index.scss';
import Image from 'next/image';
import contratoImage from '/public/contrato.webp';
import { useLanguage } from '../Context/Language';
import CardTestimonials from '../CardTestimonials';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

type Review = {
  user: {
    name: string;
    thumbnail: string;
  };
  rating: number;
  link: string;
  extracted_snippet: {
    original: string;
    translated: string;
  };
  date: string;
};

interface Props {
  reviews: Review[];
}

export default function Testimonials({ reviews }: Props) {
  const { language } = useLanguage();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className='sectionTestimonials' id='depoimentos'>
      <div className="rightBack">
        <div className="boxTestimunials">

          <div className="words">
            <h2>{language == 'en' ? "Client Testimonials" : "Depoimentos dos Clientes"}</h2>
            <small>
              {language == 'en'
                ? "Our clients satisfation is at the heart of everything we do. We are proud to have had the opportunity to represent and assist numerous individuals"
                : "A satisfação dos nossos clientes está no centro de tudo o que fazemos. Temos orgulho de ter tido a oportunidade de representar e auxiliar inúmeras pessoas."}
            </small>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            onBeforeInit={(swiper) => {
              setTimeout(() => {
                if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;

                  swiper.navigation?.destroy();
                  swiper.navigation?.init();
                  swiper.navigation?.update();
                }
              });
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
          >
            {reviews && reviews.map((dep, idx) => (
              <SwiperSlide key={idx}>
                <CardTestimonials
                  link={dep.link}
                  name={dep.user.name}
                  description={
                    language === 'pt'
                      ? dep.extracted_snippet.original
                      : dep.extracted_snippet.translated
                  }
                  company={dep.date}
                  cargo=""
                  grade={dep.rating}
                  picture={dep.user?.thumbnail}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-navigation-wrapper">
            <div ref={prevRef} className="swiper-button-custom">
              <FaArrowLeft />
            </div>
            <div ref={nextRef} className="swiper-button-custom">
              <FaArrowRight />
            </div>
          </div>

        </div>
      </div>

      <div className="containerImageLeft">
        <Image src={contratoImage} alt='imagem criada por IA' />
      </div>
    </section>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch('http://static.beatrizdantas.adv.br:8080/reviews.json');
    const data = await res.json();

    return {
      props: {
        reviews: data.reviews || [],
      },
      revalidate: 3600,
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        reviews: [],
      },
      revalidate: 3600,
    };
  }
};
