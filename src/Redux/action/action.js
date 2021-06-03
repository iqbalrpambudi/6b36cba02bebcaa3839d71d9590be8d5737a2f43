import { DINNER, LUNCH } from "../constant/constant"

export function setDinner(payload) {
  return { type: DINNER, payload }
}
export function setLunch(payload) {
  return { type: LUNCH, payload }
}
