import React from "react"
import { CartComponent } from "../../style/style"
import { useSelector, useDispatch } from "react-redux"
import { removeProduct } from "../../Redux/action/action"

function Cart(props) {
  const dispatch = useDispatch()
  const product = useSelector((state) => state.productlist)
  return (
    <CartComponent onClick={() => dispatch(removeProduct())}>
      <div className="cart__content">
        <div className="cart__content__title">
          {product.length} Items |{" "}
          {convertToRupiah(product.reduce((a, { price }) => a + price, 0))}
        </div>
        <div className="cart__content__subtitle">Termasuk ongkos kirim</div>
      </div>
      <div className="cart__icon">
        <span className="material-icons md-36">shopping_cart</span>
        <span className="material-icons">chevron_right</span>
      </div>
    </CartComponent>
  )
}

export default Cart

export const convertToRupiah = (angka) => {
  angka = parseInt(angka)
  let rupiah = ""
  let angkarev = angka.toString().split("").reverse().join("")
  for (var i = 0; i < angkarev.length; i++)
    if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + "."
  return (
    "Rp " +
    rupiah
      .split("", rupiah.length - 1)
      .reverse()
      .join("")
  )
}
