import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanuageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import "flag-icon-css/css/flag-icons.min.css";

i18n
  .use(initReactI18next)
  .use(LanuageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "ru", "uz"],
    fallbackLng: "en",
    detection: {
      order: ["path", "htmlTag", "cookie", "localStorage", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locals/{{lng}}/translation.json",
    },
    react: { useSuspense: false },
  });


ReactDOM.render(
  <React.StrictMode>
    {/* <Suspense> */}
      <App/>
    {/* </Suspense> */}
  </React.StrictMode>,
  document.getElementById('root')

);
