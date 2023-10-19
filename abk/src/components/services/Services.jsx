import { useState, useRef } from "react";
import "./services.scss";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";

const serviceData = [
  {
    id: 1,
    logo: <BiotechOutlinedIcon fontSize="large" />,
    title: "title-1",
    desc: "desc-1",
  },
  {
    id: 2,
    logo: <BiotechOutlinedIcon fontSize="large" />,
    title: "title-2",
    desc: "desc-2",
  },
  {
    id: 3,
    logo: <BiotechOutlinedIcon fontSize="large" />,
    title: "title-3",
    desc: "desc-3",
  },
  {
    id: 4,
    logo: <BiotechOutlinedIcon fontSize="large" />,
    title: "title-4",
    desc: "desc-4",
  },
  {
    id: 5,
    logo: <BiotechOutlinedIcon fontSize="large" />,
    title: "title-5",
    desc: "desc-5",
  },
  {
    id: 6,
    logo: <BiotechOutlinedIcon fontSize="large" />,
    title: "title-6",
    desc: "desc-6",
  },
];

const Services = () => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);
  const boxWidth = 390;

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
          <div key={index} className={`box ${index === 0 && "box1"}`}>
            <div>{box.logo}</div>
            <div>{box.title}</div>
            <div>{box.desc}</div>
            <div>READ MORE</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
