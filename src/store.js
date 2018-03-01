import { createStore,combineReducers } from 'redux'
import reducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
const combinedReducer= combineReducers({
    content:reducer,
    notification:notificationReducer,
    filter:filterReducer
})
const store = createStore(combinedReducer)

store.subscribe(()=>{
    console.log(store.getState())
})

export default store