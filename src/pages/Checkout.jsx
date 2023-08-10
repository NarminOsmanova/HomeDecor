import { useState } from "react";
import { Modal } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

const Checkout = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || [];
  const [firstName, lastName] = user.length > 0 ? user[0].split(" ") : ["", ""];
  return (
    <section className="checkout contain">
       <div className="section-fluid">
        <Link to={"/"}>Home</Link>
        <span>|</span>
        <Link to={"/cart "} className="mx-4">Shopping cart </Link>
        <span>|</span>
        <Link to={"/cart/checkout"}>Checkout</Link>
      </div>
        <div className="container-fluid">
          <div className="row">
            <h2>CHECKOUT</h2>
            <div className="col-12 col-md-7">
              <form>
                <p className="information">PERSONAL INFORMATION</p>
                <div className="d-md-flex">
                  <div className="right_form">
                    <input
                      type="text"
                      className="form-control input"
                      defaultValue={firstName}
                      placeholder="Name"
                    />
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Email"
                      className="form-control input"
                      defaultValue={localStorage.getItem("email")}
                    />
                    <input
                      type="text"
                      className="form-control input"
                      placeholder="CITY, STREET"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control input"
                      defaultValue={lastName}
                      placeholder="Surname"
                    />
                    <input
                      type="tel"
                      name=""
                      id=""
                      className="form-control input"
                      placeholder="+ 994 (__) ___ __ __"
                    />
                    <input
                      type="text"
                      placeholder="POSTAL CODE"
                      className="form-control input"
                    />
                  </div>
                </div>
                <div className="d-flex">
                <div className="label d-none d-md-block">
                  <p className="payment-method">PAYMENT METHOD</p>
                  <label htmlFor="card">
                    <input type="radio" name="payment" id="card" />
                    CARD
                  </label>
                  <br />
                  <label htmlFor="cash">
                    <input type="radio" name="payment" id="cash" />
                    CASH
                  </label>
                </div>
                <div className="label d-none d-md-block">
                  <p className="delivery-method">DELIVERY METHOD</p>
                  <label htmlFor="courier">
                    <input type="radio" name="delivery" id="courier" />
                    COURIER
                  </label>{" "}
                  <br />
                  <label htmlFor="pickup">
                    <input type="radio" name="delivery" id="pickup" />
                    PICKUP
                  </label>
                </div>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-5">
              <form>
                <p className="information">CARD INFORMATION</p>
                <input type="text" className="form-control input" placeholder="CARD NUMBER"/>
                <input
                  type="datetime"
                  className="form-control input"
                  name=""
                  id=""
                  placeholder="EXPIRY DATE"
                />
                <input type="text" className="form-control input" placeholder="CW" />
              <div className="label d-block d-md-none">
                <p className="payment-method">PAYMENT METHOD</p>
                <label htmlFor="card">
                  <input type="radio" name="payment" id="card" />
                  CARD
                </label>
                <br />
                <label htmlFor="cash">
                  <input type="radio" name="payment" id="cash" />
                  CASH
                </label>
              </div>
              <div className="label d-block d-md-none">
                <p className="delivery-method">DELIVERY METHOD</p>
                <label htmlFor="courier">
                  <input type="radio" name="delivery" id="courier" />
                  COURIER
                </label>
                <br />
                <label htmlFor="pickup">
                  <input type="radio" name="delivery" id="pickup" />
                  PICKUP
                </label>
              </div> 
                <button type="button" onClick={handleShow}
                 className="primary-button form-control">
                  FINISH ORDER
                </button>
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                  <p>YOUR ORDER IS COMPLETE!</p>
                  <span className="text-center">
                  You will be receiving a confirmation email with order details.
                  </span>
                  <button onClick={()=>{navigate("/")}} className="primary-button">HOME PAGE</button>
                </Modal.Body>
              </Modal>
              </form>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Checkout