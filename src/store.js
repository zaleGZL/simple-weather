import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import { reducer as locationByIp } from './weatherLocation'
import { reducer as locationByInput } from './locationInput'
import { reducer as realTimeWeather } from './realTimeWeather'
import { reducer as weatherForecast } from './weatherForecast'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  locationByIp,
  locationByInput,
  realTimeWeather,
  weatherForecast
})

const initialState = {}
const middlewares = [thunk]
const enhancers = []

// if (process.env.NODE_ENV === 'development') {
//   const devToolsExtension = window.devToolsExtension

//   if (typeof devToolsExtension === 'function') {
//     enhancers.push(devToolsExtension())
//   }
// }

const composedEnhancers = compose(applyMiddleware(...middlewares), ...enhancers)

export default createStore(reducer, initialState, composedEnhancers)
