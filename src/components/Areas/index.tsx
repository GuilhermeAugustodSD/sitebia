import React from 'react';
import './index.scss';

export default function Areas() {

  return (
    <section className='sectionAreas' id='areas-de-atuacao'>

      <div className='words'>
        <h2>Áreas de Atuação</h2>
        <ol>
          <li>Contratos Nacionais & Internacionais</li>
          <li>Planejamento e estruturação de novos negócios</li>
          <li>Sociedade Empresarial</li>
          <li>Acessoria para start ups</li>
          <li>Holdings</li>
        </ol>

      </div>

      <div className='blocoMaisAreas'>
        <h3>Mais áreas de atuação</h3>

        <ul>
          <li>Planejamento Patrimonial</li>
          <li>Marcas e Patente</li>
          <li>Propriedade Intelectual</li>
          <li>Mercado de Capitais</li>
          <li>Fusões e num sei o que</li>
          <li>Fusões Internacionais de capitais e bla</li>
        </ul>
      </div>
    </section>
  );
}
