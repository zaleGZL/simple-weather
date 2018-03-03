import React from 'react'
import { connect } from 'react-redux'
import { Card, Loader } from 'semantic-ui-react'

import WeatherForecastData from './weatherForecastData'

const WeatherForecastCard = ({ status, weatherForecast, day }) => {
  let message = ''
  if (status !== 'success') {
    if (status === 'init' || status === 'start') {
      message = '加载中'
    } else {
      message = '获取数据失败，请重试'
    }
  }

  return (
    <Card fluid raised>
      <div style={{ padding: '1em' }}>
        {status === 'success' ? (
          <WeatherForecastData {...weatherForecast} day={day} />
        ) : (
          <Loader active inline="centered" content={message} />
        )}
      </div>
    </Card>
  )
}

const mapStateToProps = (state, ownProps) => ({
  status: state.weatherForecast.status,
  weatherForecast:
    state.weatherForecast.status === 'success'
      ? state.weatherForecast.byArray[ownProps.index]
      : []
})

export default connect(mapStateToProps)(WeatherForecastCard)
