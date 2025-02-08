import React, { useState } from 'react'
import Border from '../images/border/border.png'
import img1 from '../images/Bride_Groom/Bride_Groom.png'
import img2 from '../images/Bride_Groom/Bride_Groom7.png'
import img3 from '../images/Bride_Groom/Bride_Groom1.png'
import img4 from '../images/Bride_Groom/Bride_Groom2.png'
import img5 from '../images/Bride_Groom/Bride_Groom3.png'
import img6 from '../images/Bride_Groom/Bride_Groom4.png'
import img7 from '../images/Bride_Groom/Bride_Groom5.png'
import img8 from '../images/Bride_Groom/Bride_Groom6.png'


const Gallery = () => {
    let data =[
        {
            imgsrc:img1
        },
        {
            imgsrc:img2
        },
        {
            imgsrc:img3
        },
        {
            imgsrc:img4
        },
        {
            imgsrc:img5
        },
        {
            imgsrc:img6
        },
        {
            imgsrc:img7
        },
        {
            imgsrc:img8
        },
    ]
  

    const [model , setModel] =useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('')
    const getImg = (imgSrc) =>{
        setModel(true)
        setTempImgSrc(imgSrc)
        console.warn(imgSrc)
    }

  return (
    <div className="Gallery-container">
        <h2>Gallery</h2>
        <img src={Border} alt="" />
        <div className={model ? "model open" : "model"}>
            <img src={tempImgSrc} alt="" />
        </div>
        <div className="images" data-aos="flip-right">
         {
            data.map((item)=>{
                return(
                    <div className="pics" onClick={() =>getImg(item.imgsrc)}>
                        <img src={item.imgsrc}  />
                    </div>
                )
            })
         }
        </div>
    </div>
  )
}

export default Gallery