import React, { useEffect } from 'react'
import BrideGroom from '../images/Bride_Groom/Bride_Groom.png'
  import Bride_Groom from './Bride_Groom'
import Aos from 'aos';
import "aos/dist/aos.css";

const Front_page = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  
  return (
    <div className="Front-Container" >
        <div className="gradient"></div>
        <img src={BrideGroom} alt="" />
        <div className="Details" >
            <div className="head" >
            <h3>Wedding Invitation</h3>
            </div>
            <div className="names">
            <p>Richard & Amanda</p>
            </div>
            <div className="content">
            <p>Save The Date</p>
            <p>30 Aug 2024</p>
            </div>
        </div>

      
    
    </div>
  )
}

export default Front_page