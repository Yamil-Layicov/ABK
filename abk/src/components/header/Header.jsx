import "./header.scss";
import BlurOnOutlinedIcon from "@mui/icons-material/BlurOnOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <h6>WELCOOME TO BIOXLAB</h6>
        <h1>Passion For Better Medicine</h1>
        <p>
          Your full service lab for clinical trials. Our mission is to ensure
          the generation of accurate and precise findings
        </p>
        <button>Haqqimizda</button>
      </div>
      <div className="right">
        <div className="img">
          <img
            src="https://bioxlab-next-js.vercel.app/assets/img/banner/banner-01.png"
            alt=""
          />
          <div className="video">
            <div className="videClick"></div>
          </div>
          <div className="helpdesk">
            <span className="icon">
              <BlurOnOutlinedIcon />
            </span>
            <span className="text">
              <span>HELPDESK</span> :+554274545
            </span>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="boxes">
          <div className="box">
            <span className="iconPerson">
              <PersonAddAlt1OutlinedIcon />
            </span>
            <span>100% Customer Satisfaction</span>
          </div>
          <div className="box">
            <span className="iconPerson">
              <PersonAddAlt1OutlinedIcon />
            </span>
            <span>100% Customer Satisfaction</span>
          </div>
          <div className="box">
            <span className="iconPerson">
              <PersonAddAlt1OutlinedIcon />
            </span>
            <span>100% Customer Satisfaction</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
