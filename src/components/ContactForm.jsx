import { useContext, useState } from "react";
import { Modal } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import contact from "../assets/img/contactimg.png";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/langdata";



const ContactForm = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate()
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  return (
    <div className="container-fluid">
        <div className="row">
          <h2>{t.contact}</h2>
          <div className="col-12 col-md-6">
            <form>
              <input
                type="text"
                name=""
                id=""
                placeholder={t.name}
                className="form-control input"
              />
              <input
                type="email"
                name=""
                id=""
                placeholder={t.email}
                className=" form-control input"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder={t.theme}
                className="form-control input"
              />
              <textarea
                name=""
                id=""
                placeholder={t.message}
                className="textarea form-control"
              ></textarea>
              <button
                type="button"
                className="primary-button form-control"
                onClick={handleShow}
              >
                {t.login}
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
  )
}

export default ContactForm