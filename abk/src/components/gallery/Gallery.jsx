import "./gallery.scss";
import { motion } from "framer-motion";
import { Suspense, lazy, useEffect, useRef, useState } from "react";
import AddIcon from '@mui/icons-material/Add';


const images = [
    {
      id: 1,
      title:
        "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title:
        "https://images.pexels.com/photos/8942631/pexels-photo-8942631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title:
        "https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title:
        "https://images.pexels.com/photos/4066426/pexels-photo-4066426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title:
        "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      title:
        "https://images.pexels.com/photos/3786211/pexels-photo-3786211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 7,
      title:
        "https://images.pexels.com/photos/5726706/pexels-photo-5726706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 8,
      title:
        "https://images.pexels.com/photos/5726706/pexels-photo-5726706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 9,
      title:
        "https://images.pexels.com/photos/5726706/pexels-photo-5726706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

const Modal = lazy(() => import("./modal/Modal"));

const Gallery = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const openModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="gallery">
      <div className="galleryHeader">
        <h6>___İŞ QALEREYASI___</h6>
        <h1>Agro Bitki Klinikası Qalereya</h1>
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
                className={`item ${hoveredItem === index ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <img src={image.title} alt={`Item ${index}`} />
                {hoveredItem === index && (
                  <motion.div
                   initial={{opacity:0, y:-60}}
                   animate={{opacity:1, y:0, rotateY:180}}
                   transition={{duration:.5}}
                   className="plusIcon"
                   onClick={() => openModal(index)}
                   >
                    <span><AddIcon  fontSize="large"/></span>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      {/* <div className="moreBtn">
      Daha ətraflı
      </div> */}
      {showModal && (
        <Suspense fallback={<div>Loading...</div>}>
          <Modal
            showModal={showModal}
            closeModal={closeModal}
            images={images}
            currentIndex={currentIndex}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        </Suspense>
      )}
    </div>
  );
};

export default Gallery;
