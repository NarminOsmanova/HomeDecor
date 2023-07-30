import { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const user = [
    {
      id: 0,
      email: "Narmin@gmail.com",
      password: "narmin1234",
      fullname: "Narmin Osmanova",
    },
  ];
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState("");
  const [alerText, setAlertText] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !fullname || !repeatPassword) {
      alert("please, fill the gap");
    } else {
      for (let x in user) {
        if (
          fullname === user[x].fullname &&
          email === user[x].email &&
          password === user[x].password && repeatPassword === user[x].password
        ) {
          localStorage.setItem("email", user[x].email);
          const fullnameArray = [fullname];
          localStorage.setItem("user", JSON.stringify(fullnameArray));
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
        <h3>REGISTER</h3>
        <p className="text-center text-danger">{alerText}</p>
        <input
          type="text"
          name=""
          id=""
          className="input form-control"
          placeholder="NAME, SURNAME"
          onChange={(e) => {
            setFullname(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="E-MAIL ADDRESS"
          className="form-control input"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="PASSWORD"
          className="form-control input"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="REPEAT PASSWORD"
          className="form-control input"
          onChange={(e) => {
            setRepeatPassword(e.target.value);
          }}
        />

        <button type="submit" className="primary-button form-control">
          LOG IN
        </button>
        <div className="d-flex">
          <span>Already have an account?</span>
          <LinkContainer to={"/auth/login"}>
            <span>Log in</span>
          </LinkContainer>
        </div>
      </form>
    </>
  );
};

export default Register;