import React from "react"
import { ModalComponent } from "../../style/style"
import { useDispatch } from "react-redux"
import { hideModal } from "../../Redux/action/action"
import ListItem from "../mini-components/ListItem"

function Modal(props) {
  const dispatch = useDispatch()
  const [input, setInput] = React.useState("")

  if (!props.show) {
    return null
  }
  return (
    <ModalComponent>
      <div className="modal__content">
        <div className="modal__header">
          <span
            class="material-icons close-button"
            onClick={() => dispatch(hideModal())}
            style={{ cursor: `pointer` }}
          >
            close
          </span>
          <h4 className="modal__title">
            Cek makanan yang tersedia di lokasi kamu!
          </h4>
        </div>
        <div className="modal__body">
          <div className="input-group">
            <div className="input-group__icon md-primary">
              <span class="material-icons">location_on</span>
            </div>
            <input
              type="text"
              className="input-group__form"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          {input.length >= 3 ? (
            <div className="list-container">
              <ListItem
                title="Kulina"
                address="Jalan Tulodong Atas 28, Senayan, Kebayoran Baru, Jakarta"
              />
              <ListItem
                title="Pancoran Riverside Appartment"
                address="RT.6/RW.1, Pengadegan, Pancoran, South Jakarta"
              />
              <ListItem
                title="Jalan Tulodong Atas 28"
                address="Jalan Tulodong Atas 28, Senayan, Kebayoran Baru"
              />
              <ListItem
                title="Block71 Jakarta"
                address="Ariobimo Sentral, South Jakarta, RT.9/RW.4, East Jakarta"
              />
            </div>
          ) : null}
        </div>
      </div>
    </ModalComponent>
  )
}

export default Modal
