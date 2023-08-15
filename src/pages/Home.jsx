import cart from '../assets/img/cart2.svg'
import img from '../assets/img/Rectangle1.png'
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SingleCard from '../components/SingleCard';
import { ProductContext } from '../context/ProductContext';
import PopularSlider from '../components/PopularSlider';
import CollectionSlider from '../components/CollectionSlider';
import CategorySlider from '../components/CategorySlider';
import { LanguageContext } from '../context/LanguageContext';
import translations from '../data/langdata';
import ContactForm from '../components/ContactForm';
import AboutContent from '../components/AboutContent';

const Home = () => {

  const [product]=useContext(ProductContext)
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const navigate=useNavigate()

  return (
    <section className="home">
      <div className="container-fluid contain ">
      <div className="row">
      <div className="col-12 col-md-5">
        <div className="container-text position-absolute">
          <h1 className='animate__animated animate__fadeInUp animate__bounce animate__slow'>{t.defines}</h1>
          <span className='animate__animated animate__fadeInUp animate__bounce animate__slow'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</span>
          <button className="primary-button d-flex animate__animated animate__fadeInUp animate__bounce animate__slow" onClick={()=>{ navigate("/products")
        window.scrollTo(0,0)}}>
            <img src={cart} alt="" />
           {t.shop}</button>
        </div>
      </div>
      <div className="col-12 col-md-7">
        <div className="container-img animate__animated animate__fadeInRight animate__bounce animated__slow">
          <img src={img} alt="" />
          <div className="overlay d-none d-md-block"></div>
        </div>
      </div>
      </div>
      </div>
      <div className="collections category">
        <div className="container-fluid contain">
          <div className="row">
             <CategorySlider/>
          </div>
        </div>
      </div>
      <div className="about contain">
      <div className="container-fluid">
        <div className="row">
          <h3>{t.about}</h3>
         <AboutContent/>
        </div>
      </div>
      </div>
      <div className="discount position-relative">
        <div className="discount-img">
        </div>
        <div className="discount-text d-flex flex-column align-items-center position-absolute">
          <h2 className='text-white'>20% {t.discount}</h2>
          <span className='text-white'>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo </span>
          <button className="primary-button btn d-flex" onClick={()=>{navigate("/products"); window.scrollTo(0,0)}}>
            <img src={cart} alt="" className='me-3'/>
           {t.shop}
          </button>
        </div>
      </div>
      <div className="products contain">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center">
            <h3>{t.products}</h3>
            <Link to={"/products"} onClick={()=>{window.scrollTo(0,0)}} className='d-none d-sm-block'>SEE ALL</Link>
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
            <Link to={"/products"} onClick={()=>{window.scrollTo(0,0)}} className='d-block d-sm-none'>SEE ALL</Link>
          </div>
        </div>
      </div>
      <div className="popular products contain">
        <div className="container-fluid">
          <h3>{t.popular}</h3>
          <div className="row">
           <PopularSlider/>
          </div>
        </div>
      </div>
      <div className="collections">
        <div className="container-fluid contain">
          <div className="d-flex justify-content-between align-items-center">
          <h3>{t.collections}</h3>
          <Link to={"/collections"} onClick={()=>{window.scrollTo(0,0)}} className='d-none d-sm-block'>SEE ALL</Link>
          </div>
          <div className="row">
             <CollectionSlider/>
             <Link to={"/collections"} onClick={()=>{window.scrollTo(0,0)}} className='d-block d-sm-none'>SEE ALL</Link>
          </div>
        </div>
      </div>
      <div className="contact contain">
        <ContactForm/>
      </div>
    </section>
  )
}

export default Home