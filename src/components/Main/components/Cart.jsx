import React from "react"
import { faCartPlus, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CartComponent } from "../../../style/style"
import { useSelector } from "react-redux"

function Cart(props) {
  const totalitem = useSelector((state) => state.productlist.length)
  const totalprice = useSelector
  return (
    <CartComponent>
      <div className="cart__content">
        <div className="cart__content__title">{totalitem} Items | Rp. </div>
        <div className="cart__content__subtitle">Termasuk ongkos kirim</div>
      </div>
      <div className="cart__icon">
        <FontAwesomeIcon icon={faCartPlus} size="2x" />
        <FontAwesomeIcon
          icon={faChevronRight}
          size="1x"
          style={{ marginLeft: `8px` }}
        />
      </div>
    </CartComponent>
  )
}

export default Cart
