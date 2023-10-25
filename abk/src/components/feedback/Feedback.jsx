import "./feedback.scss";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const images = [
    {
      id: 1,
      title:
        "BIoxlab is another theme that is beautiful and professinally constructed by the Developers. The price for the template is checp but not qualityh of product.what a bargain , This theme works for many types of web sites and seems to be durble dows nt break and it.",
        h3:"Courtney Henry",
        h6:"Programmer of (FlaxStudio)"
    },
    {
      id: 2,
      title:
        "BIoxlab is another theme that is beautiful and professinally constructed by the Developers. The price for the template is checp but not qualityh of product.what a bargain , This theme works for many types of web sites and seems to be durble dows nt break and it.",
        h3:"Courtney Henry",
        h6:"Programmer of (FlaxStudio)"
    },
    {
      id: 3,
      title:
        "BIoxlab is another theme that is beautiful and professinally constructed by the Developers. The price for the template is checp but not qualityh of product.what a bargain , This theme works for many types of web sites and seems to be durble dows nt break and it.",
        h3:"Courtney Henry",
        h6:"Programmer of (FlaxStudio)"
    },
    {
      id: 4,
      title:
        "BIoxlab is another theme that is beautiful and professinally constructed by the Developers. The price for the template is checp but not qualityh of product.what a bargain , This theme works for many types of web sites and seems to be durble dows nt break and it.",
        h3:"Courtney Henry",
        h6:"Programmer of (FlaxStudio)"
    },
    {
      id: 5,
      title:
        "BIoxlab is another theme that is beautiful and professinally constructed by the Developers. The price for the template is checp but not qualityh of product.what a bargain , This theme works for many types of web sites and seems to be durble dows nt break and it.",
        h3:"Jhon Meathwu5",
        h6:"Programmer of (FlaxStudio)"
    },
    {
      id: 6,
      title:
        "BIoxlab is another theme that is beautiful and professinally constructed by the Developers. The price for the template is checp but not qualityh of product.what a bargain , This theme works for many types of web sites and seems to be durble dows nt break and it.",
        h3:"Jhon Meathwu6",
        h6:"Genetic Specialisf"
    },
    {
      id: 7,
      title:
        "BIoxlab is another theme that is beautiful and professinally constructed by the Developers. The price for the template is checp but not qualityh of product.what a bargain , This theme works for many types of web sites and seems to be durble dows nt break and it.",
        h3:"Jhon Meathwu7",
        h6:"Genetic Specialisf"
    },
    {
      id: 8,
      title:
        "BIoxlab is another theme that is beautiful and professinally constructed by the Developers. The price for the template is checp but not qualityh of product.what a bargain , This theme works for many types of web sites and seems to be durble dows nt break and it.",
        h3:"Jhon Meathwu8",
        h6:"Genetic Specialisf"
    },
    {
      id: 9,
      title:
        "BIoxlab is another theme that is beautiful and professinally constructed by the Developers. The price for the template is checp but not qualityh of product.what a bargain , This theme works for many types of web sites and seems to be durble dows nt break and it.",
        h3:"Jhon Meathwu9",
        h6:"Genetic Specialisf"
    },
  ];


const Feedback = () => {


  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);


  return (
    <div className="feedback">
      <div className="galleryHeader">
        <h6>___TESTIMONIAL___</h6>
        <h1>Customer Feedback</h1>
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
                 <p>{image.title}</p>
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

export default Feedback;
