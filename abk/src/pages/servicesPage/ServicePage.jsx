import "./servicePage.scss";
import bgImg from "../../assets/pageBanner.jpg";
import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";

const serviceData = [
  {
    id: 1,
    logo: <BiotechOutlinedIcon fontSize="large" />,
    title: "BLOOD TESTING",
    desc: "Nam eget dui vel quam sodales semper quis ",
    desc1: "Nam eget dui vel quam sodales semper  ",
    desc2: "Nam eget dui  ",
  },
  {
    id: 2,
    logo: <BiotechOutlinedIcon fontSize="large" />,
    title: "BLOOD TESTING",
    desc: "Nam eget dui vel quam sodales semper quis ",
    desc1: "Nam eget dui vel quam sodales semper  ",
    desc2: "Nam eget dui  ",
  },
  {
    id: 3,
    logo: <BiotechOutlinedIcon fontSize="large" />,
    title: "BLOOD TESTING",
    desc: "Nam eget dui vel quam sodales semper quis ",
    desc1: "Nam eget dui vel quam sodales semper  ",
    desc2: "Nam eget dui vel  ",
  },
  {
    id: 4,
    logo: <BiotechOutlinedIcon fontSize="large" />,
    title: "BLOOD TESTING",
    desc: "Nam eget dui vel quam sodales semper quis ",
    desc1: "Nam eget dui vel quam sodales semper  ",
    desc2: "Nam eget dui  ",
  },
  {
    id: 5,
    logo: <BiotechOutlinedIcon fontSize="large" />,
    title: "BLOOD TESTING",
    desc: "Nam eget dui vel quam sodales semper quis ",
    desc1: "Nam eget dui vel quam sodales semper  ",
    desc2: "Nam eget dui vel  ",
  },
  {
    id: 6,
    logo: <BiotechOutlinedIcon fontSize="large" />,
    title: "BLOOD TESTING",
    desc: "Nam eget dui vel quam sodales semper quis ",
    desc1: "Nam eget dui vel quam sodales semper  ",
    desc2: "Nam eget dui   ",
  },
];

const ServicePage = () => {
  return (
    <div className="servicePage">
      <div className="hedaerSection">
        <div className="img">
          <img src={bgImg} alt="" />
        </div>
        <h1>XIDMƏTLƏR</h1>
      </div>
      <div className="centerSection">
      <div className="textHeader">
         <h5> ___OUR SERVICES___</h5>
         <h1>Service Area</h1>
        </div>
        <div className="boxes">
        {serviceData.map((box, index) => (
          <div
            key={index}
            className={`box ${index === 0 && "box1"} ${index === 1 && "box2"} ${
              index === 2 && "box3"
            } ${index === 3 && "box4"} ${index === 4 && "box5"} ${
              index === 5 && "box6"
            }`}
          >
            <div className="intoBox">
              <span className="labIcon">{box.logo}</span>
              <div className="labTitle">{box.title}</div>
              <div className="labDesc">
                <div>{box.desc}</div>
                <div>{box.desc1}</div>
                <div>{box.desc2}</div>
              </div>
              <div className="readMore">
                <div className="redMoreBox"></div>
                <span>READ MORE</span>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
      <div className="plansection"></div>
    </div>
  );
};

export default ServicePage;
