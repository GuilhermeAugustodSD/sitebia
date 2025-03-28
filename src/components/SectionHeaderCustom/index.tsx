import React from 'react';
import './index.scss';

interface SectionHeaderProps {
  title: string
  firstDescription: string
  secondDescription: string
}

export default function SectionHeaderCustom({title, firstDescription, secondDescription}: SectionHeaderProps) {

  return (
    <section className="sectionHeader" id="home"
    
    >
      <div className='words'>
        <h1>{title ?? ""}</h1>
        <hr />
        <p>{firstDescription ?? ""}</p>
        <p className='second'>{secondDescription ?? ""}</p>
      </div>
    </section>
  );
}
