"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./index.scss";
import { FaX } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";
import Logo from "../../../public/logo-bia.png";
import LogoIcon from "../../../public/logo-bia-icon.png";
import Image from "next/image";
import { useLanguage } from "../Context/Language";
import Modal from "../Modal";
import { HeaderTypes2 } from "@/types/general";
import { dataConst } from "@/constants/data";
import Flag from 'react-flagkit'

export default function Header({
  title = "Headless by WP Engine",
  description,
  menuItems,
}: HeaderTypes2) {
  const [isNavShown, setIsNavShown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolledPastHero(window.scrollY > window.innerHeight);
    };
  
    // Executa logo no início para ver se já passou do hero
    handleScroll();
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  // const imageSrc = scrolledPastHero ? LogoIcon : Logo;
  const imageClass = scrolledPastHero ? "logoIcon" : "";

  return (
    <header className={`componentHeader ${imageClass}`}>
      <div className={`componentLogo ${imageClass}`}>
        <Image
          src={Logo}
          alt="Logo da Beatriz Dantas"
          className="logo"
          priority
        />
      </div>

      <nav className="header">
        <ul>
          {
            dataConst[language].navegacao.map((link, index) => (
              <li key={`${link.link}-${index}-header`}><a href={`/#${link.link}`}>{link.label}</a></li>
            ))
          }
        </ul>
      </nav>

      <div className="containerLinguagem header">
        <div className={`containerFlag ${language == 'pt' ? "active": ""}`}>
          <Flag country="BR" onClick={() => setLanguage("pt")} />
        </div>
        <div className={`containerFlag ${language == 'en' ? "active": ""}`}>
          <Flag country="GB" onClick={() => setLanguage("en")} />
        </div>
      </div>

      <MdOutlineMenu size={40} className="menu" onClick={() => setShowModal(!showModal)} />

      <Modal isActive={showModal} />
    </header>
  );
}
