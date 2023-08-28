import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom"

const Verify = () => {
  const navigate=useNavigate();
  return (
    <>
      <div className="login_home">
      <LinkContainer to={"/auth/reset"}>
        <i className="fa-solid fa-circle-left"></i>
      </LinkContainer>
        <span>BACK</span>
      </div>
      <form>
        <h3 className="animate__animated animate__fadeInDown ">VERIFICATION</h3>
        <input
          type="text"
          placeholder="ENTER VERIFICATION NUMBER"
          className="form-control input"
        />
        <div className="d-flex mb-4">
          <span>Didn’t receive a code?</span>
          <span>Resend</span>
        </div>
        <button
          type="submit"
          className="primary-button mt-3 form-control"
          onClick={()=>{navigate("/auth/newpassword")}}
        >
          VERIFY
        </button>
      </form>
    </>
  )
}

export default Verify