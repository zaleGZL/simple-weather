import React from 'react'
import { connect } from 'react-redux'
import { Card, Container, Loader } from 'semantic-ui-react'

import RealTimeWeatherData from './realTimeWeatherData'

const ReadTimeWeatherCard = ({ weather }) => {
  let message = ''
  if (weather.status !== 'success') {
    if (weather.status === 'init' || weather.status === 'start') {
      message = '加载中'
    } else {
      message = '获取数据失败，请重试'
    }
  }

  return (
    <Card fluid raised>
      <Container style={{ padding: '1em' }}>
        {weather.status === 'success' ? (
          <RealTimeWeatherData {...weather} />
        ) : (
          <Loader active inline="centered" content={message} />
        )}
      </Container>
    </Card>
  )
}

const mapStateToProps = state => ({
  weather: state.realTimeWeather
})

export default connect(mapStateToProps)(ReadTimeWeatherCard)
