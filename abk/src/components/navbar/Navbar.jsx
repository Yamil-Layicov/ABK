import BlurOnOutlinedIcon from "@mui/icons-material/BlurOnOutlined";
import "./navbar.scss";
import { useEffect, useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import {BiLogoFacebook} from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const moveToTop = () => {
    window.scrollTo({
      top:0,
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);



  const openNavbar = () => {
    if(isOpenNavbar){
      setIsOpenNavbar(false);
      document.body.style.overflow = "hidden"
    }else{
      setIsOpenNavbar(true);
      document.body.style.overflow = "auto"
    }
  };

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
          <NavLink style={({isActive}) => ({color: isActive ? "#171151" : ''})} onClick={() => moveToTop()} to='/' className='link'>Ana səhifə</NavLink>
            <NavLink style={({isActive}) => ({color: isActive ? "#171151" : ''})} onClick={() => moveToTop()} to='/services' className='link'>Xidmətlər</NavLink>
            <NavLink style={({isActive}) => ({color: isActive ? "#171151" : ''})} onClick={() => moveToTop()} to='/blog' className='link'>Bloq</NavLink>
            <NavLink style={({isActive}) => ({color: isActive ? "#171151" : ''})} onClick={() => moveToTop()} to='/haqqımızda' className='link'>Haqqımızda</NavLink>
            <NavLink style={({isActive}) => ({color: isActive ? "#171151" : ''})} onClick={() => moveToTop()} to='/contact' className='link'>Əlaqə</NavLink>
            <NavLink style={({isActive}) => ({color: isActive ? "#171151" : ''})} onClick={() => moveToTop()} to='/faq' className='link'>faq</NavLink>
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
              <div onClick={() => setIsOpenNavbar(false)} className="iconMenu">
                <CloseOutlinedIcon />
              </div>
            </div>
            <div className="links">
              <span>Home</span>
              <span>Page</span>
              <span>Page</span>
              <span>Page</span>
              <span>Blog</span>
              <span>Contact</span>
            </div>
            <div className="navContact">
              <h5>Contact us</h5>
              <p>
                <span>
                  <StarOutlinedIcon
                    style={{ fill: "#FFCC00" }}
                    fontSize="small"
                  />
                </span>
                <span>Lorem ipsum dolor sit.asd</span>
              </p>
              <p>
                <span>
                  <StarOutlinedIcon
                    style={{ fill: "#FFCC00" }}
                    fontSize="small"
                  />
                </span>
                <span>+234324324234</span>
              </p>
              <p>
                <span>
                  <StarOutlinedIcon
                    style={{ fill: "#FFCC00" }}
                    fontSize="small"
                  />
                </span>
                <span>loremasd@mail.ru</span>
              </p>
              <div className="socials">
                <span><BiLogoFacebook/></span>
                <span><BiLogoFacebook/></span>
                <span><BiLogoFacebook/></span>
                <span><BiLogoFacebook/></span>
              </div>
            </div>
          </div>
        </div>

        
        {isOpenNavbar && <div className="backBlack"></div>}
      </nav>
    </>
  );
};

export default Navbar;
