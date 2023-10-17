import BlurOnOutlinedIcon from '@mui/icons-material/BlurOnOutlined';
import './navbar.scss'
import { useEffect, useState } from 'react';

const Navbar = () => {

  const [navbar, setNavbar] = useState(false);
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);


  const changeBackground = () => {
    if (window.scrollY >=80) {
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
    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <>
      <nav className={`${navbar && "navActive"}`}>
        <div className="left">
          <div className="logo"><img src="https://bioxlab-next-js.vercel.app/assets/img/logo/logo.png" alt="" /></div>
          <div className="links">
            <span>Home</span>
            <span>Page</span>
            <span>Page</span>
            <span>Page</span>
            <span>Blog</span>
            <span>Contact</span>
          </div>
        </div>
        <div className="right">
          <div className="helpdesk">
            <span className='icon'><BlurOnOutlinedIcon/></span>
            <span className='text'><span>HELPDESK</span> :+554274545</span>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar