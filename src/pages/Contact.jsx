import { Link, useNavigate } from "react-router-dom";
import contact from "../assets/img/contactimg.png";
import { useState } from "react";
import { Modal } from "react-bootstrap";

const Contact = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate()
  return (
    <section className="contact contain">
      <div className="section-fluid">
        <Link to={"/"}>Home</Link>
        <Link to={"/contact "}>Contact </Link>
      </div>
      <div className="container-fluid">
        <div className="row">
          <h2>CONTACT</h2>
          <div className="col-12 col-md-6">
            <form>
              <input
                type="text"
                name=""
                id=""
                placeholder="NAME, SURNAME"
                className="form-control input"
              />
              <input
                type="email"
                name=""
                id=""
                placeholder="E-MAIL ADRESS"
                className=" form-control input"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="THEME"
                className="form-control input"
              />
              <textarea
                name=""
                id=""
                placeholder="YOUR MESSAGE"
                className="textarea form-control"
              ></textarea>
              <button
                type="button"
                className="primary-button form-control"
                onClick={handleShow}
              >
                LOG IN
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                  <p>THANK YOU!</p>
                  <span>
                    Your message has been received and we will contact you as
                    soon as possible.
                  </span>
                  <button onClick={()=>{navigate("/")}} className="primary-button">HOME PAGE</button>
                </Modal.Body>
              </Modal>
            </form>
          </div>
          <div className="col-12 col-md-6">
            <div className="contact-img">
              <img src={contact} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
