import "./whyChooseUs.scss";
import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";
import { ImLab } from "react-icons/im";

const WhyChooseUs = () => {
  return (
    <div className="whyChooseUs">
      <div className="headerText">
        <h6>___OUR SPECIALISTS___</h6>
        <h1>Why Choose Us</h1>
      </div>
      <div className="boxes">
        <div className="box">
          <div className="labIcon">
            <span>
            <ImLab />
            </span>
          </div>
          <h3>High Quality Services</h3>
          <p>Nam eget dui vel quam sodales semper quis porttitor tortor.</p>
        </div>
        <div className="box">
          <div className="labIcon">
            <span>
            <ImLab />
            </span>
          </div>
          <h3>Fast Working Process</h3>
          <p>Nam eget dui vel quam sodales semper quis porttitor tortor.</p>
        </div>
        <div className="box">
          <div className="labIcon">
            <span>
            <ImLab />
            </span>
          </div>
          <h3>24/7 Customer Support</h3>
          <p>Nam eget dui vel quam sodales semper quis porttitor tortor.</p>
        </div>
        <div className="box">
          <div className="labIcon">
            <span>
            <ImLab />
            </span>
          </div>
          <h3>We have Expert Team</h3>
          <p>Nam eget dui vel quam sodales semper quis porttitor tortor.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
