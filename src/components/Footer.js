import React from 'react'

import "../css/footer.css"
import fb from "../images/Fb.png"
import IS from "../images/Is.png"
import TW from "../images/Tw.png"
import YT from "../images/YT.png"
const Footer = () => {
  return (
    <>
      <div className="cardo">
        <div className="gridss">
            <div className="g-info">
                <b>News</b>
                 <p>Sports</p>
                 <p>Bollywood</p>
                 <p>Religious</p>
                 <p>Entertainment</p>
            </div>
            <div className="g-info">
                <b>Partner</b>
                 <p>NewaAPI</p>
                 <p>Postman</p>
                 <p>VS code</p>
                  

            </div>
            <div className="g-infod">
                <p>Follow us</p>
                 <a href="https://www.facebook.com/" target="blank"><img src={fb} alt="" /></a>
                 <a href="https://www.instagram.com/" target="blank"><img src={IS} alt="" /></a>
                 <a href="https://twitter.com/?lang=en" target="blank"><img src={TW} alt="" /></a>
                 <a href="https://www.youtube.com/" target="blank"><img src={YT} alt="" /></a>
            </div>
        </div>
      </div>
    </>
  )
}




export default Footer
