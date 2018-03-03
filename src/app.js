import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

import { Container, Grid } from 'semantic-ui-react'

import { view as ReadTimeWeather } from './realTimeWeather'
import { view as WeatherForecast } from './weatherForecast'
import { view as WeatherLocation } from './weatherLocation'
import { view as LocationInput } from './locationInput'
import { view as UpdateButton } from './weatherUpdate'

// Promise polyfill
import 'promise-polyfill/src/polyfill'
// fetch polyfill
import 'whatwg-fetch'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <WeatherLocation />

        <Container text style={{ marginTop: '1em' }}>
          <Grid>
            <Grid.Column mobile={16} tablet={10} computer={10}>
              <LocationInput />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={6} computer={6}>
              <UpdateButton />
            </Grid.Column>
          </Grid>
        </Container>

        <ReadTimeWeather />
        <WeatherForecast />
      </div>
    </Provider>
  )
}

export default App
