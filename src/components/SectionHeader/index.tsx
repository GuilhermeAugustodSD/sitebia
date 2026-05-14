'use client'
import React from 'react';
import './index.scss';
import { useLanguage } from '../Context/Language';
import { dataConst } from '@/constants/data';

export default function SectionHeader() {
  const { language } = useLanguage();

  return (
    <section className="sectionHeader" id="home">
      <div className='words'>
        <div className='credentials'>
          <span className='credential'>OAB/DF</span>
          <span className='credential'>{language === 'pt' ? '5+ Anos de Experiência' : '5+ Years Experience'}</span>
        </div>
        
        <h1>{dataConst[language].header.title}</h1>
        <hr />
        <p>{dataConst[language].header?.firstDescription}</p>
        <p className='second'>{dataConst[language].header?.secondDescription}</p>
      </div>
    </section>
  );
}
