import { useContext } from "react";
import { useParams } from "react-router-dom";
import slugify from "slugify";
import { ProductContext } from "../context/ProductContext";
import Slider from "react-slick";


const SimilarProductsSlider = () => {
    const [product] = useContext(ProductContext);
    const { slug } = useParams();
    const productdetails = product.find((p) => slugify(p.title) === slug);
  
    // oxsar productlari slider kimi getirmek ucun
    const getSimilarProducts = () => {
      if (productdetails && productdetails.collection && productdetails.collection.length > 0) {
        return product.filter(
          (p) =>
            p.collection.some((collection) => productdetails.collection.includes(collection)) &&
            p.id !== productdetails.id
        );
      }
      return [];
    };
  
    const similarProducts = getSimilarProducts();
  
    const similarProductSettings = {
      dots: false,
      infinite: true,
      autoplay:true,
      autoplaySpeed:2000,
      arrows:false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <Slider {...similarProductSettings}>
    {similarProducts.map((item) => (
      <div
        className="col-12 col-md-6 col-lg-4 position-relative"
        key={item.id}
      >
        <div className="collections-img">
          <img src={item.img[0]} alt={item.title} />
        </div>
        <div className="collections-title">{item.title}</div>
      </div>
    ))}
  </Slider>
  )
}

export default SimilarProductsSlider