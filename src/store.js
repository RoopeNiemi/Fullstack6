import { applyMiddleware, createStore, combineReducers } from "redux"
import thunk from "redux-thunk"

import reducer from "./reducers/anecdoteReducer"
import notificationReducer from "./reducers/notificationReducer"
import filterReducer from "./reducers/filterReducer"
import anecdoteService from "./services/anecdotes"
import {composeWithDevTools} from 'redux-devtools-extension'

const combinedReducer = combineReducers({
  anecdotes: reducer,
  notification: notificationReducer,
  filter: filterReducer
})
const store = createStore(combinedReducer, composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(() => {
  console.log(store.getState())
})

export default store
