import React from 'react'
import Border from '../images/border/border.png'

const Date_Time = () => {
  return (
    <div className="Date_Time-container" >
        <h2>Date & Time</h2>
        <img src={Border} alt="" />
        <div className="Date_Time-details">
            <p data-aos="fade-right">30 Aug 2024 </p>
            <p data-aos="fade-left">.......................</p>
            <p data-aos="fade-left">10:00 PM to  2:00 AM</p>
            <p data-aos="fade-right">.......................</p>
            <p className='address' data-aos="fade-left">A1 Convention , vidyut Nagar , Road no.1 , kakinada -533003</p>
        </div>
    </div>
  )
}

export default Date_Time