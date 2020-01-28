import {HIDE_ALERT, SHOW_ALERT} from "../types";

const handlers = {
  [SHOW_ALERT]: (state, action) => action.payload,
  [HIDE_ALERT]: () => null,
  DEFAULT: state => state
}

export const alertReducer = (state, action) => {

  // Switch from types.js style:
  // switch (action.type) {
  //   case SHOW_ALERT: return action.payload
  //   case HIDE_ALERT: return null
  //   default: return state
  // }

  // const function style:
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)

}