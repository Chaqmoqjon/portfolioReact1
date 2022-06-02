import React from "react";
import "./Portfolio.css";
import {data} from '../servers/static'
import { useTranslation } from "react-i18next";



const Portfolio = () => {
  const {t}= useTranslation()
  return (
    <section id="portfolio">
      <h5>{t('ishlar')}</h5>
      <h2>{t('portfolio')}</h2>
      <div className="container portfolio__container">
       {
         data.map(({id, image, title, github, demo})=>
          {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                {t('gitHub')}
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  {t('liveDemo')}
                </a>
              </div>
            </article>
            )
          }
         )
       }

      </div>
    </section>
  );
};

export default Portfolio;
