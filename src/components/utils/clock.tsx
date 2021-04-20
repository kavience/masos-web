import React, { useEffect, useState } from 'react'

const Clock = (props: any) => {
  const [displayName, setDisplayName] = useState<string>();
  const [current, setCurrent] = useState<Date>(new Date());

  useEffect(() => {
    const updateTime = setInterval(() => setCurrent(new Date()), 1000);

    return () => {
      clearInterval(updateTime);
    }
  }, [])

  useEffect(() => {
    const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = dayList[current.getDay()];
    let hour = current.getHours();
    let minute: number | string = current.getMinutes();
    let month = monthList[current.getMonth()];
    let date = current.getDate().toLocaleString();
    let meridiem = (hour < 12 ? "AM" : "PM");

    if (minute.toLocaleString().length === 1) {
      minute = "0" + minute
    }

    if (hour > 12) hour -= 12;
    let temp;
    if (props.onlyTime !== undefined && props.onlyTime !== null) {
      temp = hour + ":" + minute + " " + meridiem;
    }
    else if (props.onlyDay !== undefined && props.onlyDay !== null) {
      temp = day + " " + month + " " + date;
    }
    else temp = day + " " + month + " " + date + " " + hour + ":" + minute + " " + meridiem;
    setDisplayName(temp);
  }, [current, props.onlyTime, props.onlyDay])

  return (
    <span>{displayName}</span>
  )
}

export default Clock;