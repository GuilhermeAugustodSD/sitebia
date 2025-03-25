'use client'
import React from 'react';
import './index.scss';
import Image from 'next/image';
import Perfil from '../../../public/perfil.jpg'
import { useLanguage } from '../Context/Language';
import IconIntagram from '../Svgs/instagram';
import IconLinkedin from '../Svgs/linkedin';

export default function Sobre() {
  const { content } = useLanguage();

  return (
    <section className='sectionSobre' id='sobre'>

      <div className='containerImage'>
        <Image src={Perfil} alt='Foto de perfil Beatriz Dantas' title='Foto de perfil Beatriz Dantas'/>

      </div>

      <div className='words'>
        <h2>{content && content.sobre?.title}</h2>
        
        <p>{content && content.sobre?.description1}</p>
        <p>{content && content.sobre?.description2}</p>
        <p>{content && content.sobre?.description3}</p>

        <div className='socialIcons'>
          <IconIntagram url="https://www.instagram.com/bdantas_adv/" color="#F5F5F5"/>
          <IconLinkedin url="https://www.linkedin.com/in/beatriz-helena-dantas/" color="#F5F5F5"/>
        </div>
      </div>
    </section>
  );
}
