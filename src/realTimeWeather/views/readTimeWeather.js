import React from 'react'
import { Divider, Container } from 'semantic-ui-react'

import ReadTimeWeatherCard from './realTimeWeatherCard'

const ReadTimeWeather = () => {
  return (
    <Container text style={{ marginTop: '1em' }}>
      <Divider horizontal>实时天气</Divider>
      <ReadTimeWeatherCard />
    </Container>
  )
}

export default ReadTimeWeather
