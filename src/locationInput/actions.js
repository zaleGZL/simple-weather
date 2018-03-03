import {
  FETCH_LOCATION_BY_INPUT_START,
  FETCH_LOCATION_BY_INPUT_SUCCESS,
  FETCH_LOCATION_BY_INPUT_FAILURE
} from './actionTypes'

import { LOCATION_TO_CITY_ID } from '../constants'

import { actions as weatherUpdateActions } from '../weatherUpdate'

// import fetchJsonp from 'fetch-jsonp'

// fetch location by input

let nextFetchLocationByInputId = 0

export const fetchLocationByInputStart = () => ({
  type: FETCH_LOCATION_BY_INPUT_START
})

export const fetchLocationByInputSuccess = location => ({
  type: FETCH_LOCATION_BY_INPUT_SUCCESS,
  payload: {
    ...location
  }
})

export const fetchLocationByInputFailure = error => ({
  type: FETCH_LOCATION_BY_INPUT_FAILURE,
  payload: error,
  error: true
})

export const fetchLocationByInput = city => {
  return (dispatch, getState) => {
    // 自定义dispatch使其可以抛弃旧的异步获取的位置信息，只显示最新的异步获取的位置信息
    const currentFetchLocationByInputId = ++nextFetchLocationByInputId

    const dispatchIfValid = action => {
      if (currentFetchLocationByInputId === nextFetchLocationByInputId) {
        dispatch(action)
      }
    }

    // 开始获取位置信息
    dispatchIfValid(fetchLocationByInputStart())

    fetch(`${LOCATION_TO_CITY_ID}&location=${city}`)
      .then(response => {
        return response.json()
      })
      .then(json => {
        const data = json.HeWeather6[0]

        // 响应数据错误
        if (data.status !== 'ok') {
          throw new Error('location to city id error')
        }

        // 获取地理位置信息
        const location = {
          cityName: data.basic.location,
          cityId: data.basic.cid,
          parentCityName: data.basic.parent_city
        }

        return location
      })
      .then(location => {
        const { parentCityName } = location
        delete location.parentCityName

        return fetch(`${LOCATION_TO_CITY_ID}&location=${parentCityName}`)
          .then(response => response.json())
          .then(json => {
            const data = json.HeWeather6[0]

            // 响应数据错误
            if (data.status !== 'ok') {
              throw new Error('location to city id error')
            }

            location.parentCityId = data.basic.cid

            // 成功获取位置信息
            dispatchIfValid(fetchLocationByInputSuccess(location))

            // 更新实时天气信息
            dispatchIfValid(
              weatherUpdateActions.fetchRealTimeWeather(
                location.cityId,
                location.parentCityId
              )
            )

            // 更新天气预报信息
            dispatchIfValid(
              weatherUpdateActions.fetchWeatherForecast(
                location.cityId,
                location.parentCityId
              )
            )
          })
      })
      .catch(error => {
        // 控制台显示异常，便于定位异常问题的根源
        console.log(error)

        // 获取位置信息失败
        dispatchIfValid(fetchLocationByInputFailure(error))
      })
  }
}
