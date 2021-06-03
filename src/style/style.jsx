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
  position: relative;
  z-index: 1;
  width: 100%;
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
    border-radius: 4px;
    .foodtypes__button {
      border: 1px #424749 solid;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .foodtypes__button--dinner {
      background-color: ${(props) =>
        props.type === "dinner" ? "black" : "white"};
      color: ${(props) => (props.type === "dinner" ? "white" : "black")};
    }
    .foodtypes__button--lunch {
      background-color: ${(props) =>
        props.type === "lunch" ? "black" : "white"};
      color: ${(props) => (props.type === "lunch" ? "white" : "black")};
    }
  }
`
