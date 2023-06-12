import React from 'react'
import "../css/card.css"
const Cards = (props) => {
  return (
    <>
      <div className="cards" >
        <a href={props.url} target="blank"><img src={props.image} alt=" " /> </a>
        <div className="card-info" >
          <h4><b>{props.title}title</b></h4><br />
        </div>
        </div>
    </>
  )
}

export default Cards
