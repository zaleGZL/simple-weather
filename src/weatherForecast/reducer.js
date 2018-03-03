import { actionTypes } from '../weatherUpdate'

export default (state = { status: 'init' }, action) => {
  const payload = action.payload
  switch (action.type) {
    case actionTypes.FETCH_WEATHER_FORECAST_START:
      return { status: 'start' }
    case actionTypes.FETCH_WEATHER_FORECAST_SUCCESS:
      return {
        status: 'success',
        byArray: payload.weatherForecast
      }
    case actionTypes.FETCH_WEATHER_FORECAST_FAILURE:
      return {
        status: 'failure'
      }
    default:
      return state
  }
}
