import BlurOnOutlinedIcon from "@mui/icons-material/BlurOnOutlined";
import "./navbar.scss";
import { useEffect, useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  // const moveToTop = () => {
  //   window.scrollTo({
  //     top:0,
  //   })
  // }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const openNavbar = () => {
    setIsOpenNavbar(!isOpenNavbar)
  }

  return (
    <>
      <nav className={`${navbar && "navActive"}`}>
        <div className="left">
          <div className="logo">
            <img
              src="https://bioxlab-next-js.vercel.app/assets/img/logo/logo.png"
              alt=""
            />
          </div>
          <div className="links">
            <span>Home</span>
            <span>Page</span>
            <span>Page</span>
            <span>Page</span>
            <span>Blog</span>
            <span>Contact</span>
          </div>
        </div>
        <div className="mainRight">
          <div className="right">
            <div className="helpdesk">
              <span className="icon">
                <BlurOnOutlinedIcon />
              </span>
              <span className="text">
                <span>HELPDESK</span> :+554274545
              </span>
            </div>
          </div>
          <div onClick={openNavbar} className="menuBtn">
            <MenuOutlinedIcon fontSize="large" />
          </div>
        </div>
        <div className={`${isOpenNavbar ? "activeMobileNav" : "mobileNav"}`}>
          <div className="mobileLeft">
            <div className="logo">
              <img
                src="https://bioxlab-next-js.vercel.app/assets/img/logo/white-logo.png"
                alt=""
              />
              <div onClick={() => setIsOpenNavbar(false)} className="iconMenu"><CloseOutlinedIcon/></div>
            </div>
            <div className="links">
              <span>Home</span>
              <span>Page</span>
              <span>Page</span>
              <span>Page</span>
              <span>Blog</span>
              <span>Contact</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
