'use client'
import React, { useEffect, useState } from 'react';
import './index.scss';
import Slider from 'react-slick';
import { useLanguage } from '../Context/Language';
import Avatar from '../../../public/avatar.png'
import Image from 'next/image';
import { dataConst } from '@/constants/data';

export default function Depoimentos() {
  const { language } = useLanguage();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };
  return (
    <section className='sectionDepoimentos' id='depoimentos'>

      <div className='containerDepoimentos'>
        <h2>{language == 'pt' ? 'Depoimento dos clientes' : 'Customer testimonials'}</h2>
        <Slider {...settings} className='slider'>
          {dataConst[language]?.depoimentos?.map((depoimento, index) => (
            <div key={index} className='clientes'>
              <Image src={depoimento.avatar} alt={depoimento.empresa} width={140} height={140}/>
              <div className='words'>
                <small>{depoimento.empresa}</small>
                <p>{depoimento.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
