import { useContext, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import SingleCard from "./SingleCard";
import { ProductContext } from "../context/ProductContext";

const PopularSlider = () => {

    const [product]=useContext(ProductContext)

    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, setUpdateCount] = useState(0);
    const sliderRef = useRef();
    const [slidesToShow, setSlidesToShow] = useState(3);
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      afterChange: () => setUpdateCount((prevCount) => prevCount + 1),
      beforeChange: (current, next) => setSlideIndex(next),
    };
  
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 600) {
        setSlidesToShow(1);
      } else if (screenWidth <= 800) {
        setSlidesToShow(2);
      }else if(screenWidth <=1000){
        setSlidesToShow(3)
      } else {
        setSlidesToShow(4);
      }
    };
  
    useEffect(() => {
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const handleSliderChange = (event) => {
      const value = parseInt(event.target.value, 10);
      setSlideIndex(value);
      sliderRef.current.slickGoTo(value);
    };
  return (
    <>
     <Slider ref={sliderRef} {...settings}>
              {product
                .filter((item) => item.popular === true) // Yalnız popular məhsulları filtirləyirik
                .map((item) => (
                  // <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
                    <SingleCard key={item.id}
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    price={item.price}
                  />
                  // </div>
                ))}
            </Slider>
            <input
              onChange={handleSliderChange}
              value={slideIndex}
              type="range"
              min={0}
              max={7}
            /> 
    </>
  )
}

export default PopularSlider