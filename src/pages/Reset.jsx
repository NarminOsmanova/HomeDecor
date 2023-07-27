import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

const Reset = () => {
  const navigate =useNavigate()

  return (
   <>
    <div className="login_home">
      <LinkContainer to={"/auth/login"}>
        <i className="fa-solid fa-circle-left"></i>
      </LinkContainer>
      <span>BACK</span>
    </div>
    <form>
      <h3>Reset Password</h3>
      <input
        type="email"
        placeholder="E-MAIL ADDRESS"
        className="form-control input"
        // value={resetEmail}
        // onChange={(e) => setResetEmail(e.target.value)}
      />
      <button
        type="button"
        className="primary-button form-control"
        onClick={()=>{
        navigate("/auth/verify")}}
      >
        Send
      </button>
      <div className="d-flex">
        <span>Don’t have an account?</span>
        <LinkContainer to={"/auth/register"}>
          <span>Register</span>
        </LinkContainer>
      </div>
    </form>
  </>
  )
}

export default Reset