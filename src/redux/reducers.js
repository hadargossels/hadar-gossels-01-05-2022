import { combineReducers } from '@reduxjs/toolkit'
import generalReducer from './General/generalSlice'
import weatherReducer from './Weather/weatherSlice'

const appReducer = combineReducers({
  general: generalReducer,
  weather: weatherReducer
})

const RootReducer = (state, action) => {
  // if (action.type === LOGOUT) {
  //   delete state.companies
  //   delete state.company
  //   delete state.auth
  //   delete state.utils
  //   delete state.api_keys
  //   delete state.dashboards
  //   delete state.client
  // }
  return appReducer(state, action)
}

export default RootReducer
