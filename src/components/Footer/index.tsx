// 'use client'
// import { dataConst } from '@/constants/data';
// import { useLanguage } from '../Context/Language';
import './index.scss';
import IconIntagram from '../Svgs/instagram';
import IconLinkedin from '../Svgs/linkedin';
export default function Footer() {
  const year = new Date().getFullYear();
  // const { language } = useLanguage()
  return (
    <footer className='component'>
      {/* <div className="topSide">
        <div className="contact">

        </div>

        <ul className="navigation">
          {
            dataConst[language].navegacao.map((nav, index) => (
              <li key={`footerlink-${index}`}><a href={`#${nav.link}`}>{nav.label}</a></li>
            ))
          }
        </ul>
        <div className="social">
          <h4></h4>
          <div className='socialIcons'>
            <IconIntagram url="https://www.instagram.com/bdantas_adv/" color="#F5F5F5"/>
            <IconLinkedin url="https://www.linkedin.com/in/beatriz-helena-dantas/" color="#F5F5F5"/>
          </div>
        </div>
      </div> */}

      <div className="copyright">
       <p>© Copyright Beatriz Dantas - {year}.</p>
       <div className="social">
          <IconIntagram url="https://www.instagram.com/bdantas_adv/" color="#F5F5F5"/>
          <IconLinkedin url="https://www.linkedin.com/in/beatriz-helena-dantas/" color="#F5F5F5"/>
        </div>
      </div>
    </footer>
  );
}
