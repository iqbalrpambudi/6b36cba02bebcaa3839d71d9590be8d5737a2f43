import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { LocationComponent } from "../../../style/style"

function Location(props) {
  return (
    <LocationComponent>
      <div className="location__icon">
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div className="location__content">
        <div className="location__content__title">ALAMAT PENGANTARAN</div>
        <div className="location__content__address">
          Tokopedia Tower <FontAwesomeIcon icon={faChevronDown} color={"#f9423a"}/>
        </div>
      </div>
    </LocationComponent>
  )
}

export default Location
