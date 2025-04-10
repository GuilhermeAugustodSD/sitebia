'use client'
import React from 'react';
import './index.scss';
import Image from 'next/image';
import { useLanguage } from '../Context/Language';

import ImageFloat from '../../../public/image-2.jpg'

export default function Visao() {
  const { language, content } = useLanguage();

  return (
    <section className='sectionVisao' id='visao'>

      <div className='words'>

        <div className='bloco'>
          {language === 'pt' ? (
            <>
              <h2>Visão</h2>
              <ul>
                <li><strong>Integridade e Ética Profissional:</strong> Compromisso  com a honestidade, transparência e justiça em todas as interações e decisões.</li>
                <li><strong>Excelência e Personalização:</strong> Busca contínua pela excelência jurídica, adaptando estratégias e soluções às necessidades específicas de cada cliente.</li>
                <li><strong>Inovação e Proatividade:</strong> Inovação em práticas jurídicas e abordagem proativa para antecipar desafios e oportunidades.</li>
                <li><strong>Comprometimento com o Cliente:</strong> Dedicação total ao sucesso e crescimento dos clientes, estabelecendo relações de confiança e parceria a longo prazo.</li>
                <li><strong>Desenvolvimento Contínuos:</strong> Investimento constante no desenvolvimento profissional e acadêmico para oferecer o mais alto nível de competência e conhecimento atualizado.</li>
              </ul>
            </>
            ) : (
            <>
              <h2>Vision</h2>
              <ul>
                <li><strong>Integrity and Professional Ethics:</strong> Commitment to honesty, transparency and fairness in all interactions and decisions.</li>
                <li><strong>Excellence and Customization:</strong> Continuous pursuit of legal excellence, adapting strategies and solutions to the specific needs of each client.</li>
                <li><strong>Innovation and Proactivity:</strong> Innovation in legal practices and a proactive approach to anticipating challenges and opportunities.</li>
                <li><strong>Commitment to the Client:</strong> Total dedication to the success and growth of clients, establishing long-term trust and partnership relationships.</li>
                <li><strong>Continuous Development:</strong> Constant investment in professional and academic development to offer the highest level of competence and updated knowledge.</li>
              </ul>
            </>
          )}

        </div>

        <div className='bloco'>
          <h2>{content?.missao?.title}</h2>
          <p>{content?.missao?.description1}</p>
        </div>

        <div className='bloco'>
          <h2>{content?.valores?.title}</h2>
          <p>{content?.valores?.description1}</p>
        </div>

      </div>

      <div className='floatImage'>
        <Image src={ImageFloat} alt='teste'/>
      </div>
    </section>
  );
}
