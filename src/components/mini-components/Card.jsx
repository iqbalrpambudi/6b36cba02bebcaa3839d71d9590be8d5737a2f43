import React from "react"
import { CardComponents } from "../../style/style"
import { addProduct } from "../../Redux/action/action"
import { useDispatch } from "react-redux"

function Card(props) {
  const dispatch = useDispatch()

  return (
    <CardComponents>
      <img
        src={require(`../../assets/images/${props.photo}`).default}
        alt="food"
      />
      <div className="content">
        <div className="content__rating">
          <small>{props.rating}</small>
          <span className="material-icons md-18 md-primary">star</span>
          <span className="material-icons md-18 md-primary">star</span>
          <span className="material-icons md-18 md-primary">star</span>
          <span className="material-icons md-18 md-primary">star</span>
          <span className="material-icons md-18 md-primary">star_half</span>
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
              href="/#"
              onClick={(e) => {
                e.preventDefault()
                dispatch(
                  addProduct({
                    id: props.id,
                    name: props.name,
                    price: props.price,
                  })
                )
              }}
            >
              ADD <span className="material-icons">add</span>
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
