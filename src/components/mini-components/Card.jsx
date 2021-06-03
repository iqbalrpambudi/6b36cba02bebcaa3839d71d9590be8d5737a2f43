import React from "react"
import { CardComponents } from "../../style/style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons"
import { addProduct } from "../../Redux/action/action"
import { useDispatch } from "react-redux"

function Card(props) {
  const dispatch = useDispatch()

  return (
    <CardComponents>
      <img src="https://picsum.photos/200/300" alt="food" />
      <div className="content">
        <div className="content__rating">
          <small>{props.rating}</small>
          <FontAwesomeIcon
            icon={faStar}
            color={`#f9423a`}
            style={{ marginLeft: `8px`, fontSize: `14px` }}
          />
        </div>
        <div className="content__title">
          <h4>{props.name}</h4>
          <small>{props.by}</small>
        </div>
        <div className="content__footer">
          <div className="content__footer__price">
            {convertToRupiah(props.price)}
          </div>
          <div className="content__footer__button">
            <a
              onClick={() =>
                dispatch(
                  addProduct({
                    id: props.id,
                    name: props.name,
                    price: props.price,
                  })
                )
              }
            >
              ADD{" "}
              <FontAwesomeIcon icon={faPlus} style={{ marginLeft: `8px` }} />
            </a>
          </div>
        </div>
      </div>
    </CardComponents>
  )
}

export default Card

export const convertToRupiah = (angka) => {
  angka = parseInt(angka)
  let rupiah = ""
  let angkarev = angka.toString().split("").reverse().join("")
  for (let i = 0; i < angkarev.length; i++)
    if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + "."
  return (
    "Rp " +
    rupiah
      .split("", rupiah.length - 1)
      .reverse()
      .join("")
  )
}
