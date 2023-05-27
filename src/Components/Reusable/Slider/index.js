import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner1 from '../../../Assets/banner1.jpg'
import Banner2 from '../../../Assets/banner2.jpg'
import Banner3 from '../../../Assets/banner3.jpg'
import Banner4 from '../../../Assets/banner4.jpg'
import Banner5 from '../../../Assets/banner5.jpg'

const Slider = () => {
  return (
    <div className="mainSlider">
        <Carousel showArrows={true} showThumbs={false} showStatus={false} infiniteLoop={true} >
            <div>
                <img src={Banner2} />
            </div>
            <div>
                <img src={Banner3} />
            </div>
            <div>
                <img src={Banner4} />
            </div>
            <div>
                <img src={Banner5} />
            </div>
            <div>
                <img src={Banner1} />
                {/* <p className="legend">Legend 1</p> */}
            </div>
        </Carousel>
    </div>
  )
}

export default Slider