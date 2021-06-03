import React from "react"
import moment from "moment"
import { CalendarComponent } from "../../style/style"

function Calendar(props) {
  return (
    <CalendarComponent>
      {getlist2Weeks().map((data, index) => {
        return (
          <div className="calendar__item" key={index}>
            <div className="calendar__item__day">{data.day}</div>
            <div className="calendar__item__date">{data.date}</div>
          </div>
        )
      })}
    </CalendarComponent>
  )
}

const getlist2Weeks = () => {
  let daysInMonth = []
  const monthDate = moment().startOf("week")
  for (let i = 0; i < 14; i++) {
    let newDay = monthDate.clone().add(i, "days")
    let newObj = {
      day: newDay.format("ddd"),
      date: newDay.format("DD"),
    }
    daysInMonth.push(newObj)
  }
  return daysInMonth
}
export default Calendar
