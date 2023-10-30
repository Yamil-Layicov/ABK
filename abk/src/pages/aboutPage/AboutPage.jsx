import bgImg from "../../assets/pageBanner.jpg";
import "./aboutPage.scss";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";


const AboutPage = () => {
  return (
    <div className="aboutPage">
      <div className="hedaerSection">
        <div className="img">
          <img src={bgImg} alt="" />
        </div>
        <h1>HAQQIMIZDA</h1>
      </div>

      <div className="aboutContent">
        <div className="imgContainer">
          <div className="imgOne">
            <img
              src="https://bioxlab-next-js.vercel.app/assets/img/about/about-bg-04.jpg"
              alt=""
            />
            <div className="experinceBox">
              <span>12</span>
              <span>Years of</span>
              <span>Experience</span>
            </div>
          </div>
          <div>
            <div className="imgTwo">
              <img
                src="https://bioxlab-next-js.vercel.app/assets/img/about/about-bg-05.jpg"
                alt=""
              />
            </div>
            <div className="imgThree">
              <img
                src="https://bioxlab-next-js.vercel.app/assets/img/about/about-bg-06.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="textContainer">
          <h1>We’ll Ensure You Alwasy Get Best Results.</h1>
          <p className="first">
            Your full service lab for clinical trials. Our mission is to ensure
            the generation of accurate and precise findings
          </p>
          <p className="second">
            Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea
            commodo claritatem insitamconse quat.Exerci tation ullamcorper
            suscipit loborti excommodo habent claritatem insitamconse
            quat.Exerci tationlobortis nisl aliquip ex ea commodo habent
            claritatem insitamconse quat.
          </p>
          <div className="doneBox">
            <span className="spanIcon">
              <DoneOutlinedIcon />
            </span>
            <span>Extramural Funding</span>
          </div>
          <div className="doneBox">
            <span className="spanIcon">
              <DoneOutlinedIcon />
            </span>
            <span>Bacteria Markers</span>
          </div>
          <div className="doneBox">
            <span className="spanIcon">
              <DoneOutlinedIcon />
            </span>
            <span>Nam nec mi euismod euismod</span>
          </div>
          <div className="doneBox">
            <span className="spanIcon">
              <DoneOutlinedIcon />
            </span>
            <span>In aliquet dui nec lectus</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
