'use client'
import React, { useRef } from 'react';
import './index.scss';
import Image from 'next/image';
import { useLanguage } from '../Context/Language';
import contratoImage from '../../../public/contrato.webp';
import { dataConst } from '@/constants/data';
import CardTestimonials from '../CardTestimonials';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Testimonials() {
  const { language } = useLanguage();
  const prevRef = useRef(null);
  const nextRef = useRef(null);


  return (
    <section className='sectionTestimonials' id='depoimentos'>
      <div className="rightBack">


        <div className="boxTestimunials">

          <div className="words">
            <h2>{language == 'en' ? "Client Testimonials" : "Depoimentos dos Clientes" }</h2>
            <small>
              {
                language == 'en' ?
                "Our clients satisfation is at the heart of everything we do. We are pround to have had the opportunity to represent and assist numerous individuals" :
                "A satisfação dos nossos clientes está no centro de tudo o que fazemos. Temos orgulho de ter tido a oportunidade de representar e auxiliar inúmeras pessoas."
              }
            </small>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            loop={true}
            onBeforeInit={(swiper) => {
              setTimeout(() => {
                if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;

                  // reinit navigation
                  if (swiper.navigation) {
                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }
                }
              });
            }}

            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
          >
            {dataConst[language].depoimentos.map((dep, idx) => (
              <SwiperSlide key={idx}>
                <CardTestimonials
                  name={dep.name ?? ""}
                  description={dep.description}
                  company={dep.company ?? ""}
                  cargo={dep.cargo ?? ""}
                  grade={dep.grade ?? 0}
                  picture={dep.picture ?? ""}
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
