/* eslint-disable react/prop-types */
import { useCallback, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import slugify from "slugify";
import { ProductContext } from "../context/ProductContext";
import Slider from "react-slick";
// import { Card } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import { useDispatch } from "react-redux";
import { addToWish, removeFromWish } from "../features/wishSlice";
import SingleCard from "./SingleCard";
import { Col } from "react-bootstrap";

const SimilarProductsSlider = ( {id, img, title, price }) => {
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
    
  const dispatch = useDispatch();
  const local = localStorage.getItem("wishItems");
  const wishData = local ? JSON.parse(local).find((item) => item.id === id) : false;
  const [wishStatus, setWishStatus] = useState(wishData ? "solid" : "regular");

  const findWish = (id) => {
    const local = localStorage.getItem("wishItems");
    const wishData = local ? JSON.parse(local).find((item) => item.id === id) : false;
    return wishData ? true : false;
  }

  const wishClick = useCallback(() => {
    if (findWish(id)) {
      dispatch(removeFromWish(id));
      setWishStatus("regular");
    } else {
      dispatch(addToWish({ img, title, price, id }));
      setWishStatus("solid")
    }
  }, [])
  return (
    <Slider {...similarProductSettings}>
    {similarProducts.map((item) => (
        //   <Card className="border-0 me-4" key={item.id}>
        //   <div className="position-relative">
        //     <div className="card-img img-fluid">
        //       <Card.Img variant="top" src={item.img[0]} />
        //     </div>
        //   </div>
        //   <Card.Body>
        //     <LinkContainer
        //       to={`/products/${slugify(item.title)}`}
        //       onClick={() => {
        //         window.scrollTo(0, 0);
        //       }}
        //     >
        //       <p className="card-title">{item.title}</p>
        //     </LinkContainer>
        //     <Card.Text className="p-0">{item.price}$</Card.Text>
        //   </Card.Body>
        //   <div className="heart">
        //     <div
        //       className="card-heart"
        //       onClick={() => { wishClick() }}
        //     >
        //       <span><i className={`fa-${wishStatus} fa-heart`}></i></span>
        //     </div>
        //   </div>
        // </Card>
        <Col sm={12} md={6} lg={4} key={item.id}>
        <SingleCard item={item.id}  img={item.img} title={item.title} price={item.price}/>
        </Col>
    ))}
  </Slider>
  )
}

export default SimilarProductsSlider