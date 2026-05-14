'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import './index.scss'
import IconPhone from "../Svgs/phone"
import IconEmail from "../Svgs/email"
import IconPin from "../Svgs/pin"
import { useLanguage } from '../Context/Language';
import { FaWhatsapp, FaLinkedin, FaInstagram, FaPaperPlane, FaPhone, FaEnvelope } from 'react-icons/fa';

import ImageContato from '../../../public/image-3.jpg'
// https://wa.me/5561983144615?text=


export default function Contato() {
  const { language } = useLanguage();

  // Estados para armazenar os valores dos inputs
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Monta a mensagem
      const text = language === 'pt' 
        ? `Olá, meu nome é ${nome}. Estou interessado(a) em assistência legal.\n\nDetalhes:\n📧 Email: ${email}\n💬 Mensagem: ${mensagem}`
        : `Hello, my name is ${nome}. I am interested in legal assistance.\n\nDetails:\n📧 Email: ${email}\n💬 Message: ${mensagem}`;

      // Codifica a mensagem para URL
      const mensagemCodificada = encodeURIComponent(text);
      const whatsappLink = `https://wa.me/5561983144615?text=${mensagemCodificada}`;
      
      // Abre o WhatsApp
      window.open(whatsappLink, '_blank');
      
      // Limpa o formulário após o envio
      setTimeout(() => {
        setNome('');
        setEmail('');
        setMensagem('');
        setIsSubmitting(false);
      }, 1000);
      
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <section className='sectionContato' id='contato'>
      <div className="container">
        <div className="contato-header">
          <h2>
            {language === "pt" ? "Entre em Contato" : "Send a Message"}
          </h2>
          <p className="contato-subtitle">
            {language === "pt" 
              ? "Precisando de assistência legal? Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer com segurança jurídica."
              : "Need legal assistance? Contact us and discover how we can help your business grow with legal security."
            }
          </p>
        </div>

        <div className="contato-content">
          {/* Informações de Contato */}
          <div className="contato-info">
            <div className="info-card">
              <div className="card-header">
                <h3>{language === "pt" ? "Informações de Contato" : "Contact Information"}</h3>
                <p>{language === "pt" ? "Entre em contato através dos canais abaixo" : "Get in touch through the channels below"}</p>
              </div>
              
              <div className="contact-items">
                <a href="https://wa.me/5561983144615" className="contact-item whatsapp">
                  <div className="contact-icon">
                    <FaWhatsapp />
                  </div>
                  <div className="contact-details">
                    <strong>WhatsApp</strong>
                    <span>+55 (61) 98314-4615</span>
                  </div>
                </a>

                <a href="mailto:biatriz.helena.21@gmail.com" className="contact-item email">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-details">
                    <strong>E-mail</strong>
                    <span>biatriz.helena.21@gmail.com</span>
                  </div>
                </a>
              </div>

              <div className="social-links">
                <h4>{language === "pt" ? "Redes Sociais" : "Social Media"}</h4>
                <div className="social-icons">
                  <a href="https://www.linkedin.com/in/beatriz-helena-dantas/" target="_blank" rel="noopener noreferrer" className="social-link linkedin" aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href="https://www.instagram.com/bdantas_adv/" target="_blank" rel="noopener noreferrer" className="social-link instagram" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="contato-form">
            <div className="form-card">
              <form onSubmit={handleSubmit}>
                <h3>
                  {language === "pt" ? "Envie sua Mensagem" : "Send your Message"}
                </h3>
                <p className="form-description">
                  {language === "pt" 
                    ? "Preencha o formulário abaixo e entraremos em contato via WhatsApp"
                    : "Fill out the form below and we'll contact you via WhatsApp"
                  }
                </p>

                <div className="form-row">
                  <div className="input-group">
                    <label htmlFor="nome">{language === "pt" ? "Nome Completo" : "Full Name"}</label>
                    <input 
                      id="nome"
                      placeholder={language === "pt" ? 'Seu nome completo' : 'Your full name'} 
                      type='text' 
                      value={nome} 
                      onChange={(e) => setNome(e.target.value)} 
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="email">E-mail</label>
                    <input 
                      id="email"
                      placeholder='seu.email@exemplo.com' 
                      type='email' 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="mensagem">{language === "pt" ? "Mensagem" : "Message"}</label>
                  <textarea 
                    id="mensagem"
                    placeholder={language === "pt" ? 'Descreva brevemente como podemos ajudá-lo...' : 'Briefly describe how we can help you...'} 
                    value={mensagem} 
                    onChange={(e) => setMensagem(e.target.value)} 
                    required
                    disabled={isSubmitting}
                    rows={5}
                  />
                </div>

                <button type='submit' className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="loading">
                      {language === "pt" ? "Enviando..." : "Sending..."}
                    </span>
                  ) : (
                    <>
                      <FaPaperPlane />
                      {language === "pt" ? "Enviar via WhatsApp" : "Send via WhatsApp"}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}