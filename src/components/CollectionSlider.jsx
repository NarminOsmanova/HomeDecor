import Slider from "react-slick";
// import collections from '../data/collection';
import { useNavigate } from "react-router-dom";
import slugify from "slugify";
import { useContext } from "react";
import { CollectionContext } from "../context/CollectionContext";
import { LanguageContext } from "../context/LanguageContext";
// import translations from "../data/langdata";

const CollectionSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        autoplaySpeed:1500,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      const {collection, handleItemClick, setSelectedTitle} = useContext(CollectionContext)
      const { language } = useContext(LanguageContext);
      // const t = translations[language];
  const navigate=useNavigate();
  return (
    <Slider {...settings}>
          {collection.map((item) => (
            <div className="col-12 col-md-6 col-lg-4 position-relative" key={item.id}>
              <div className="collections-img">
                <img src={item.img} alt="" />
                <div className="overlay"></div>
              </div>
                <div onClick={() => {
                  navigate(`/collections/${slugify(item.title)}`)
                  setSelectedTitle(item.title);
                  handleItemClick(item.title); 
                  window.scrollTo(0,0)
                }} className="collections-title position-absolute">{language === "EN" ? item.title : item.titleAZ}</div>
            </div>
          ))}
    </Slider>
  )
}

export default CollectionSlider