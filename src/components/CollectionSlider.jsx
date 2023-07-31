import Slider from "react-slick";
import collections from '../data/collection';

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
  return (
    <Slider {...settings}>
    {collections.map((item) => (
      <div className="col-12 col-md-6 col-lg-4 position-relative" key={item.id}>
        <div className="me-4">
        <div className="collections-img">
          <img src={item.img} alt="" />
          <div className="overlay"></div>
        </div>
        <div className="collections-title position-absolute">{item.title}</div>
        </div>
      </div>
    ))}
    </Slider>
  )
}

export default CollectionSlider