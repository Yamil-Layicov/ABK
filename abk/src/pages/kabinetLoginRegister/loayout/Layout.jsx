import { Outlet, useNavigate } from "react-router-dom";
import "./layout.scss";

const Layout = () => {
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("");
  };
  const navigateRegister = () => {
    navigate("qeydiyyat");
  };

  return (
    <div className="layout" style={{ display: "flex" }}>
      <div className="left">
        <img
          style={{ width: "600px", height: "100vh", objectFit: "cover" }}
          src="https://brandio.io/envato/iofrm/html/images/img2.jpg"
          alt=""
        />
      </div>
      <div className="right">
        <div>
          <div className="rightInto">
            <h4>
              Get more things done with <br /> Loggin platform.
            </h4>
            <p>
              Access to the most powerfull tool in the <br /> entire design and
              web industry.
            </p>
            <div className="spans">
              <span onClick={navigateLogin}>Login</span>
              <span onClick={navigateRegister}>Register</span>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
