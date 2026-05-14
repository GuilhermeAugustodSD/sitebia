'use client'
import React, { useState, useEffect } from 'react';
import './index.scss';
import { FaWhatsapp, FaTimes, FaHeadset, FaArrowLeft } from 'react-icons/fa';
import { useLanguage } from '../Context/Language';

type ServiceType = 'business' | 'contracts' | 'general' | null;

export default function FloatingWhatsApp() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentStep, setCurrentStep] = useState<'services' | 'form'>('services');
  const [selectedService, setSelectedService] = useState<ServiceType>(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    message: ''
  });
  const [useStructuredFormat, setUseStructuredFormat] = useState(false); // Por padrão usa formato simples

  useEffect(() => {
    // Mostrar após 3 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const services = {
    business: {
      pt: {
        title: '💼 Consultoria Empresarial',
        description: 'Direito societário, contratos e compliance',
        template: (name: string, company: string, message: string) => 
          `Olá, me chamo ${name} e estou interessado no serviço de Consultoria Empresarial${company ? ` para minha empresa ${company}` : ''}.\n\n${message ? `Mensagem: ${message}` : 'Gostaria de mais informações.'}`,
        structuredTemplate: (name: string, company: string, message: string, serviceName: string) =>
          `Nome > ${name}\n${company ? `Empresa > ${company}\n` : ''}Serviço > ${serviceName}\n${message ? `Mensagem > ${message}` : 'Mensagem > Gostaria de mais informações'}`
      },
      en: {
        title: '💼 Business Consulting',
        description: 'Corporate law, contracts and compliance',
        template: (name: string, company: string, message: string) => 
          `Hello, my name is ${name} and I'm interested in Business Consulting services${company ? ` for my company ${company}` : ''}.\n\n${message ? `Message: ${message}` : 'I would like more information.'}`,
        structuredTemplate: (name: string, company: string, message: string, serviceName: string) =>
          `Name > ${name}\n${company ? `Company > ${company}\n` : ''}Service > ${serviceName}\n${message ? `Message > ${message}` : 'Message > I would like more information'}`
      }
    },
    contracts: {
      pt: {
        title: '📋 Análise de Contratos',
        description: 'Revisão e elaboração de contratos',
        template: (name: string, company: string, message: string) => 
          `Olá, me chamo ${name} e estou interessado no serviço de Análise de Contratos${company ? ` para minha empresa ${company}` : ''}.\n\n${message ? `Mensagem: ${message}` : 'Gostaria de mais informações.'}`,
        structuredTemplate: (name: string, company: string, message: string, serviceName: string) =>
          `Nome > ${name}\n${company ? `Empresa > ${company}\n` : ''}Serviço > ${serviceName}\n${message ? `Mensagem > ${message}` : 'Mensagem > Gostaria de mais informações'}`
      },
      en: {
        title: '📋 Contract Review',
        description: 'Contract review and drafting',
        template: (name: string, company: string, message: string) => 
          `Hello, my name is ${name} and I'm interested in Contract Review services${company ? ` for my company ${company}` : ''}.\n\n${message ? `Message: ${message}` : 'I would like more information.'}`,
        structuredTemplate: (name: string, company: string, message: string, serviceName: string) =>
          `Name > ${name}\n${company ? `Company > ${company}\n` : ''}Service > ${serviceName}\n${message ? `Message > ${message}` : 'Message > I would like more information'}`
      }
    },
    general: {
      pt: {
        title: '⚖️ Consultoria Geral',
        description: 'Outras questões jurídicas',
        template: (name: string, company: string, message: string) => 
          `Olá, me chamo ${name} e estou interessado no serviço de Consultoria Geral${company ? ` para minha empresa ${company}` : ''}.\n\n${message ? `Mensagem: ${message}` : 'Gostaria de mais informações.'}`,
        structuredTemplate: (name: string, company: string, message: string, serviceName: string) =>
          `Nome > ${name}\n${company ? `Empresa > ${company}\n` : ''}Serviço > ${serviceName}\n${message ? `Mensagem > ${message}` : 'Mensagem > Gostaria de mais informações'}`
      },
      en: {
        title: '⚖️ General Consulting',
        description: 'Other legal matters',
        template: (name: string, company: string, message: string) => 
          `Hello, my name is ${name} and I'm interested in General Consulting services${company ? ` for my company ${company}` : ''}.\n\n${message ? `Message: ${message}` : 'I would like more information.'}`,
        structuredTemplate: (name: string, company: string, message: string, serviceName: string) =>
          `Name > ${name}\n${company ? `Company > ${company}\n` : ''}Service > ${serviceName}\n${message ? `Message > ${message}` : 'Message > I would like more information'}`
      }
    }
  };

  const handleServiceSelect = (service: ServiceType) => {
    setSelectedService(service);
    setCurrentStep('form');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService || !formData.name) return;

    const serviceData = services[selectedService][language];
    const serviceName = serviceData.title.replace(/^\S+\s/, ''); // Remove emoji do nome
    
    const message = useStructuredFormat 
      ? serviceData.structuredTemplate(formData.name, formData.company, formData.message, serviceName)
      : serviceData.template(formData.name, formData.company, formData.message);
      
    const encodedMessage = encodeURIComponent(message);
    
    window.open(`https://wa.me/5561983144615?text=${encodedMessage}`, '_blank');
    
    // Reset form
    setFormData({ name: '', company: '', message: '' });
    setCurrentStep('services');
    setSelectedService(null);
    setIsExpanded(false);
  };

  const handleBack = () => {
    setCurrentStep('services');
    setSelectedService(null);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setCurrentStep('services');
      setSelectedService(null);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <div className={`floating-whatsapp ${isExpanded ? 'expanded' : ''}`}>
        {isExpanded ? (
          <div className="whatsapp-popup">
            <div className="popup-header">
              {currentStep === 'form' && (
                <button className="back-btn" onClick={handleBack}>
                  <FaArrowLeft />
                </button>
              )}
              <div className="avatar">
                <FaHeadset />
              </div>
              <div className="info">
                <h4>Beatriz Dantas</h4>
                <span className="status">
                  <span className="online-dot"></span>
                  {language === 'pt' ? 'Online agora' : 'Online now'}
                </span>
              </div>
              <button className="close-btn" onClick={() => setIsExpanded(false)}>
                <FaTimes />
              </button>
            </div>
            
            <div className="popup-body">
              {currentStep === 'services' ? (
                <>
                  <div className="message">
                    <p>
                      {language === 'pt' 
                        ? "👋 Olá! Em que posso ajudar hoje? Escolha o serviço de seu interesse:"
                        : "👋 Hello! How can I help you today? Choose the service you're interested in:"
                      }
                    </p>
                  </div>
                  
                  <div className="service-options">
                    {Object.entries(services).map(([key, service]) => (
                      <button 
                        key={key} 
                        className="service-option"
                        onClick={() => handleServiceSelect(key as ServiceType)}
                      >
                        <div className="service-title">{service[language].title}</div>
                        <div className="service-description">{service[language].description}</div>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="form-header">
                    <h5>
                      {selectedService && services[selectedService][language].title}
                    </h5>
                    <p>
                      {language === 'pt' 
                        ? "Preencha as informações para personalizar sua mensagem:"
                        : "Fill in the information to customize your message:"
                      }
                    </p>
                  </div>

                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>{language === 'pt' ? 'Seu nome *' : 'Your name *'}</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder={language === 'pt' ? 'Digite seu nome' : 'Enter your name'}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>{language === 'pt' ? 'Empresa (opcional)' : 'Company (optional)'}</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder={language === 'pt' ? 'Nome da sua empresa' : 'Your company name'}
                      />
                    </div>

                    <div className="form-group">
                      <label>{language === 'pt' ? 'Mensagem adicional (opcional)' : 'Additional message (optional)'}</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder={language === 'pt' ? 'Descreva brevemente sua necessidade...' : 'Briefly describe your needs...'}
                        rows={3}
                      />
                    </div>

                    <button type="submit" className="submit-btn" disabled={!formData.name}>
                      <FaWhatsapp />
                      {language === 'pt' ? 'Enviar para WhatsApp' : 'Send to WhatsApp'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        ) : (
          <button className="whatsapp-btn" onClick={toggleExpanded}>
            <FaWhatsapp />
            <span className="btn-text">
              {language === 'pt' ? 'Entre em Contato' : 'Send a Message'}
            </span>
            <div className="notification-badge">1</div>
          </button>
        )}
      </div>

      {/* Pulsing indicator when not expanded */}
      {isVisible && !isExpanded && (
        <div className="pulse-indicator" onClick={toggleExpanded}></div>
      )}
    </>
  );
}
