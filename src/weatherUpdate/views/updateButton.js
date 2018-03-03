import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Icon } from 'semantic-ui-react'

import { fetchRealTimeWeather, fetchWeatherForecast } from '../actions'

class UpdateButton extends Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    const {
      weatherLocationStatus,
      cityId,
      parentCityId,
      updateRealTimeWeather,
      updateWeatherForecast
    } = this.props

    if (weatherLocationStatus !== 'success') {
      return
    } else {
      updateRealTimeWeather(cityId, parentCityId)
      updateWeatherForecast(cityId, parentCityId)
    }
  }

  render() {
    let { weatherDataStatus, updateTime } = this.props

    const settings = {
      loading: weatherDataStatus === 'loading' ? true : false
    }

    updateTime =
      weatherDataStatus === 'success' ? updateTime.slice(11, 16) + '更新' : undefined

    return (
      <Button
        icon
        labelPosition="right"
        basic
        fluid
        size="large"
        style={{ height: '43px' }}
        onClick={this.onClick}
        {...settings}
      >
      {updateTime ? updateTime : '更新失败，请重试'}
        <Icon name="refresh" />
      </Button>
    )
  }
}

const getWeatherDataStatus = state => {
  // rts => realTimeStatus  wfs => weatherForecastStatus
  const rts = state.realTimeWeather.status
  const wfs = state.weatherForecast.status

  if (rts === 'success' && wfs === 'success') {
    return 'success'
  } else if (rts === 'failure' || wfs === 'failure') {
    return 'failure'
  } else {
    return 'loading'
  }
}

const getWeatherUpdateTime = state => {
  if (state.realTimeWeather.status === 'success') {
    return state.realTimeWeather.updateTime
  } else {
    return undefined
  }
}

const getCityId = state => {
  if (state.locationByInput.status !== 'init') {
    return state.locationByInput.cityId
  } else {
    return state.locationByIp.cityId
  }
}

const getParentCityId = state => {
  if (state.locationByInput.status !== 'init') {
    return state.locationByInput.parentCityId
  } else {
    return state.locationByIp.parentCityId
  }
}

const getWeatherLocationStatus = state => {
  if (state.locationByInput.status !== 'init') {
    return state.locationByInput.status
  } else {
    return state.locationByIp.status
  }
}

const mapStateToProps = state => ({
  weatherDataStatus: getWeatherDataStatus(state),
  updateTime: getWeatherUpdateTime(state),
  weatherLocationStatus: getWeatherLocationStatus(state),
  cityId: getCityId(state),
  parentCityId: getParentCityId(state)
})

const mapDispatchToProps = dispatch => ({
  updateRealTimeWeather: (cityId, parentCityId) =>
    dispatch(fetchRealTimeWeather(cityId, parentCityId)),
  updateWeatherForecast: (cityId, parentCityId) =>
    dispatch(fetchWeatherForecast(cityId, parentCityId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateButton)
