import React, { Component } from 'react'
import './AddRes.css';

export default class AddRes extends Component {
  state = {
    name: '',
    date: '',
    tiem: '',
    number: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitNewReservation = () => {
    const {name, date, time, number} = this.state;
    const id = this.props.reservationData.length + 1
    console.log(id)
    let newReservation = {
      id,
      name,
      date,
      time,
      number
    }
    this.props.addNewReservation(newReservation)
  }

  render() {

    return (
      <div className="addRes-container">
        <input onChange={this.handleChange} name="name" type='text' placeholder="Name" />
        <input onChange={this.handleChange} name="date" type='text' placeholder="Date (mm/dd)" />
        <input onChange={this.handleChange} name="time" type='text' placeholder="Time" />
        <input onChange={this.handleChange} name="number" type='text' placeholder="Number of Guests" />
        <button className="mk-res-btn" onClick={this.submitNewReservation}>Make Reservation</button>
      </div>
    )
  }
}
