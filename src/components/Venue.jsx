import React from 'react'
import Border from '../images/border/border.png'

const Venue = () => {
  return (
   <div className="Venue-Container">
    <h2>Venue Location</h2>
    <img src={Border} alt="" />
    <div className="Location" data-aos="zoom-in">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.8095858890633!2d82.2298990785049!3d16.983914042158446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a38290996aa7179%3A0x18af416b683f7145!2sA%20Convention%20Kakinada!5e0!3m2!1sen!2sin!4v1738863281318!5m2!1sen!2sin" width="400" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <a href="https://maps.app.goo.gl/nYnFeLku9nhBFMv67">
        View Map
    </a>
    </div>
   </div>
  )
}

export default Venue