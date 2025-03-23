 "use client"
 
import { useEffect, useState } from 'react';
import Link from 'next/link';
import  './index.scss';
import { FaX  } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";
import Logo from "../../../public/logo-bia.png"
import LogoIcon from "../../../public/logo-bia-icon.png"
import Image from 'next/image';
import { useLanguage } from '../Context/Language';
import Modal from '../Modal';
import { HeaderTypes2 } from '@/types/general';


export default function Header({
  title = 'Headless by WP Engine',
  description,
  menuItems
}: HeaderTypes2) {
  const [isNavShown, setIsNavShown] = useState(false);
  const [imageSrc, setImageSrc] = useState(Logo);
  const [imageClass, setImageClass] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Verifica se scrollY é maior que a altura do viewport
      if (window.scrollY > window.innerHeight) {
        setImageSrc(LogoIcon);
        setImageClass('logoIcon')
      } else {
        setImageSrc(Logo);
        setImageClass('')
      }
    };

    // Adiciona o ouvinte de evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpeza: remove o ouvinte de evento quando o componente é desmontado
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className='componentHeader'>
        <div className={`componentLogo ${imageClass}`}>
          <Image src={imageSrc} className='logo' alt='Logo da Beatriz Dantas'/>
        </div>

        <nav>
          <ul>
            <li><a href='/#home'>Home</a></li>
            <li><a href='/#visao'>Visão</a></li>
            <li><a href='/#area-de-atuacao'>Áreas de Atuação</a></li>
            <li><a href='/#sobre'>Sobre</a></li>
            <li><a href='/#contato'>Entre em Contato</a></li>
          </ul>
        </nav>

        <div className='containerLinguagem'>
          <span onClick={() => setLanguage('pt')}>PT</span>
          <span>|</span>
          <span onClick={() => setLanguage('en')}>EN</span>
        </div>

        <MdOutlineMenu size={40} className='menu' onClick={() => setShowModal(!showModal)}/>

        <Modal isActive={showModal} />
    </header>
  );
}
