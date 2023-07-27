import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
  const navigate=useNavigate();
  return (
    <>
      <div className="login_home">
      <LinkContainer to={"/auth/verify"}>
        <i className="fa-solid fa-circle-left"></i>
      </LinkContainer>
        <span>BACK</span>
      </div>
      <form>
        <h3>NEW PASSWORD</h3>
        <input
          type="password"
          placeholder="ENTER NEW PASSWORD"
          className="form-control input"
        />
        <input
          type="password"
          placeholder="CONFIRM PASSWORD"
          className="form-control input"
        />
        <button type="button" className="form-control primary-button mt-3" onClick={()=>{
          navigate("/auth/login")
        }}>
          SUBMIT
        </button>
      </form>
    </>
  )
}

export default NewPassword