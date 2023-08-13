import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CollectionContext } from "../context/CollectionContext";
import slugify from "slugify";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/langdata";

const Collections = () => {
  const {collection, handleItemClick, setSelectedTitle} = useContext(CollectionContext)
  const navigate=useNavigate();
  const { language } = useContext(LanguageContext);
const t = translations[language];
  return (
    <section className="collections contain">
      <div className="section-fluid">
        <Link to={"/"}>{t.home}</Link>
        <span>|</span>
        <Link to={"/collections"}>{t.collections}</Link>
      </div>
      <div className="container-fluid">
        <h2 className="animate__animated animate__fadeInDown">{t.collections}</h2>
        <span>
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero
          tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
          minus id quod maxime.
        </span>
        <div className="row">
          {collection.map((item) => (
            <div className="col-12 col-md-6 col-lg-4 position-relative" data-aos="flip-down" data-aos-duration="1500"  data-aos-easing="linear" key={item.id}>
              <div className="collections-img">
                <img src={item.img} alt="" />
                <div className="overlay"></div>
              </div>
                <div onClick={() => {
                  navigate(`/collections/${slugify(item.title)}`)
                  setSelectedTitle(item.title);
                  handleItemClick(item.title); 
                }} className="collections-title position-absolute">{language === "EN" ? item.title : item.titleAZ}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;