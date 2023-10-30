import "./team.scss";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const images = [
    {
      id: 1,
      title:
        "https://bioxlab-next-js.vercel.app/assets/img/team/team-thumb-04.jpg",
        h3:"Jhon Meathwu1",
        h6:"Genetic Specialisf"
    },
    {
      id: 2,
      title:
        "https://bioxlab-next-js.vercel.app/assets/img/team/team-thumb-05.jpg",
        h3:"Jhon Meathwu2",
        h6:"Genetic Specialisf"
    },
    {
      id: 3,
      title:
        "https://bioxlab-next-js.vercel.app/assets/img/team/team-thumb-06.jpg",
        h3:"Jhon Meathwu3",
        h6:"Genetic Specialisf"
    },
    {
      id: 4,
      title:
        "https://bioxlab-next-js.vercel.app/assets/img/team/team-thumb-01.jpg",
        h3:"Jhon Meathwu4",
        h6:"Genetic Specialisf"
    },
    {
      id: 5,
      title:
        "https://bioxlab-next-js.vercel.app/assets/img/team/team-thumb-06.jpg",
        h3:"Jhon Meathwu5",
        h6:"Genetic Specialisf"
    },
    {
      id: 6,
      title:
        "https://bioxlab-next-js.vercel.app/assets/img/team/team-thumb-01.jpg",
        h3:"Jhon Meathwu6",
        h6:"Genetic Specialisf"
    },
    {
      id: 7,
      title:
        "https://bioxlab-next-js.vercel.app/assets/img/team/team-thumb-04.jpg",
        h3:"Jhon Meathwu7",
        h6:"Genetic Specialisf"
    },
    {
      id: 8,
      title:
        "https://bioxlab-next-js.vercel.app/assets/img/team/team-thumb-04.jpg",
        h3:"Jhon Meathwu8",
        h6:"Genetic Specialisf"
    },
    {
      id: 9,
      title:
        "https://bioxlab-next-js.vercel.app/assets/img/team/team-thumb-04.jpg",
        h3:"Jhon Meathwu9",
        h6:"Genetic Specialisf"
    },
  ];


const Team = () => {


  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);


  return (
    <div className="team">
      <div className="galleryHeader">
        <h6>___KOMANDAMIZ</h6>
        <h1>Əməkdaşlarımızla tanış olun</h1>
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
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={`item`}
              >
                <img src={image.title} alt={`Item ${index}`} />
                <div className="deatilSpecialist">
                <h3>{image.h3}</h3>
                <h6>{image.h6}</h6>
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
