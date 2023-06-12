import React from 'react'
import Navbar from './Navbar'
import wr from "../images/world.jpg"
import '../css/about.css'
const About = () => {
  return (
    <>
     <Navbar/>
    <div className='about'>
      <img src={wr} alt="" />
      <div className="gr">
        <div className='grid-item'>This Page is provide World related news and keep you updated and connected to the world</div>
      </div>
  
      <div className="grie">
        <div className='grid1'>
          <div className="carde">
            <p>This Page is provide World related news and keep you updated and connected to the world</p>
          </div>
        </div>
       
      </div>
    </div>
 
    </> )
}

export default About
