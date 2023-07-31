/* eslint-disable react/prop-types */
import { Button, Card, Modal } from "react-bootstrap";
import img1 from "../assets/img/heart.svg";
import { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import slugify from "slugify";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";


const SingleCard = ({ status,id, img, title, price, description }) => {
  const [counter, setCounter] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setCounter(counter);
  }, [counter]);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({...product,quantity: counter} ));
  };

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
             handleAddToCart({img,title,price,id,counter})
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
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <img src={img[0]} alt="" />
                    </div>
                    <div className="col-12 col-md-5">
                      <h3>{title}</h3>
                      <p className="product-stock">
                        {status === true ? "IN STOCK" : "OUT OF STOCK"}
                      </p>
                      <p className="product-price">$ {price}</p>
                      <p>{description}</p>
                     
                      <div className="product-quantity">
                        <input
                          type="button"
                          defaultValue="-"
                          className="minus"
                          onClick={() => {
                            if (counter > 0) {
                              setCounter(counter - 1);
                            }
                          }}
                        />
                        <input type="text" value={counter} />
                        <input
                          type="button"
                          defaultValue="+"
                          className="plus"
                          onClick={() => {
                            setCounter(counter + 1);
                          }}
                        />
                      </div>
                      <div className="product-buttons">
                        {status ? (
                          <button
                            className="btn btn-cart"
                            onClick={() => {
                              
                            }}
                          >
                            <i className="fa-solid fa-cart-plus me-3"></i> cart
                          </button>
                        ) : (
                          <button className="primary-button">
                            <span className="d-flex"><i className="fa-solid fa-cart-plus me-3"></i> cart</span>
                          </button>
                        )}

                        <button className="outline-button" onClick={() => {}}>
                          <span className="d-flex"><i className="fa-regular fa-heart me-3"></i>
                          wish</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
       </div>
        <Card.Body>
          <LinkContainer to={`/products/${slugify(title)}`}>
            <p className="card-title">{title}</p>
          </LinkContainer>
          <Card.Text className="p-0">{price}$</Card.Text>
        </Card.Body>
        <div className="heart">
          <div className="card-heart">
            <img src={img1} alt="" />
          </div>
        </div>
      </Card>
  );
};

export default SingleCard;