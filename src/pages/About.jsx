/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import about from "../assets/img/aboutimg.png";
import { animated, useSpring } from "react-spring";

const About = () => {
  // reqemlerin avtomatik artmasi ucun
function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 3000,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}
  return (
    <section className="about contain">
      <div className="section-fluid">
        <Link to={"/"}>Home</Link>
        <Link to={"/about "}>About </Link>
      </div>
      <div className="container-fluid">
        <div className="row">
          <h2>ABOUT US</h2>
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
      <div className="container">
            <div className="row g-5">
              <div className="col-12  col-sm-6 col-lg-3 d-flex flex-column justify-content-center align-items-center">
                <h2 className="d-flex">
                  <Number n={500} />+
                </h2>
                <p>PROJECTS</p>
              </div>
              <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column justify-content-center align-items-center">
                <h2 className="d-flex">
                  <Number n={70} />+
                </h2>
                <p>PARTNERS</p>
              </div>
              <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column justify-content-center align-items-center">
                <h2 className="d-flex">
                  <Number n={30} /> K+
                </h2>
                <p>FOLLOWERS</p>
              </div>
              <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column justify-content-center align-items-center">
                <h2 className="d-flex">
                  <Number n={25} /> +
                </h2>
                <p>YEARS</p>
              </div>
            </div>
      </div>
    </section>
  );
};

export default About;
