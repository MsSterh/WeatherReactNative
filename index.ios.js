import React            from 'react';
import { AppRegistry }  from 'react-native';
import { Provider }     from 'react-redux'
import configureStore   from './store/configureStore'
import App              from './components/app'

const store = configureStore()

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('WeatherProject', () => ReduxApp)
