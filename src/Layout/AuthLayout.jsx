import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const AuthLayout = () => {

  const [showFooter, setShowFooter] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
 
        <section className="login">
          <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-6 login-col">
                 <Outlet/>
                </div>
              <div className="col-12 col-md-6">
                <div className="login-img"></div>
              </div>
            </div>
          </div>
          {showFooter && <Footer />}
        </section>
      );
    };

export default AuthLayout