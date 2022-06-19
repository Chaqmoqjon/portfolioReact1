import React from "react";
import CTA from "./CTA";
import "./Header.css";
import ME from "../../assets/me(3).jpg";
import HeaderSocials from "./HeaderSocials";
import { useTranslation } from "react-i18next";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef} from "react";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const imgRef = useRef(null);
 

  const { t } = useTranslation();

  document.title = t('sarlavha')
  return (

    <header>
      <div className="container header__container">
       
        
        <h5>{t("salom")}</h5>
        <h1>{t("ism")}</h1>
        <h5 className="text-light">{t("kasb")}</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img className="meImg" ref={imgRef} src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          {t("skroll")}
        </a>
      </div>
    </header>

  
    
  );
};

export default Header;
