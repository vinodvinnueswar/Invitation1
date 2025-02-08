import React from 'react'
import Border from '../images/border/border.png'
import Vertical_sym from '../images/vertical_sym/vertical_sym.png'

const Wishes = () => {
  return (
    <div className="Wishes-Container">
        <h2>Best Wishes</h2>
        <img src={Border} alt="" />
        <div className="Wishes-details" data-aos="zoom-in">
            <div className="div1">
                <h4>Father</h4>
                <p>L.Madhav</p>
                <br />
                <h4>Mother</h4>
                <p>L.Sowndariya</p>
            </div>
            <div className="div-slide">
                <img src={Vertical_sym} alt="" />
            </div>
            <div className="div2">
                <h4>Brother's</h4>
                <p>L.Josheph</p>
                <p>K.Keriti</p>
                <br />
                <h4>Sister's</h4>
                <p>L.Josey</p>
                <p>k.Junnu</p>
            </div>
        </div>
    </div>
  )
}

export default Wishes