'use client'
import { useEffect, useRef, useState } from 'react';
import './index.scss';
import { FaX } from "react-icons/fa6";
import { useLanguage } from '../Context/Language';
import { dataConst } from '@/constants/data';
import Flag from 'react-flagkit';

interface ModalProps {
  isActive: boolean
}

export default function Modal({ isActive }: ModalProps) {
  const [isModalShown, setIsModalShown] = useState(isActive);
  const { language, setLanguage } = useLanguage();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsModalShown(isActive);
  }, [isActive]);

  // Fecha ao clicar fora do modal
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalShown(false);
      }
    }

    if (isModalShown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalShown]);

  const closeModal = () => {
    setIsModalShown(false);
  };

  return (
    <>
      {isModalShown && <div className="modal-overlay" />}
      <div 
        className={`offcanvas ${isModalShown ? "active" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
      <div className="modal-content" ref={modalRef}>
        <button 
          onClick={closeModal}
          aria-label="Fechar menu"
          type="button"
          className="close-button"
        >
          <FaX size={12} />
        </button>

        <nav className='navMenu'>
          <ul>
            {dataConst[language].navegacao.map((link, index) => (
              <li key={`${link.link}-${index}-modal`}>
                <a href={`/#${link.link}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="containerLinguagem">
          <div className={`containerFlag ${language == 'pt' ? "active" : ""}`}>
            <Flag country="BR" onClick={() => setLanguage("pt")} />
          </div>
          <div className={`containerFlag ${language == 'en' ? "active" : ""}`}>
            <Flag country="GB" onClick={() => setLanguage("en")} />
          </div>
        </div>

      </div>
      </div>
    </>
  );
}
