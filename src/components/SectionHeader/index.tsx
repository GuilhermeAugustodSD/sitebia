'use client'
import React from 'react';
import './index.scss';
import { useLanguage } from '../Context/Language';
import { dataConst } from '@/constants/data';

export default function SectionHeader() {
  const { language } = useLanguage();

  return (
    <section className="sectionHeader" id="home"
    
    >
      <div className='words'>
        <h1>{dataConst[language].header.title}</h1>
        <hr />
        <p>{dataConst[language].header?.firstDescription}</p>
        <p className='second'>{dataConst[language].header?.secondDescription}</p>
      </div>
    </section>
  );
}
