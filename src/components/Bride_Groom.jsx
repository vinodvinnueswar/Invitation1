import React from 'react'
import Bride from '../images/Bride/Bride.png'
import Groom from '../images/Groom/Groom.png'
import Flower from '../images/flower/flower1.png'

const Bride_Groom = () => {
  return (
    <div className="Bride_Groom">
        <div className="Groom">
            <div className="Groom-details"data-aos="fade-right">
            <h3>Richard</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore ducimus reprehenderit, quos aliquid, facilis nesciunt iusto repudiandae accusantium voluptatem ipsum magnam. Illo eius id molestiae velit, dolores consectetur quae odio?</p>
            </div>
            <img src={Groom} alt="" data-aos="flip-left"/>
        </div>
        <div className="Bride">
            <img src={Bride} alt="" data-aos="flip-right"/>
            <div className="Bride-details" data-aos="fade-right" >
            <h3>Amanda</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore ducimus reprehenderit, quos aliquid, facilis nesciunt iusto repudiandae accusantium voluptatem ipsum magnam. Illo eius id molestiae velit, dolores consectetur quae odio?</p>
            </div>
        </div>
        <div className="flower">
            <img src={Flower} alt=""data-aos="zoom-in-up" />
        </div>
    </div>
  )
}

export default Bride_Groom