import React from "react"
import Location from "./mini-components/Location"
import Calendar from "./mini-components/Calendar"
import { HeaderComponent } from "../style/style"

function Header(props) {
  return (
    <HeaderComponent>
      <Location />
      <Calendar active={13} />
    </HeaderComponent>
  )
}

export default Header
