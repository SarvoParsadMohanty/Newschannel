import React from 'react'
import { useState} from 'react'
import "../css/contact.css"
const Contacts = () => {
  const [user ,setUser]=useState({
    name:"",
    email:"",
    contact:"",
    feedback:""
  })

  const handleChange=(e)=>{
    e.preventDefault();
  let name = e.target.name;
  let value = e.target.value;
  setUser({...user,[name]:value});     
  }
  console.log(user)
  // const handleSubmit= async (e)=>{
  //     e.preventDefault();
  //     const { name, email, contact, feedback } = user;
  
  //     const res = await fetch("/register", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         name, email, contact,feedback
  //       })
  //     });
  //     console.log(res);
  //     // const data = await res.json();
  //     if(res.status === 421) {
  //       alert("Email Already Exists")
  //     }
  //     else if(res.status === 420) {
  //       alert("Enter all fields")
  //     } else {
  //       alert("Signup Sucessfully")
  //       history.push("/Login")
  //     }
  // }
  return (
    <><div className='contact'>
      <p>Feedback Form</p>
      <div className="form">
        {/* <form onSubmit={handleSubmit}> */}
        <form>
          <div className="data">
            <label htmlFor="">Name</label>
            <input type="text" name="name" value={user.name} onChange={handleChange} placeholder='Enter Your Subh Name' />
            <label htmlFor="">Email</label>
            <input type="text" name="email" value={user.email}  onChange={handleChange} placeholder='exaple@gmail.com' />
            <label htmlFor="">Contact no.</label>
            <input type="text" name="contact" value={user.contact}  onChange={handleChange} placeholder='Enter Your Contact No' />
            <div className="data-t"><label htmlFor="">Feedback</label>
            <textarea type="text" name= "feedback" value={user.feedback}  onChange={handleChange} placeholder='Enter Your Feedback ' />
            <div className="btn"><button type='sumbmit'>Submit</button></div>
            </div>
          </div>

        </form>
      </div>
      </div>
    </>
  )
}

export default Contacts
