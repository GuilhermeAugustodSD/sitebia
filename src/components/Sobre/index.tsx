'use client'
import React from 'react';
import './index.scss';
import Image from 'next/image';
import { useLanguage } from '../Context/Language';
import IconIntagram from '../Svgs/instagram';
import IconLinkedin from '../Svgs/linkedin';

const FOTO_PERFIL = 'https://raw.githubusercontent.com/GuilhermeAugustodSD/sitebia/b8459b4cefde26d6ff5e7ff6e2f0203cf2b8e051/public/image-5.jpg';

export default function Sobre() {
  const { content } = useLanguage();

  return (
    <section className='sectionSobre' id='sobre'>

      <div className='containerImage'>
        <Image
          src={FOTO_PERFIL}
          alt='Foto de perfil Beatriz Dantas'
          title='Foto de perfil Beatriz Dantas'
          width={800}
          height={1200}
          priority
        />
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
