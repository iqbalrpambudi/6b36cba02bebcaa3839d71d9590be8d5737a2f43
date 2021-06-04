import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { LocationComponent } from "../../style/style"
import { useDispatch } from "react-redux"
import { showModal } from "../../Redux/action/action"

function Location(props) {
  const dispatch = useDispatch()

  return (
    <LocationComponent>
      <div className="location__icon">
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div className="location__content" onClick={() => dispatch(showModal())}>
        <div className="location__content__title">ALAMAT PENGANTARAN</div>
        <div className="location__content__address">
          Tokopedia Tower{" "}
          <span class="material-icons md-primary">expand_more</span>
        </div>
      </div>
    </LocationComponent>
  )
}

export default Location
