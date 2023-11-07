import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import api from "../../admin/api/posts";
import "./services.scss"; // Ensure that your SCSS file is correctly imported.

const Team = () => {
  const [serviceData, setServiceData] = useState([]);
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("services");
        setServiceData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [serviceData]);

  return (
    <div className="services">
      <div className="galleryHeader">
        <h6>____XİDMƏTLƏRİMİZ</h6>
        <h1>Xidmət Sahəsi</h1>
      </div>
      <div className="gallerySlider">
        <motion.div
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
          className="carousel"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {serviceData.map((item, index) => (
              <motion.div key={item.id} className={`item ${index === 0 ? "item0" : index === 1 ? "item1" : index === 2 ? "item2" : index === 3 ? "item3" : index === 4 ? "item4" : index === 5 ? "item5" : index === 6 ? "item6" : index === 7 ? "item7" : index === 8 ? "item8" : index === 9 ? "item9" : "item10"}`}>
                <div className="img">
                  <img src={item.image} alt="" />
                </div>
                <div className="deatilSpecialist">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
