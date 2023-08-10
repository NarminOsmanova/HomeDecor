import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import slugify from "slugify";
import Slider from "react-slick";
import ReactImageMagnify from "react-image-magnify";
import cart from "../assets/img/cartprimary.svg";
import cart1 from "../assets/img/cartwhite.svg";
import SimilarProductsSlider from "../components/SimilarProductsSlider";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, updateQuantity } from "../features/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const [product] = useContext(ProductContext);
  const { slug } = useParams();
  const productdetails = product.find((p) => slugify(p.title) === slug);
  const navigate=useNavigate()

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
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    setCounter(counter);
  }, [counter]);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({...product,quantity: counter} ));
  };

  const handleQuantityChange = (productId, quantity) => {
    const newCounter = counter + quantity;

    if (newCounter <= 0) {
     
      dispatch(removeFromCart(productId));
    } else {
      setCounter(newCounter);
      dispatch(updateQuantity({ id: productId, quantity: newCounter }));
    }
  };

const notify=()=>
  toast.success('👌 Product has been added to your cart!', {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

  return (
    <section className="productdetails contain">
      <div className="section-fluid">
        <Link to={"/"}>Home</Link>
        <span>|</span>
        <Link to={"/products "} className="mx-4">Products</Link>
        <span>|</span>
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
                    type="button" readOnly
                    defaultValue="-"
                    className="minus"
                    onClick={() =>{handleQuantityChange(productdetails.id, -1)}}
                  />
                  <input type="text" value={counter} readOnly/>
                  <input
                    type="button"
                    defaultValue="+" readOnly
                    className="plus"
                    onClick={() =>{handleQuantityChange(productdetails.id, 1)}}
                  />
                </div>
              </div>
              <h3 className="product-price">{productdetails.price}$</h3>
              <div className="d-flex">
                <button className="primary-button d-flex" onClick={() => {
                  handleAddToCart(productdetails)
                  navigate("/cart")}}>
                  <img src={cart1} alt="" />
                  BUY NOW
                </button>
                <button className="outline-button d-flex" onClick={() => {
                  const message= handleAddToCart(productdetails)
                  notify(message)}}>
                  <img src={cart} alt=""  />
                  ADD TO CART
                </button>
                <ToastContainer
                  position="bottom-left"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid similar">
        <h3>SIMILAR PRODUCTS</h3>
        <SimilarProductsSlider/>
      </div>
    </section>
  );
};

export default ProductDetails;