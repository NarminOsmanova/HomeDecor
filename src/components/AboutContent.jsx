import about from "../assets/img/aboutimg.png";

const AboutContent = () => {
  return (
        <>
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
                voluptas assumenda est, omnis dolor repellendus.
                <br /> Temporibus autem quibusdam et aut officiis debitis aut
                rerum necessitatibus saepe eveniet ut et voluptates repudiandae
                sint et molestiae non recusandae. Itaque earum rerum hic tenetur
                a sapiente delectus, ut aut reiciendis voluptatibus maiores
                alias consequatur aut perferendis doloribus asperiores repellat.
                <br /> Itaque earum rerum hic tenetur a sapiente delectus, ut
                aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat et voluptates
                repudiandae sint et molestiae non
              </span>
            </div>
          </div>
        </>
  )
}

export default AboutContent