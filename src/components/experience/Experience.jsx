import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const {t} = useTranslation()
  return ( 
    <section id="experince">
      <h5>{t('tajriba1')}</h5>
      <h2>{t('tajriba2')}</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>{t('kasb')}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h2>HTML</h2>
                <p className="text-light">{t('bilim')}</p>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h2>CSS</h2>
                <p className="text-light">{t('bilim')}</p>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h2>Bootstrap</h2>
                <p className="text-light">{t('bilim')}</p>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h2>SASS</h2>
                <p className="text-light">{t('bilim')}</p>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h2>JavaScript</h2>
                <p className="text-light">{t('bilim')}</p>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h2>Git Hub</h2>
                <p className="text-light">{t('bilim')}</p>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h2>ReactJS</h2>
                <p className="text-light">{t('bilim')}</p>
              </div>
            </article>
            

            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
