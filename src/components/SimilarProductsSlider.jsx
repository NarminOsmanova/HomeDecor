/* eslint-disable react/prop-types */
import {useContext } from "react";
import { useParams } from "react-router-dom";
import slugify from "slugify";
import { ProductContext } from "../context/ProductContext";
import Slider from "react-slick";
import SingleCard from "./SingleCard";
import { Col } from "react-bootstrap";

const SimilarProductsSlider = ( ) => {
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
        <Col sm={12} md={6} lg={4} key={item.id}>
        <SingleCard item={item.id}  img={item.img} title={item.title} price={item.price}/>
        </Col>
    ))}
  </Slider>
  )
}

export default SimilarProductsSlider