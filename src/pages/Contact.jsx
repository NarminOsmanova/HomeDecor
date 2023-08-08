import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/langdata";


const Contact = () => {
  
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  return (
    <section className="contact contain">
      <div className="section-fluid">
        <Link to={"/"}>{t.home}</Link>
        <Link to={"/contact "}>{t.contact} </Link>
      </div>
     <ContactForm/>
    </section>
  );
};

export default Contact;
