import React, { useRef, useState, useEffect } from "react";
import "./services.scss";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

const Services = () => {
  const dragRef = useRef(null);
  const firstImgRef = useRef(null);
  const [isDragStart, setIsDragStart] = useState(false);
  const [prevPageX, setPrevPageX] = useState(0);
  const [prevScrollLeft, setPrevScrollLeft] = useState(0);
  const [firstImgWidth, setFirstImgWidth] = useState(0);

  useEffect(() => {
    setFirstImgWidth(firstImgRef.current && firstImgRef.current.clientWidth + 20);
  }, []);

  const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    const positionDiff = e.pageX - prevPageX;
    dragRef.current.scrollLeft = prevScrollLeft - positionDiff;
  };

  const dragStart = (e) => {
    setIsDragStart(true);
    setPrevPageX(e.pageX);
    setPrevScrollLeft(dragRef.current.scrollLeft);
  };

  const dragStop = () => {
    setIsDragStart(false);
  };

  const imgScroll = (direction) => {
    const scrollAmount = direction === "left" ? -firstImgWidth : firstImgWidth;
    const totalScrollWidth = dragRef.current.scrollWidth - dragRef.current.clientWidth;
  
    if (direction === "right" && dragRef.current.scrollLeft + scrollAmount >= totalScrollWidth) {
      dragRef.current.scrollLeft = 0;
    } else {
      dragRef.current.scrollLeft += scrollAmount;
    }
  };
  

  return (
    <div className="services">
      <div className="wrapper">
        <div className="arrowIcons">
          <span onClick={() => imgScroll("left")} className="leftIcon">
            <span>
              <WestOutlinedIcon fontSize="small" />
            </span>
          </span>
          <span onClick={() => imgScroll("right")} className="rightIcon">
            <span>
              <EastOutlinedIcon fontSize="small" />
            </span>
          </span>
        </div>
          <div
          onMouseMove={dragging}
          onMouseDown={dragStart}
          onMouseUp={dragStop}
          ref={dragRef}
          className="carousel"
        >
          <img
            src="https://images.unsplash.com/photo-1696595883516-76c97aa3a164?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            ref={firstImgRef}
          />
          <img
            src="https://images.unsplash.com/photo-1696595883555-5a2f5ab967f8?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1638368888223-687b8f4fa9b6?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1608985925941-782148baea7c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1634718720631-f55677e21171?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1696595883516-76c97aa3a164?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1696595883555-5a2f5ab967f8?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1638368888223-687b8f4fa9b6?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1608985925941-782148baea7c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1634718720631-f55677e21171?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Services;




