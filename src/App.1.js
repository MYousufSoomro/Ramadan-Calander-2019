import React, { Component } from 'react';
import './App.css';
import { khiTiming } from './config/ramadan_timing'
import Appbar from './components/Appbar'
import Today from './components/Today'
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';



class App extends Component {
  constructor() {
    super();

    this.state = {
      today: '',
      yesterday: '',
      tomorrow: '',
      isYesterday: false,
      isToday: true,
      isTomorrow: false,
      YesterdayBTNcolor: 'default',
      TodayBTNcolor: 'primary',
      TomorrowBTNcolor: 'default'
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
    const { today, tomorrow, yesterday, isYesterday, isToday, isTomorrow, YesterdayBTNcolor, TodayBTNcolor, TomorrowBTNcolor } = this.state;

    return (
      <div>
        <header>
          <Appbar />
          <CardActions>
            <Button variant="contained" fullWidth="true" color={YesterdayBTNcolor} onClick={() => {
              this.setState({
                isYesterday: true,
                isToday: false, isTomorrow: false, YesterdayBTNcolor: 'primary', TodayBTNcolor: 'default', TomorrowBTNcolor: 'default'
              })
            }}>
              Yesterday
          </Button>

            <Button variant="contained" fullWidth="true" color={TodayBTNcolor} onClick={() => {
              this.setState({
                isToday: true,
                isYesterday: false, isTomorrow: false, YesterdayBTNcolor: 'default', TodayBTNcolor: 'primary', TomorrowBTNcolor: 'default'
              })
            }}>
              Today
          </Button>

            <Button variant="contained" fullWidth="true" color={TomorrowBTNcolor} onClick={() => {
              this.setState({
                isTomorrow: true,
                isToday: false, isYesterday: false, YesterdayBTNcolor: 'default', TodayBTNcolor: 'default', TomorrowBTNcolor: 'primary'
              })
            }}>
              Tomorrow
          </Button>
          </CardActions>
          {!isYesterday && !isTomorrow && isToday && khiTiming.map((item) => {
            if (item.Date === today) {
              return (
                <Today RamazanDay={item.Ramadan} TodayDate={item.Date} Sehar={item.SEHR} Iftar={item.IFTAR} />
              )
            }

          })}

          {isYesterday && !isTomorrow && !isToday && khiTiming.map((item) => {
            if (item.Date === yesterday) {
              return (
                <Today RamazanDay={item.Ramadan} TodayDate={item.Date} Sehar={item.SEHR} Iftar={item.IFTAR} />
              )
            }

          })}


          {!isYesterday && isTomorrow && !isToday && khiTiming.map((item) => {
            if (item.Date === tomorrow) {
              return (
                <Today RamazanDay={item.Ramadan} TodayDate={item.Date} Sehar={item.SEHR} Iftar={item.IFTAR} />
              )
            }
          })}
        </header>
        <div className="footer">
          <p>Developed by <a href="https://www.twitter.com/MYousufSoomro" target="_blank" >M Yousuf Soomro</a></p>
        </div>
      </div>
    )
  }
}

export default App;
