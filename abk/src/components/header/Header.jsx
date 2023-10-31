import "./header.scss";
import BlurOnOutlinedIcon from "@mui/icons-material/BlurOnOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import {useNavigate} from 'react-router-dom';
import img1 from './img1.jpg' ;

const Header = () => {
  const navigate = useNavigate()

  const navigateAbout = () => {
    navigate("haqqımızda")
  }

  return (
    <div className="header">
      <div className="left">
        <h6>Agro Bitki Klinikasına xoşgəlmisiniz</h6>
        <h1>SAĞLAM TƏBİƏT SAĞLAM GƏLƏCƏK</h1>
        <p>
        Ən son texnoloji avadanlıqlarla təmin olunmuş tam lisenziyalı və akkreditə olunmuş laboratoriya. 
        </p>
        <button onClick={navigateAbout}>Haqqımızda</button>
      </div>
      <div className="right">
        <div className="img">
          <img
            src={img1}
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
            <span>Müştəri Məmnuniyyəti</span>
          </div>
          <div className="box">
            <span className="iconPerson">
              <PersonAddAlt1OutlinedIcon />
            </span>
            <span>Sürətli İş Prosesi</span>
          </div>
          <div className="box">
            <span className="iconPerson">
              <PersonAddAlt1OutlinedIcon />
            </span>
            <span>Yüksək Keyfiyyətli Xidmətlər</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
