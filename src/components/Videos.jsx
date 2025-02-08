import React from 'react'
import Border from '../images/border/border.png'
import ReactPlayer from 'react-player'

const Videos = () => {
  return (
    <div className="Videos-Container">
        <h2>Videos</h2>
        <img src={Border} alt="" />
        <div className="Video-Src" data-aos="zoom-out">
            <ReactPlayer  className='video'
           url='https://youtu.be/esHzbNvsLvI?si=yShRYSp9rmG9CK9z'
           width='450px'
           height='250px'
            />
        </div>
    </div>
  )
}

export default Videos