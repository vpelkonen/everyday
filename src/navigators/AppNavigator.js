import { createStackNavigator } from 'react-navigation'

import TabNavigator from './TabNavigator'
import * as routeNames from '../constants/route-names'

export default createStackNavigator({
  [routeNames.TabNavigator]: { screen: TabNavigator }
}, {})
