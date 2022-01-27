import { createStore as reduxCreateStore, applyMiddleware } from "redux"
import { composeWithDevTools } from '@redux-devtools/extension';

const reducer = (state, action) => {
  if (action.type === `CHANGE`) {
    return Object.assign({}, state, {
      portfolioName: action.payload
    })
  }
  return state
}

const initialState = { portfolioName: "" }

// const createStore = () => reduxCreateStore(reducer, initialState)

const createStore = reduxCreateStore(reducer, initialState,
    composeWithDevTools(
        applyMiddleware()
    )
);

export default createStore
