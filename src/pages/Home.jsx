import cart from '../assets/img/cart2.svg'
import img from '../assets/img/Rectangle1.png'
import about from "../assets/img/aboutimg.png";
import contact from "../assets/img/contactimg.png";
// import discount from "../assets/img/discount.png";
import { Modal } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SingleCard from '../components/SingleCard';
import { ProductContext } from '../context/ProductContext';
import PopularSlider from '../components/PopularSlider';
import collections from '../data/collection';
import Slider from 'react-slick';

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate()

  const [product]=useContext(ProductContext)
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
        <div className="discount-img">
        </div>
        <div className="discount-text d-flex flex-column align-items-center position-absolute">
          <h2 className='text-white'>20% DISCOUNT</h2>
          <span className='text-white'>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo </span>
          <button className="primary-button d-flex">
            <img src={cart} alt="" className='me-3'/>
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="products contain">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center">
            <h3>PRODUCTS</h3>
            <Link to={"/products"}>SEE ALL</Link>
          </div>
          <div className="row">
            {product.slice(0, 8).map((item) => (
              <div className='col-12 col-sm-6 col-md-4 col-lg-3' key={item.id}>
                <SingleCard
                id={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
              />
              </div>
          ))}
          </div>
        </div>
      </div>
      <div className="popular products contain">
        <div className="container-fluid">
          <h3>MOST POPULAR</h3>
          <div className="row">
           <PopularSlider/>
          </div>
        </div>
      </div>
      <div className="collections">
        <div className="container-fluid contain">
          <div className="d-flex justify-content-between align-items-center">
          <h3>COLLECTIONS</h3>
          <Link to={"/collections"}>SEE ALL</Link>
          </div>
          <div className="row">
              <Slider {...settings}>
              {collections.map((item) => (
                <div className="col-12 col-md-6 col-lg-4 position-relative" key={item.id}>
                  <div className="collections-img">
                    <img src={item.img} alt="" />
                    <div className="overlay"></div>
                  </div>
                  <div className="collections-title position-absolute">{item.title}</div>
                </div>
              ))}
              </Slider>
          </div>
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