/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/langdata";
import AboutContent from "../components/AboutContent";

const About = () => {
  // reqemlerin avtomatik artmasi ucun
  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 2000,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  return (
    <section className="about contain">
      <div className="section-fluid d-flex">
        <Link to={"/"}>{t.home}</Link>
        <span>|</span>
          <Link to={"/about "}>{t.about} </Link>
      </div>
      <div className="container-fluid">
        <div className="row">
          <h2 className="animate__animated animate__fadeInDown">{t.us}</h2>
          <AboutContent/>
        </div>
      </div>
      <div className="container">
        <div className="row g-5">
          <div className="col-12  col-sm-6 col-lg-3 d-flex flex-column justify-content-center align-items-center">
            <h2 className="d-flex">
              <Number n={500} />+
            </h2>
            <p>{t.project}</p>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column justify-content-center align-items-center">
            <h2 className="d-flex">
              <Number n={70} />+
            </h2>
            <p>{t.partner}</p>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column justify-content-center align-items-center">
            <h2 className="d-flex">
              <Number n={30} /> K+
            </h2>
            <p>{t.follower}</p>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column justify-content-center align-items-center">
            <h2 className="d-flex">
              <Number n={25} /> +
            </h2>
            <p>{t.year}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
