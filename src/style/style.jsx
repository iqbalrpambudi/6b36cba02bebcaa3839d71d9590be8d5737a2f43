import styled from "styled-components"

const font = {
  xs: "8px",
  sm: "12px",
  md: "14px",
  lg: "16px",
  xl: "20px",
}

export const CalendarComponent = styled.div`
  display: flex;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  .calendar__item {
    padding: 8px;
    display: flex;
    flex-wrap: wrap;
    .calendar__item__day {
      width: 40px;
      text-align: center;
      font-weight: 400;
    }
    .calendar__item__date {
      width: 40px;
      font-size: ${font.xl};
      text-align: center;
      font-weight: 500;
    }
  }
`
export const LocationComponent = styled.div`
  display: flex;
  .location__icon {
    padding: 16px;
  }
  .location__content {
    width: 100%;
    display: block;
    padding: 8px;
    .location__content__title {
      font-size: ${font.xs};
      color: gray;
    }
    .location__content_address {
      font-size: ${font.xl};
    }
  }
`
export const HeaderComponent = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  overflow: hidden;
  width: 375px;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`
export const FoodTypesComponent = styled.div`
  padding: 16px;
  .foodtypes {
    display: inline-flex;
    width: 100%;
    height: 40px;
    border: 1px solid #e2e4e4;
    overflow: hidden;
    border-radius: 8px;
    .foodtypes__button {
      border: 1px #e2e4e4 solid;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .foodtypes__button--dinner {
      background-color: ${(props) =>
        props.type === "dinner" ? "black" : "white"};
      color: ${(props) => (props.type === "dinner" ? "white" : "black")};
      border: 1px solid
        ${(props) => (props.type === "dinner" ? "black" : "#e2e4e4")};
    }
    .foodtypes__button--lunch {
      background-color: ${(props) =>
        props.type === "lunch" ? "black" : "white"};
      color: ${(props) => (props.type === "lunch" ? "white" : "black")};
      border: 1px solid
        ${(props) => (props.type === "dinner" ? "#e2e4e4" : "black")};
    }
  }
`
export const CardComponents = styled.div`
  border-radius: 8px;
  box-shadow: 0 8px 10px 0 rgba(10, 31, 68, 0.1);
  overflow: hidden;
  margin-bottom: 16px;
  img {
    max-height: 250px;
    width: 100%;
    object-fit: cover;
  }
  .content {
    padding: 16px;
    .content__rating {
      display: flex;
      align-items: center;
      small {
        font-size: ${font.lg};
        color: #6e7679;
        font-weight: 500;
      }
    }
    .content__title {
      h4 {
        font-size: ${font.xl};
        margin: 8px 0;
        font-weight: 500;
        color: #424749;
      }
      small {
        font-size: ${font.md};
        color: #6e7679;
        font-weight: 500;
      }
    }
    .content__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 16px;
      .content__footer__price {
        font-size: ${font.xl};
        font-weight: 500;
        color: #424749;
      }
      .content__footer__button {
        display: flex;
        a {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: ${font.lg};
          font-weight: 500;
          width: 120px;
          height: 44px;
          background-color: #f9423a;
          border-radius: 8px;
        }
      }
    }
  }
`
export const ContainerComponent = styled.div`
  padding: 0 16px;
  overflow-y: auto;
  display: block;
  ::-webkit-scrollbar {
    display: none;
  }
`
export const CartComponent = styled.div`
cursor: pointer;
  width: 360px;
  display: flex;
  position: fixed;
  bottom: 16px;
  left: 50%;
  margin-left: -180px;
  color: white;
  background-color: #a23530;
  border-radius: 8px;
  padding: 16px;
  .cart__content {
    width: 80%;
    .cart__content__title {
      font-size: ${font.lg};
      font-weight:600
    }
    .cart__content__subtitle {
      font-size: ${font.md};
    }
  }
  .cart__icon {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${font.sm};
  }
`
