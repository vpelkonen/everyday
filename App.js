import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './src/configure-store'
import AppNavigator from './src/navigators/AppNavigator'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
)

export default App
