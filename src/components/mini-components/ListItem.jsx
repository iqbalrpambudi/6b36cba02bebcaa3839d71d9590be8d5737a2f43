import React from "react"

function ListItem(props) {
  return (
    <div className="list-item">
      <div className="list-item__icon">
        <span class="material-icons md-dark">location_on</span>
      </div>
      <div className="list-item__content">
        <div className="list-item__content__title">{props.title}</div>
        <div className="list-item__content__subtitle">{props.address}</div>
      </div>
    </div>
  )
}

export default ListItem
