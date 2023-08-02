/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Card, Modal } from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import slugify from "slugify";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
// import { addToWish } from "../features/wishSlice";
import cart from "../assets/img/cartprimary.svg";
import cart1 from "../assets/img/cartwhite.svg";
import { addToWish, removeFromWish } from "../features/wishSlice";

const SingleCard = ({ id, img, title, price }) => {
  const [counter, setCounter] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setCounter(counter);
  }, [counter]);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: counter }));
  };
  // const addToWishlistHandler = (product) => {
  //   dispatch(addToWish(product));
  // };
  const local = localStorage.getItem("wishItems");
  const wishData = local ? JSON.parse(local).find((item) => item.id === id) : false;

  const [wishStatus, setWishStatus] = useState(wishData ? "solid" : "regular");
  const findWish = (id) => {
    // const localWish: any = localStorage.getItem("wish");
    const local = localStorage.getItem("wishItems");
    const wishData = local ? JSON.parse(local).find((item) => item.id === id) : false;
    // const wish = JSON.parse(localWish)?.find((item: any) => item.id === id);
    // wishData ? setWishStatus("solid") : setWishStatus("regular");
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
    <Card className="border-0 me-4">
      <div className="position-relative">
        <div className="card-img img-fluid">
          <Card.Img variant="top" src={img[0]} />
        </div>
        <div className="overlay text-end">
          <div
            className="shop"
            onClick={() => {
              handleAddToCart({ img, title, price, id, counter });
              console.log(id);
            }}
          >
            <i className="fa-solid fa-cart-plus"></i>
          </div>
          <div className="shop">
            <div onClick={handleShow}>
              <i className="fa-solid fa-magnifying-glass-plus"></i>
            </div>
            <Modal
              show={show}
              onHide={handleClose}
              size="lg"
              centered
              aria-labelledby="contained-modal-title-vcenter"
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12 col-md-5 d-flex justify-content-center">
                      <div className="productdetails-img">
                        <img src={img[0]} alt="" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 ms-5">
                      <div className="productdetails-content">
                        <h3 className="fs-1 mb-2 text-start modal-title">{title}</h3>
                        <span className="product-color mb-2">COLORS</span>
                        <div className="product-color_select d-flex">
                          <div className="color-black me-3 mt-0"></div>
                          <div className="color-white me-3 mt-0"></div>
                          <div className="color-pink me-3 mt-0"></div>
                          <div className="color-blue me-3 mt-0"></div>
                        </div>
                        <div className="d-flex">
                          <div className="product-quantity mt-5 d-flex">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus"
                              onClick={() => {}}
                            />
                            <input type="text" value={1} />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus"
                              onClick={() => {}}
                            />
                          </div>
                        </div>
                        <h3 className="product-price mt-3 mb-3 fs-1">
                          {price}$
                        </h3>
                          <button
                            className="primary-button mb-3 d-flex"
                          >
                            <img src={cart1} alt="" />
                            BUY NOW
                          </button>
                          <button
                            className="outline-button mb-3 ms-0 d-flex"
                          >
                            <img src={cart} alt="" />
                            ADD TO CART
                          </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
           
            </Modal>
          </div>
        </div>
      </div>
      <Card.Body>
        <LinkContainer
          to={`/products/${slugify(title)}`}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <p className="card-title">{title}</p>
        </LinkContainer>
        <Card.Text className="p-0">{price}$</Card.Text>
      </Card.Body>
      <div className="heart">
        <div
          className="card-heart"
          // onClick={() => {
          //   // addToWishlistHandler({ img, title, price, id });

          // }}
          onClick={() => { wishClick() }}
        >
          <span><i className={`fa-${wishStatus} fa-heart`}></i></span>
        </div>
      </div>
    </Card>
  );
};

export default SingleCard;
