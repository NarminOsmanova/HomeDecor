import cart from '../assets/img/cart2.svg'
import img from '../assets/img/Rectangle1.png'

const Home = () => {
  return (
    <div className="contain container-fluid home">
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
  )
}

export default Home