import React from "react"
import Location from "./components/Location"
import Calendar from "./components/Calendar"
import {HeaderComponent} from "../../style/style"

function Header(props) {
  return (
    <HeaderComponent>
      <Location />
      <Calendar />
    </HeaderComponent>
  )
}

export default Header
