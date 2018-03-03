import { actionTypes } from '../weatherUpdate'

export default (state = { status: 'init' }, action) => {
  const payload = action.payload
  switch (action.type) {
    case actionTypes.FETCH_REAL_TIME_WEATHER_START:
      return {
        status: 'start'
      }
    case actionTypes.FETCH_REAL_TIME_WEATHER_SUCCESS:
      return {
        status: 'success',
        ...payload
      }
    case actionTypes.FETCH_REAL_TIME_WEATHER_FAILURE:
      return {
        status: 'failure'
      }
    default:
      return state
  }
}
