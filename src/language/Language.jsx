import React, { useEffect } from "react";
import { language } from "../components/servers/static";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookie from "js-cookie";
import './Language.css'

function Language() {
  const currentLanguageCode = cookie.get("i18next") || "en";
  const currentLanguage = language.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    Document.title = t("app_title");
  }, [currentLanguage, t]);
  return (
    <>
      <div className="lang__container">
        <ul className="lang__ul">
          {language?.map(({ code, name, country_code }) => (
            <li key={country_code}>
              <button
                className=""
                onClick={() => i18next.changeLanguage(code)}
                style={{ opacity: code === currentLanguageCode ? 0.5 : 1 }}
              >
                
                <h2>{name}</h2>
                <span
                  className={`flag-icon flag-icon-${country_code}`}
                  style={{ opacity: code === currentLanguageCode ? 0.5 : 1 }}
                >
                </span>
                
              </button>
            </li>
          ))}
        </ul>
      </div>

    </>
  );
}

export default Language;
