'use client'
import { useEffect, useRef, useState } from 'react';
import './index.scss';
import { FaX } from "react-icons/fa6";
import { useLanguage } from '../Context/Language';
import { dataConst } from '@/constants/data';

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
    <div className={`offcanvas ${isModalShown ? "active" : ""}`}>
      <div className="modal-content" ref={modalRef}>
        <FaX size={12} onClick={closeModal} />
        
        <nav className='navMenu'>
          <ul>
            {dataConst[language].navegacao.map((link, index) => (
              <li key={`${link.link}-${index}-modal`}>
                <a href={`/#${link.link}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className='containerLinguagem'>
          <span onClick={() => setLanguage('pt')}>PT</span>
          <span>|</span>
          <span onClick={() => setLanguage('en')}>EN</span>
        </div>

      </div>
    </div>
  );
}
