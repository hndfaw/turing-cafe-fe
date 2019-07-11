import React, { Component } from 'react';
import './App.css';
import ReservationContainer from './components/reservationContainer/ReservationContainer'
import AddRes from './components/addRes/AddRes'

class App extends Component {
  state = {
    reservationData: '',
  }

  componentDidMount () {
     fetch('http://localhost:3001/api/v1/reservations')
    .then(data => data.json())
    .then(reservationData => 
      this.setState({reservationData}))
  }

  addNewReservation = (newReservation) => {
    this.setState({reservationData: [...this.state.reservationData, newReservation]})

// post is not woking :(

    fetch(`http://localhost:3001/api/v1/reservations/${newReservation.id}`, {
      method: 'post',
      // headers: {'Content-Type':'application/json'},
      body: {
       "name": newReservation.name,
       "date": newReservation.date,
       "time": newReservation.time,
       "number": Number(newReservation.number),
      }
    })

  }

  render() {
      const { reservationData } = this.state;
      return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
            <AddRes reservationData={reservationData} addNewReservation={this.addNewReservation}/>
        </div>
        <div className='resy-container'>
          {reservationData.length !== 0 && <ReservationContainer reservationData={reservationData} />}
        </div>
      </div>
    )
  }
}

export default App;
