import React from 'react'

const convert = (milSec) => {
    let sec = milSec / 1000;
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor((sec % 3600) / 60);
    let seconds = Math.floor((sec % 3600) % 60);
  return {
    hours:hours.toString().padStart(2, "0"),
    minutes:minutes.toString().padStart(2, "0"),
    seconds:seconds.toString().padStart(2, "0") };};


const View = (props) =>{   
  return(
        <div>
            <div className="time">
                <div className="hours">{convert(props.value).hours}</div>:
                <div className="minutes">{convert(props.value).minutes}</div>:
                <div className="seconds">{convert(props.value).seconds}</div>
            </div>

            <div className="units">
                <div className="hours-units">Hours</div><div className="minutes-units">Minutes</div><div className="seconds-units">Seconds</div>   
            </div>
        </div>)}
export default View;