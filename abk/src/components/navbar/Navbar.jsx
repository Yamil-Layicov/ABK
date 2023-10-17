import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <div className="left"></div>
      <div className="center"></div>
      <div className="right"></div> */}
      <header className="primary-header flex">
        <div className="left">
          <img
            src="https://bioxlab-next-js.vercel.app/assets/img/logo/logo.png"
            alt="logo"
            className="logo"
          />
        </div>
        <button
          className="mobile-nav-toggle"
          aria-controls="primary-navigation"
          aria-expanded="false"
        >
          <span className="sr-only"></span>
        </button>
        <ul className="primary-navigation right flex" id="primary-navigation">
          <li className="active">
            <a href="#">
              00<span aria-hidden="true">Home</span>
            </a>
          </li>
          <li className="active">
            <a href="#">
              01<span aria-hidden="true">Home</span>
            </a>
          </li>
          <li className="active">
            <a href="#">
              02<span aria-hidden="true">Home</span>
            </a>
          </li>
          <li className="active">
            <a href="#">
              03<span aria-hidden="true">Home</span>
            </a>
          </li>
        </ul>
      </header>
    </nav>
  );
};

export default Navbar;
