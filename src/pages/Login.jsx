import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import eye1 from '../assets/img/eye.svg'
import eye2 from '../assets/img/eye2.svg'
import { useState } from "react";

const Login = () => {
  const navigate =useNavigate();

   const user = [
        {
          id: 0,
          email: "Narmin@gmail.com",
          password: "narmin1234",
        },
      ];
      const [email, setEmail] = useState();
      const [password, setPassword] = useState();
      const [icon, setIcon] = useState(eye1);
      const [type, setType] = useState("password");
      const [alerText, setAlertText] = useState("");
    
      const eye = () => {
        console.log("jk");
        if (icon === eye1) {
          setIcon(eye2);
          setType("text");
        } else {
          setIcon(eye1);
          setType("password");
        }
      };
      const loginSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
          alert("please, fill the gap");
        } else {
          for (let x in user) {
            if (email === user[x].email && password === user[x].password) {
              localStorage.setItem("email", user[x].email);
              localStorage.setItem("password", user[x].password);
              window.scrollTo(0, 0);
              navigate("/account");
              return;
            } else {
              setAlertText("Nickname or password is wrong");
            }
          }
        }
      };
  return (
    <>
      <div className="login_home">
        <LinkContainer to={"/"}>
          <i className="fa-solid fa-circle-left"></i>
        </LinkContainer>
        <span>HOME</span>
      </div>
      <form onSubmit={loginSubmit}>
              <h3>LOG IN</h3>
              <p className="text-center text-danger">{alerText}</p>
              <input
                type="email"
                placeholder="E-MAIL ADDRESS"
                className="form-control input"
                onChange={(e)=>{setEmail(e.target.value)}}
              />
              <div className="position-relative">
                <input
                  type={type}
                  placeholder="PASSWORD"
                  className="form-control input"
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
                <span className="position-absolute" onClick={eye}>
                  <img src={icon} alt="" />
                </span>
              </div>
              <span
                className="forget-password"
                onClick={() => {
                 navigate("/auth/reset")
                }}
              >
                Forgot password?
              </span>
              <button type="submit" className="primary-button form-control">
                LOG IN
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

export default Login