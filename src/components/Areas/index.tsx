'use client'
import React from 'react';
import './index.scss';
import { useLanguage } from '../Context/Language';
import { dataConst, iconMap } from '@/constants/data';
import BoxArea from '../BoxArea';

export default function Areas() {
  const { language } = useLanguage()

  return (
    <section className='sectionAreas' id='areas-de-atuacao'>

      {/* <div className='words'>
        
        <ol>
          <li>Contratos Nacionais & Internacionais</li>
          <li>Planejamento e estruturação de novos negócios</li>
          <li>Sociedade Empresarial</li>
          <li>Acessoria para start ups</li>
          <li>Holdings</li>
        </ol>

      </div> */}

     {/*  <div className='blocoMaisAreas'>
        <h3>{language == 'pt' ? "Mais áreas de atuação" : "More Areas"}</h3>

        <ul>
          <li>Planejamento Patrimonial</li>
          <li>Marcas e Patente</li>
          <li>Propriedade Intelectual</li>
          <li>Mercado de Capitais</li>
          <li>Fusões e num sei o que</li>
          <li>Fusões Internacionais de capitais e bla</li>
        </ul>
      </div> */}
      <div className="container">
        <h2>{language == 'pt' ? "Áreas de Atuação" : "Areas of Practice"}</h2>
        <div className="boxAreas">
          {
            dataConst[language].areas.map((area, index) => {
              const IconComponent = iconMap[area.icon as keyof typeof iconMap];
              return (
              <BoxArea
                key={`${index}-${area.hat}`}
                title={area.title}
                hat={area.hat}
                icon={<IconComponent size={40} color='var(--primary-color)'/>}
                slug={area.slug}
              />
            );})
          }
        </div>
      </div>


    </section>
  );
}
