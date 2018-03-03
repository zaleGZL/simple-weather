import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

import { WEATHER_CONDITION_IMAGE_BASIC_URL } from '../../constants'

const RealTimeWeatherData = props => {
  let {
    updateTime,
    tmp,
    condCode,
    condText,
    windDir,
    windPower,
    aqi,
    aqt
  } = props

  updateTime = updateTime.slice(5, 7) + '月' + updateTime.slice(8, 10) + '日'
  windPower = !isNaN(windPower[0]) ? windPower + '级' : windPower

  return (
    <div>
      <p style={{ marginBottom: '0px' }}>{updateTime}</p>
      <Grid>
        <Grid.Column
          mobile={16}
          tablet={10}
          computer={12}
          style={{ paddingBottom: '0px' }}
        >
          <div>
            <span style={{ fontSize: '55px' }}>{tmp}°C</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{condText}</span>
          </div>
        </Grid.Column>
        <Grid.Column
          mobile={16}
          tablet={6}
          computer={4}
          textAlign="center"
          style={{ paddingBottom: '0px' }}
        >
          <img
            style={{ width: '80px', height: '80px' }}
            src={`${WEATHER_CONDITION_IMAGE_BASIC_URL}${condCode}.png`}
            alt={condText}
          />
        </Grid.Column>
      </Grid>
      <Grid style={{ marginTop: '0px' }}>
        <Grid.Column>
          <span style={{ fontSize: '18px', fontWeight: '400' }}>
            {windDir}&nbsp;&nbsp;&nbsp;{windPower}
          </span>
        </Grid.Column>
      </Grid>
      <Grid style={{ marginTop: '0px' }}>
        <Grid.Column>
          <span style={{ fontSize: '18px', fontWeight: '400' }}>
            空气质量&nbsp;&nbsp;&nbsp;{aqi}「{aqt}」
          </span>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default connect()(RealTimeWeatherData)
