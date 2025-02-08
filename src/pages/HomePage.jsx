import React from 'react'
import Front_page from '../components/Front_page'
import Bride_Groom from '../components/Bride_Groom'
import Gallery from '../components/Gallery'
import Videos from '../components/Videos'
import Date_Time from '../components/Date_Time'
import Venue from '../components/Venue'
import Contact_Us from '../components/Contact_Us'
import Wishes from '../components/Wishes'

const HomePage = () => {
  return (
   <div className="Invite-page">
   <div className="Invite-details">
   <Front_page/>
   <Bride_Groom/>
   <Gallery/>
   <Videos/>
   <Date_Time/>
   <Venue/>
   <Wishes/>
   <Contact_Us/>
   </div>
   </div>
  )
}

export default HomePage