import React from 'react'
import { Container, Divider, Grid } from 'semantic-ui-react'

import WeatherForecastCard from './weatherForecastCard'

const WeatherForecast = () => {
  return (
    <Container text style={{ marginTop: '1em' }}>
      <Divider horizontal>天气预报</Divider>
      <Grid>
        <Grid.Column mobile={16} tablet={5} computer={5}>
          <WeatherForecastCard index={0} day={'今天'} />
        </Grid.Column>
        <Grid.Column
          only="computer tablet"
          style={{ width: '0px', padding: '10px' }}
        >
          &nbsp;
        </Grid.Column>
        <Grid.Column mobile={16} tablet={5} computer={5}>
          <WeatherForecastCard index={1} day={'明天'} />
        </Grid.Column>
        <Grid.Column
          only="computer tablet"
          style={{ width: '0px', padding: '10px' }}
        >
          &nbsp;
        </Grid.Column>
        <Grid.Column mobile={16} tablet={5} computer={5}>
          <WeatherForecastCard index={2} day={'后天'} />
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default WeatherForecast
