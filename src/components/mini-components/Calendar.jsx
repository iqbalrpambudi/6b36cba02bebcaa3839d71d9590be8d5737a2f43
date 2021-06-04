import React from "react"
import { CalendarComponent } from "../../style/style"

function Calendar(props) {
  return (
    <CalendarComponent>
      {calendar.map((data, index) => {
        console.log(data.date)
        return (
          <div
            className={`calendar__item ${
              data.date === props.active ? "active" : null
            }`}
            key={index}
          >
            <div
              className="calendar__item__day"
              style={
                data.day === "SAB" || data.day === "MIN"
                  ? { color: `lightgray` }
                  : null
              }
            >
              {data.day}
            </div>
            <div
              className="calendar__item__date"
              style={
                data.day === "SAB" || data.day === "MIN"
                  ? { color: `lightgray` }
                  : null
              }
            >
              {data.date}
            </div>
          </div>
        )
      })}
    </CalendarComponent>
  )
}
const calendar = [
  { day: "SEN", date: 10 },
  { day: "SEL", date: 11 },
  { day: "RAB", date: 12 },
  { day: "KAM", date: 13 },
  { day: "JUM", date: 14 },
  { day: "SAB", date: 15 },
  { day: "MIN", date: 16 },
  { day: "SEN", date: 17 },
  { day: "SEL", date: 18 },
  { day: "RAB", date: 19 },
  { day: "KAM", date: 20 },
  { day: "JUM", date: 21 },
  { day: "SAB", date: 22 },
  { day: "MIN", date: 23 },
]
export default Calendar
