import './gallery.scss'
import {motion} from 'framer-motion'
import galleryImgs from '../../assets/galleryImgs'
import { useEffect, useRef, useState } from 'react'

const Gallery = () => {

    const [width, setWidth] = useState(0)
    const carousel = useRef()

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

  return (
    <div className='gallery'>
        <div className="galleryHeader">
            <h6>___WORK GALLERY___</h6>
            <h1>Bioxlab Gallery</h1>
        </div>
        <div className="gallerySlider">
            <motion.div ref={carousel} whileTap={{cursor:"grabbing"}} className="carousel">
                <motion.div drag="x" dragConstraints={{right:0, left: -width}} className="inner-carousel">
                    {galleryImgs.map((image, index) => {
                        return (
                            <motion.div key={index} className='item'>
                                <img src={image}/>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default Gallery