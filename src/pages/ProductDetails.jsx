import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link, useParams } from "react-router-dom";
import slugify from "slugify";
import Slider from "react-slick";
import ReactImageMagnify from "react-image-magnify";
import cart from "../assets/img/cart2.svg";
import cart1 from "../assets/img/cartwhite.svg";

const ProductDetails = () => {
  const [product] = useContext(ProductContext);
  const { slug } = useParams();
  const productdetails = product.find((p) => slugify(p.title) === slug);

  const settings = {
    customPaging: function (i) {
      return (
        <a href="/" key={i}>
          <img src={productdetails.img[i]} alt="product" />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="productdetails contain">
      <div className="section-fluid">
        <Link to={"/"}>Home</Link>
        <Link to={"/products "}>Products</Link>
        <Link>{productdetails.title}</Link>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="productdetails-img">
              <Slider {...settings}>
                {productdetails.img.map((image, index) => (
                  <div key={index} className="product_img">
                    <ReactImageMagnify
                      smallImage={{
                        alt: productdetails.title,
                        isFluidWidth: true,
                        src: image, // Use 'image' instead of 'productdetails.images'
                        srcSet: `${image} 768w, ${image} 1280w, ${image} 1920w`,
                      }}
                      largeImage={{
                        src: image,
                        width: 1200,
                        height: 1800,
                      }}
                      enlargedImagePosition="over"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="productdetails-content">
              <p>{productdetails.title}</p>
              <span className="product-desc">{productdetails.description}</span>
              <span className="product-color">COLORS</span>
              <div className="product-color_select d-flex">
                <div className="color-black me-3"></div>
                <div className="color-white me-3"></div>
                <div className="color-pink me-3"></div>
                <div className="color-blue me-3"></div>
              </div>
              <div className="d-flex">
                <div className="product-quantity d-flex">
                  <input
                  type="button"
                  defaultValue="-"
                  className="minus"
                  onClick={() =>{}}/>
                  <input type="text" value={1} />
                  <input
                  type="button"
                  defaultValue="+"
                  className="plus"
                  onClick={() =>{}} />
                </div>
              </div>
              <h3 className="product-price">{productdetails.price}$</h3>
               <div className="d-flex">
               <button className="primary-button d-flex">
                  <img src={cart1} alt="" />
                  BUY NOW
                </button>
                <button className="outline-button d-flex">
                  <img src={cart} alt="" />
                  ADD TO CART
                </button>
               </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid similar">
        <h3>SIMILAR PRODUCTS</h3>
      </div>
    </section>
  );
};

export default ProductDetails;
