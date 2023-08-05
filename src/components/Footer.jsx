import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/langdata";

const Footer = () => {
  
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  return (
    <footer className="footer contain">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 justify-content-start">
            <p>HomeDecor</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <span>At vero eos et accusamus et iusto odio dignissimos ducimus qui </span>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
           <span>+994 50 555 55 55</span>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <span>youremailhere@gmail.com</span>
          </div>
        </div>
        <div className="row">
          <div className="col-12 footer-bottom">
            <span>{t.reserved}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer