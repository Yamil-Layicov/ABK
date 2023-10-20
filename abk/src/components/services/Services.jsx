import { useState, useRef } from "react";
import "./services.scss";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
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

const Services = () => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);
  const boxWidth = 410;

  const handleSlide = (direction) => {
    const container = containerRef.current;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    let newScrollLeft;

    if (direction === "right") {
      newScrollLeft = scrollLeft + boxWidth;
      if (newScrollLeft >= maxScrollLeft) {
        newScrollLeft = 0;
      }
    } else {
      newScrollLeft = scrollLeft - boxWidth;
      if (newScrollLeft < 0) {
        newScrollLeft = 0;
      }
    }

    if (container) {
      container.scrollLeft = newScrollLeft;
      setScrollLeft(newScrollLeft);
    }
  };

  const [isDragStart, setIsDragStart] = useState(false);
  const [prevPageX, setPrevPageX] = useState(0);
  const [prevScrollLeft, setPrevScrollLeft] = useState(0);

  const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    const positionDiff = e.pageX - prevPageX;
    containerRef.current.scrollLeft = prevScrollLeft - positionDiff;
  };

  const dragStart = (e) => {
    setIsDragStart(true);
    setPrevPageX(e.pageX);
    setPrevScrollLeft(containerRef.current.scrollLeft);
  };

  const dragStop = () => {
    setIsDragStart(false);
  };

  return (
    <div className="services">
      <div className="serviceHeader">
        <div className="headerTitle">
          <h5>____our services</h5>
          <h1>Service Area</h1>
        </div>
        <div className="arrowIcons">
          <span onClick={() => handleSlide("left")} className="leftIcon">
            <span>
              <WestOutlinedIcon fontSize="small" />
            </span>
          </span>
          <span onClick={() => handleSlide("right")} className="rightIcon">
            <span>
              <EastOutlinedIcon fontSize="small" />
            </span>
          </span>
        </div>
      </div>
      <div
        ref={containerRef}
        className="carousel"
        onMouseMove={dragging}
        onMouseDown={dragStart}
        onMouseUp={dragStop}
      >
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
  );
};

export default Services;
