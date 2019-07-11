import React  from 'react';
import Reservation from '../reservation/Reservation';
import './ReservationContainer.css';

 const ReservationContainer = ({ reservationData })  => {
   const singleRes = reservationData.map(res => {
     return  <Reservation res={res} key={res.id}/>  
   })


    return (
      <div className="reservation-cont-container">
        {singleRes}
      </div>
    )
  
}

export default ReservationContainer;
