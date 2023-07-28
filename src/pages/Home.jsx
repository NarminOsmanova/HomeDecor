import cart from '../assets/img/cart2.svg'
import img from '../assets/img/Rectangle1.png'
import about from "../assets/img/aboutimg.png";
import contact from "../assets/img/contactimg.png";
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate()
  return (
    <section className="home">
      <div className="container-fluid contain ">
      <div className="row">
      <div className="col-12 col-md-5">
        <div className="container-text position-absolute">
          <h1>THE FURNITURE THAT DEFINES YOU</h1>
          <span>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</span>
          <button className="primary-button d-flex">
            <img src={cart} alt="" />
            SHOP NOW</button>
        </div>
      </div>
      <div className="col-12 col-md-7">
        <div className="container-img">
          <img src={img} alt="" />
          <div className="overlay d-none d-md-block"></div>
        </div>
      </div>
      </div>
      </div>
      <div className="about contain">
      <div className="container-fluid">
        <div className="row">
          <h3>ABOUT US</h3>
          <div className="col-12 col-md-6">
            <div className="about-img">
              <img src={about} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6 align-items-center d-flex">
            <div className="about-text">
              <span>
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime placeat facere possimus, omnis
                voluptas assumenda est, omnis dolor repellendus.<br/> Temporibus
                autem quibusdam et aut officiis debitis aut rerum necessitatibus
                saepe eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.<br/> Itaque earum rerum
                hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
                maiores alias consequatur aut perferendis doloribus asperiores
                repellat et voluptates repudiandae sint et molestiae non
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="discount position-relative">
        <div className="discount-text position-absolute">
          <h2 className='text-white'>20% DISCOUNT</h2>
          <span className='text-white'>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo </span>
          <button className="primary-button d-flex">
            <img src={cart} alt="" />
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="contact contain">
      <div className="container-fluid">
        <div className="row">
          <h3>CONTACT</h3>
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
      </div>
    </section>
  )
}

export default Home