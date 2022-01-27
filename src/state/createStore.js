import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  if (action.type === `CHANGE`) {
    return Object.assign({}, state, {
      portfolioName: action.payload
    })
  }
  return state
}

const initialState = { portfolioName: "" }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
