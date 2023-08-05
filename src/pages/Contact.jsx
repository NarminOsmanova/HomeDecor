import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";


const Contact = () => {
  
  return (
    <section className="contact contain">
      <div className="section-fluid">
        <Link to={"/"}>Home</Link>
        <Link to={"/contact "}>Contact </Link>
      </div>
     <ContactForm/>
    </section>
  );
};

export default Contact;
