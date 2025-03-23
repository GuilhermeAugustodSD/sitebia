import { useEffect, useState } from 'react';
import './index.scss';
import { FaX  } from "react-icons/fa6";
import { useLanguage } from '../Context/Language';

interface ModalProps {
  isActive: boolean
}


export default function Modal({ isActive }: ModalProps) {
  const [isModalShown, setIsModalShown] = useState(isActive);
  // const { language, setLanguage } = useLanguage();
  
  useEffect(() => {
    setIsModalShown(isActive)
    console.log(isModalShown);
  }, [isActive]);

  return (
    <div className={`offcanvas ${isModalShown == true ? "active" : ""}`}>
      <FaX size={20}/>
      <div className='containerLinguagem'>
        {/* <span onClick={() => setLanguage('pt')}>PT</span>
        <span>|</span>
        <span onClick={() => setLanguage('en')}>EN</span> */}
      </div>

      <nav className='navMenu'>
        <ul>
          <li><a href='/#home'>Home</a></li>
          <li><a href='/#visao'>Visão</a></li>
          <li><a href='/#area-de-atuacao'>Áreas de Atuação</a></li>
          <li><a href='/#sobre'>Sobre</a></li>
          <li><a href='/#contato'>Entre em Contato</a></li>
        </ul>
      </nav>
    </div>
  );
}
