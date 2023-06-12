import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "../css/navbar.css"
import Samachar from './Samachar'
import Contacts from './Contacts'
const Navbar = () => {
  const [open, setOpen] = useState("sidebarcls");
  const [scroll, setScroll] = useState(0);
  const [country, setCountry] = useState("us");
  const [catogery, setCatogery] = useState("entertainment");

  useEffect(() => {
    window.onscroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScroll(scroll);
    }
  })


  return (
    <>
      <nav>
        <button className='btnopn' onClick={() => { setOpen("sidebaropn") }}>☰</button>
        <li>
          <Link to="/">NEWZFEWZ</Link>
        </li>
      </nav>
      <div className={open}>
        <ul>
          <button className='btncls' onClick={() => { setOpen("sidebarcls") }}>Close &times; </button>
          <li className='side'><div class="dropdown">
            <button class="dropbtn">Country</button>
            <div class="dropdown-content">
              <button onClick={() => { (setCountry("in")) }}>India</button>
              <button onClick={() => { (setCountry("us")) }}>USA</button>
              <button onClick={() => { (setCountry("au")) }}>Australia</button>
              <button onClick={() => { (setCountry("ru")) }}>Russia</button>
            </div>
          </div></li>

          
          <li className='side'> <div class="dropdown">
            <button class="dropbtn">Catogery</button>
            <div class="dropdown-content">
              <button onClick={() => { (setCatogery("business")) }}>Business</button>
              <button onClick={() => { (setCatogery("entertainment ")) }}>Entertainment</button>
              <button onClick={() => { (setCatogery("general")) }}>General</button>
              <button onClick={() => { (setCatogery("science")) }}>Science</button>
              <button onClick={() => { (setCatogery("sports")) }}>Sports</button>
              <button onClick={() => { (setCatogery("technology")) }}>Technology</button>
            </div>
          </div>
          </li>
        </ul>
      </div>
      <div id="progressBarContainer">
            <div id="progressBar" style={{ transform: `scale(${scroll}, 1)` }} />
          </div>
      <Samachar
        catogery={catogery}
        country={country}
        title="Welcome to NEWZFEWZ"
      />

      <Contacts />
    </>
  )
}
export default Navbar
