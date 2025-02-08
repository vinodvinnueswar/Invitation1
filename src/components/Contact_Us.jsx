import React from 'react'
import Border from '../images/border/border.png'
import Border2 from '../images/border/border2.png'

const Contact_Us = () => {
  return (
    <div className="Contact-Container">
        <h2>Follow Us </h2>
        <img src={Border} alt="" />
        <div className="Feed"  data-aos="zoom-in">
        <p>Stay Up To Date with the happy couple ,</p>
        <p>See their memories</p>
        </div>
        
        <div className="Couples-Social-Media" data-aos="zoom-out">
            <div className="facebook">
                Facebook
            </div>
            <div className="instagram">
                Instagram
            </div>
            <div className="Twitter">
                Twitter
            </div>
        </div>
        <div className="Contacts">
            <img src={Border2} alt="" />
        </div>
        <div className="Contact-details" >
            <h2>InviteDigitly</h2>
            <p>Do you Want Invitation Like this Contact Us </p>
            <div className="button">
                Click Here
            </div>
        </div>
    </div>
  )
}

export default Contact_Us