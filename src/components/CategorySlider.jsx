import Slider from "react-slick";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import category from "../data/category";

const CollectionSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        autoplaySpeed:1500,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
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
      const { language } = useContext(LanguageContext);
  return (
    <Slider {...settings}>
          {category.map((item) => (
            <div className="col-12 col-md-6 col-lg-4 position-relative" key={item.id}>
              <div className="collections-img category-img">
                <img src={item.img} alt="" />
                <div className="overlay"></div>
              </div>
                <div className="collections-title position-absolute">{language === "EN" ? item.title : item.titleAZ}</div>
            </div>
          ))}
    </Slider>
  )
}

export default CollectionSlider