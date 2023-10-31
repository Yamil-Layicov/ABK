import { useState, useRef } from "react";
import "./services.scss";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";
import {useNavigate} from 'react-router-dom';
import img1 from './imgs/abk fitosanitar.svg';
import img2 from './imgs/abk virusoloji.svg';
import img3 from './imgs/abk gmo.svg';
import img4 from './imgs/abk torpaq və su.svg';
import img5 from './imgs/abk monitoring.svg';
import img6 from './imgs/abk təlim.svg';

const serviceData = [
  {
    id: 1,
    logo: img1,
    title: "Fitosanitar laboratoriya ",
    desc: "Laboratoriyada fitosanitar nəzarətində olan ",
    desc1: "materiallarda entomoloji, herboloji, fitohelmintoloji, ",
    desc2: " mikoloji analizlər həyata keçirir. ",
  },
  {
    id: 2,
    logo: img2,
    title: "Virusoloji  laboratoriya",
    desc: " bitki nümunələrində karantin nəzarətində olan virus ",
    desc1: "xəstəliklərinin aşkarlanması, onların molekulyar ",
    desc2: "mexanizm vasitəsilə daha dəqiq və qısa zamanda ",
    desc3: "diaqnostikasını həyata keçirir. ",
  },
  {
    id: 3,
    logo: img3,
    title: "Qida məhsullarının GMO ",
    title1: "analizi ",
    desc: "Laboratoriamızda qida məhsullarında geni",
    desc1: "modifikasiya olunmuş orqanizmlərin Real vaxtda ",
    desc2: "PZR ilə təyini həyata keçirilir. ",
  },
  {
    id: 4,
    logo: img4,
    title: "Bakterioloji laboratoriya",
    desc: "Fitopatoloji ekspertiza zamanı  bakteriya mənşəli ",
    desc1: "xəstəlik törədicilərinin təbii substratdan ayrılması ",
    desc2: "və qida mühitlərinə əkilməsi, morfoloji və ",
    desc3: "morfometrik əlamətlərə əsasən xəstəlik ",
    desc4: "törədicilərinin aşkarlanması aparılır."
  },
  {
    id: 5,
    logo: img5,
    title: "Monitorinq ",
    desc: "Tarla, bağ, bostan və istixana sahələrində ",
    desc1: "monitorinqlərin aparılması.",
  },
  {
    id: 6,
    logo: img6,
    title: "Təlim",
    desc: "Öz sahələrində ixtisaslaşmış əməkdaşlar daha yaxşı ",
    desc1: "nəticə əldə etmək, aqrar sahədə inkişaflar üçün ",
    desc2: "xüsusi təlimlər keçirirlər",
  },
];

const Services = () => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);
  const boxWidth = 410;
  const navigate = useNavigate()

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

  

  const navigateReadMore = () => {
    navigate("/services")
    window.scrollTo({
      top:0,
    })
  }

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
          <h5>____XİDMƏTLƏRİMİZ</h5>
          <h1>Xidmət Sahəsi</h1>
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
              <span className="labIcon">
                <img src={box.logo} alt="" />
              </span>
              <div className="labTitle">
                {box.title} <br /> {box.title1}
              </div>
              <div className="labDesc">
                <div>{box.desc}</div>
                <div>{box.desc1}</div>
                <div>{box.desc2}</div>
                <div>{box.desc3}</div>
                <div>{box.desc4}</div>
              </div>
              <div className="readMore">
                <div className="redMoreBox"></div>
                <span onClick={navigateReadMore}>DAHA ƏTRAFLI</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
