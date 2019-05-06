import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { khiTiming } from './config/ramadan_timing'
import NavTabs from './components/NavTabs'

class App extends Component {
  constructor() {
    super();

    this.state = {
      today: '',
      yesterday: '',
      tomorrow: ''
    }
  }


  systemDate() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const month = ["January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"];
    const date = new Date();
    const yesterday = days[date.getDay() - 1] + " " + (date.getDate() - 1) + " " + month[date.getMonth()];
    const today = days[date.getDay()] + " " + date.getDate() + " " + month[date.getMonth()];
    const tomorrow = days[date.getDay() + 1] + " " + (date.getDate() + 1) + " " + month[date.getMonth()];
    this.setState({ today, yesterday, tomorrow })
  }

  componentDidMount() {
    this.systemDate();
  }


  render() {
    const { today, tomorrow, yesterday } = this.state;
    console.log(yesterday, today, tomorrow)

    console.log(khiTiming)

    return (
      <div>
        <NavTabs />
        <header>
          <h1>Ramadan Calender 2019</h1>
          <p>Karachi</p>
          {khiTiming.map((item) => {
            if (item.Date === today) {
              return (
                <div>
                  <h1>Today</h1>
                  <h2>Ramadan: {item.Ramadan}</h2>
                  <h3>Date: {item.Date}</h3>
                  <h3>SEHR: {item.SEHR}</h3>
                  <h3>IFTAR: {item.IFTAR}</h3>
                </div>
              )
            }

          })}


          {khiTiming.map((item) => {
            if (item.Date === yesterday) {
              return (
                <div>
                  <h1>Yesterday</h1>
                  <h2>Ramadan: {item.Ramadan}</h2>
                  <h3>Date: {item.Date}</h3>
                  <h3>SEHR: {item.SEHR}</h3>
                  <h3>IFTAR: {item.IFTAR}</h3>
                </div>
              )
            }

          })}



          {khiTiming.map((item) => {
            if (item.Date === tomorrow) {
              return (
                <div>
                  <h1>Tomorrow</h1>
                  <h2>Ramadan: {item.Ramadan}</h2>
                  <h3>Date: {item.Date}</h3>
                  <h3>SEHR: {item.SEHR}</h3>
                  <h3>IFTAR: {item.IFTAR}</h3>
                </div>
              )
            }
          })}
        </header>
      </div>
    )
  }
}

export default App;
