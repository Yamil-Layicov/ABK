import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="imgContainer">
        <div className="img">
          <img
            src="https://bioxlab-next-js.vercel.app/assets/img/about/about-bg-01.png"
            alt=""
          />
          <div className="experienceBox">
            <div className="spanNum">12</div>
            <div className="spanText">Years of</div>
            <div className="spanText">Experience</div>
          </div>
        </div>
      </div>
      <div className="textContainer">
        <h6>___ABOUT</h6>
        <h1>Best Laboratory For Testing And Research</h1>
        <p className="first">
          Your full service lab for clinical trials. Our mission is to ensure
          the generation of accurate and precise findings
        </p>
        <p className="second">
          Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo
          claritatem insitamconse quat.Exerci tation ullamcorper suscipit
          loborti excommodo habent claritatem insitamconse quat.Exerci
          tationlobortis nisl aliquip ex ea commodo habent claritatem
          insitamconse quat.
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
        <button>About us</button>
      </div>
    </div>
  );
};

export default About;
