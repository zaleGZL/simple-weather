import React from 'react'

import { Container } from 'semantic-ui-react'

import { WEATHER_CONDITION_IMAGE_BASIC_URL } from '../../constants'

const WeatherForecastData = props => {
  let {
    day,
    date,
    minTmp,
    maxTmp,
    condTextD,
    condTextN,
    condCodeD,
    condCodeN,
    windDir,
    windPower,
    pop
  } = props

  date = date.slice(8, 10)
  windPower = !isNaN(windPower[0]) ? windPower + '级' : windPower

  const condTextDN =
    condTextD === condTextN ? condTextD : condTextD + '转' + condTextN

  return (
    <div>
      <Container>
        <span>
          {date}日「{day}」
        </span>
      </Container>
      <Container>
        <span style={{ fontSize: '24px', fontWeight: '400' }}>
          {minTmp} ~ {maxTmp}°C
        </span>
      </Container>
      <Container>
        <img
          src={`${WEATHER_CONDITION_IMAGE_BASIC_URL}${condCodeD}.png`}
          style={{ width: '40px', height: '40px', float: 'left' }}
          alt={condTextD}
        />
        <img
          src={`${WEATHER_CONDITION_IMAGE_BASIC_URL}${condCodeN}.png`}
          style={{ width: '40px', height: '40px', float: 'right' }}
          alt={condTextN}
        />
        <div
          style={{
            clear: 'both',
            height: '0',
            lineHeight: '0',
            fontSize: '0'
          }}
        />
      </Container>
      <div style={{ fontSize: '18px', fontWeight: '400' }}>
        <Container>
          <span>{condTextDN}</span>
        </Container>
        <Container>
          <span>
            {windDir}&nbsp;&nbsp;&nbsp;{windPower}
          </span>
        </Container>
        <Container>
          <span>降水概率&nbsp;&nbsp;&nbsp;{pop}%</span>
        </Container>
      </div>
    </div>
  )
}

export default WeatherForecastData
