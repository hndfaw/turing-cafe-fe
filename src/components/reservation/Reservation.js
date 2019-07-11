import React from 'react'
import './Reservation.css'


export default function Reservation({res}) {

  return (
    <div className="res-container">
      <h3>{res.name}</h3>
      <p>{res.date}</p>
      <p>{res.time}</p>
      <p>Number of guests: <span>{res.number}</span></p>
      <button className="cancel-btn">Cancel</button>
    </div>
  )
}
