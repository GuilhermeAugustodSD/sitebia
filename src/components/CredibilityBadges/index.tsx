'use client'
import React from 'react';
import './index.scss';
import { FaShieldAlt, FaAward, FaCertificate, FaUsers, FaStar, FaClock } from 'react-icons/fa';
import { useLanguage } from '../Context/Language';

export default function CredibilityBadges() {
  const { language } = useLanguage();

  const badges = [
    {
      icon: <FaShieldAlt />,
      title: language === 'pt' ? 'OAB Registrada' : 'BAR Registered',
      subtitle: language === 'pt' ? 'Ordem dos Advogados do Brasil' : 'Brazilian Bar Association',
      color: '#2563eb'
    },
    {
      icon: <FaAward />,
      title: language === 'pt' ? '5+ Anos' : '5+ Years',
      subtitle: language === 'pt' ? 'de Experiência' : 'of Experience',
      color: '#dc2626'
    },
    {
      icon: <FaCertificate />,
      title: language === 'pt' ? 'Especialização' : 'Specialization',
      subtitle: language === 'pt' ? 'Direito Empresarial - IBMEC' : 'Corporate Law - IBMEC',
      color: '#059669'
    },
    {
      icon: <FaUsers />,
      title: language === 'pt' ? '100+' : '100+',
      subtitle: language === 'pt' ? 'Empresas Atendidas' : 'Companies Served',
      color: '#7c3aed'
    },
    {
      icon: <FaStar />,
      title: '4.9/5',
      subtitle: language === 'pt' ? 'Avaliação Média' : 'Average Rating',
      color: '#ea580c'
    },
    {
      icon: <FaClock />,
      title: language === 'pt' ? '24h' : '24h',
      subtitle: language === 'pt' ? 'Tempo de Resposta' : 'Response Time',
      color: '#0891b2'
    }
  ];

  return (
    <section className="credibility-section">
      <div className="container">
        <div className="credibility-header">
          <h2>
            {language === 'pt' 
              ? 'Por que Confiar na Nossa Advocacia?' 
              : 'Why Trust Our Law Practice?'
            }
          </h2>
          <p>
            {language === 'pt'
              ? 'Experiência comprovada, resultados reais e compromisso com a excelência jurídica.'
              : 'Proven experience, real results and commitment to legal excellence.'
            }
          </p>
        </div>

        <div className="badges-grid">
          {badges.map((badge, index) => (
            <div key={index} className="badge-item" style={{ '--badge-color': badge.color } as React.CSSProperties}>
              <div className="badge-icon">
                {badge.icon}
              </div>
              <div className="badge-content">
                <h3>{badge.title}</h3>
                <p>{badge.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="trust-indicators">
          <div className="trust-item">
            <div className="trust-icon">🏆</div>
            <h4>{language === 'pt' ? 'Reconhecimento' : 'Recognition'}</h4>
            <p>
              {language === 'pt'
                ? 'Participação em competições internacionais de Direito (Philip C. Jessup)'
                : 'Participation in international law competitions (Philip C. Jessup)'
              }
            </p>
          </div>

          <div className="trust-item">
            <div className="trust-icon">🌐</div>
            <h4>{language === 'pt' ? 'Experiência Internacional' : 'International Experience'}</h4>
            <p>
              {language === 'pt'
                ? 'Atuação na ONU Migração - Projetos nacionais e internacionais'
                : 'Experience at UN Migration - National and international projects'
              }
            </p>
          </div>

          <div className="trust-item">
            <div className="trust-icon">💼</div>
            <h4>{language === 'pt' ? 'Especialização' : 'Specialization'}</h4>
            <p>
              {language === 'pt'
                ? 'Foco em Direito Societário e Mercado de Capitais pelo IBMEC'
                : 'Focus on Corporate Law and Capital Markets by IBMEC'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
