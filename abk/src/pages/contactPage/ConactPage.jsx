import bgImg from "../../assets/pageBanner.jpg";
import "./contactPage.scss";
import { CiLocationOn } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

const ConactPage = () => {
  return (
    <div className="contactPage">
      <div className="hedaerSection">
        <div className="img">
          <img src={bgImg} alt="" />
        </div>
        <h1>ƏLAQƏ</h1>
      </div>
      <div className="pageContent">
        <div className="left">
          <div className="box">
            <span className="icon">
              <CiLocationOn />
            </span>
            <h3>Məkan</h3>
            <p>
              Bakı şəhər, Nərimanov rayonu, <br /> Ələsgər Qayıbov 12 22
            </p>
          </div>
          <div className="box">
            <span className="icon">
              <BsPhone />
            </span>
            <h3>Zəng Üçün</h3>
            <p>(+994 12) 514 19 46</p>
          </div>
          <div className="box">
            <span className="icon">
              <AiOutlineClockCircle />
            </span>
            <h3>24/7 Dəstək</h3>
            <p>info@abk-fito.az</p>
          </div>
        </div>
        <div className="right">
          <h2>Bizə masaj göndərin :</h2>
          <form>
            <div className="upInputs">
              <input type="text" placeholder="adınızı daxil edin" />
              <input type="email" placeholder="e-poçt daxil edin " />
              <input type="text" placeholder="nömrənizi yazın" />
            </div>
            <textarea style={{padding:"20px"}} placeholder="mesajınızı yazın" name="" id="" cols="30" rows="10"></textarea>
            <button>Mesaj göndər</button>
          </form>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12149.849936129462!2d49.8786396!3d40.420757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403089a3b0fde691%3A0x38ac3991190cca0!2sAgro%20Bitki%20Klinikas%C4%B1%20-%20Fitolab!5e0!3m2!1str!2saz!4v1698134293423!5m2!1str!2saz"></iframe>
        </div>
      </div>
    </div>
  );
};

export default ConactPage;
