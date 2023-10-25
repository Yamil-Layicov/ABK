import "./footer.scss";
import fb from "../../assets/socials/facebook_icon.svg";
import insta from "../../assets/socials/instagram_icon.svg";
import twt from "../../assets/socials/twitter_icon.svg";
import {BiLogoTelegram} from 'react-icons/bi'

const Footer = () => {
  return (
    <div className="footer">
      <div className="boxes">
        <div className="firstBox">
          <img
            src="https://bioxlab-next-js.vercel.app/assets/img/logo/white-logo.png"
            alt=""
          />
          <p>
            Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea
            commodo claritatem itamconse quat.Exerci tation ullamcorper.
          </p>
          <div className="socials">
            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={twt} alt="" />
          </div>
        </div>
        <div className="secondBox">
          <h4>Useful links</h4>
          <p>Contact us</p>
          <p>Help & About us</p>
          <p>Shipping & Returns</p>
          <p>Refund Policy</p>
          <p>About us</p>
          <p>Services</p>
        </div>
        <div className="thirdBox">
          <h4>Contact info</h4>
          <p>Ta-134/A, Gulshan Badda Link</p>
          <p>(+880)155 69569 365</p>
          <p>support@rstheme.com</p>
          <p>Office Hours: 8AM - 11PM</p>
          <p>Sunday - Wekend Day</p>
        </div>
        <div className="subcriber">
          <h4>Subscribe Newslatter</h4>
          <p>
            Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea
            commodo
          </p>
          <div className="inputMsg">
            <input type="text" placeholder="Enter Mail" />
            <div className="sendBox"><BiLogoTelegram/></div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>
          © Copyright © 2022 FİTOLAB. Bütün Hüquqlar Qorunur.
        </span>
        <div className="right">
          <span>Terms and conditions</span>
          <span>Privacy policy</span>
          <span>Pricing</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
