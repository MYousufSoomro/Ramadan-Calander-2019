import React, { Component } from "react";
import "./App.css";
import { khi_timing } from "./config/khi_timing";
import Appbar from "./components/Appbar";
import Today from "./components/Today";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import moment from "moment";
import Timer from "react-awesome-countdowntimer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      today: "",
      time: "",
      yesterday: "",
      tomorrow: "",
      isYesterday: false,
      isToday: true,
      isTomorrow: false,
      YesterdayBTNcolor: "default",
      TodayBTNcolor: "primary",
      TomorrowBTNcolor: "default",
      sehrTimer: false,
      iftarTimer: false
    };
  }

  systemDate() {
    const yesterday = moment()
      .subtract(1, "days")
      .format("MM/DD/YYYY");
    const today = moment().format("MM/DD/YYYY");
    const time = moment().format("hh:MM A");
    const tomorrow = moment()
      .add(1, "days")
      .format("MM/DD/YYYY");
    this.setState({ today, yesterday, tomorrow, time });
  }

  componentDidMount() {
    this.systemDate();
  }

  render() {
    const {
      today,
      tomorrow,
      yesterday,
      isYesterday,
      isToday,
      isTomorrow,
      YesterdayBTNcolor,
      TodayBTNcolor,
      TomorrowBTNcolor
    } = this.state;

    return (
      <div>
        <header>
          <Appbar />
          <CardActions>
            <Button
              variant="contained"
              fullWidth="true"
              color={YesterdayBTNcolor}
              onClick={() => {
                this.setState({
                  isYesterday: true,
                  isToday: false,
                  isTomorrow: false,
                  YesterdayBTNcolor: "primary",
                  TodayBTNcolor: "default",
                  TomorrowBTNcolor: "default"
                });
              }}
            >
              Yesterday
            </Button>

            <Button
              variant="contained"
              fullWidth="true"
              color={TodayBTNcolor}
              onClick={() => {
                this.setState({
                  isToday: true,
                  isYesterday: false,
                  isTomorrow: false,
                  YesterdayBTNcolor: "default",
                  TodayBTNcolor: "primary",
                  TomorrowBTNcolor: "default"
                });
              }}
            >
              Today
            </Button>

            <Button
              variant="contained"
              fullWidth="true"
              color={TomorrowBTNcolor}
              onClick={() => {
                this.setState({
                  isTomorrow: true,
                  isToday: false,
                  isYesterday: false,
                  YesterdayBTNcolor: "default",
                  TodayBTNcolor: "default",
                  TomorrowBTNcolor: "primary"
                });
              }}
            >
              Tomorrow
            </Button>
          </CardActions>

          {!isYesterday &&
            !isTomorrow &&
            isToday &&
            khi_timing.map(item => {
              if (item.Date === today) {
                return (
                  <div>
                    <Today
                      RamazanDay={item.Ramadan}
                      TodayDate={today}
                      Sehar={item.SEHR}
                      Iftar={item.IFTAR}
                    />
                    <br />
                    <h2 align="center">Time left in Iftar</h2>
                    <Timer endDate={moment(today + " " + item.IFTAR)} />
                    <h2 align="center">Time left in Sehr</h2>
                    <Timer endDate={moment(today + " " + item.SEHR)} />
                  </div>
                );
              }
            })}

          {isYesterday &&
            !isTomorrow &&
            !isToday &&
            khi_timing.map(item => {
              if (item.Date === yesterday) {
                return (
                  <Today
                    RamazanDay={item.Ramadan}
                    TodayDate={item.Date}
                    Sehar={item.SEHR}
                    Iftar={item.IFTAR}
                  />
                );
              }
            })}

          {!isYesterday &&
            isTomorrow &&
            !isToday &&
            khi_timing.map(item => {
              if (item.Date === tomorrow) {
                return (
                  <Today
                    RamazanDay={item.Ramadan}
                    TodayDate={item.Date}
                    Sehar={item.SEHR}
                    Iftar={item.IFTAR}
                  />
                );
              }
            })}
        </header>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="footer">
          <p>
            Developed by{" "}
            <a
              href="https://www.twitter.com/MYousufSoomro"
              target="_blank"
              rel="noopener noreferrer"
            >
              M Yousuf Soomro
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
