import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import TasksScene from '../scenes/TasksScene'
import * as routeNames from '../constants/route-names'

export default createMaterialBottomTabNavigator({
  [routeNames.Tasks]: { screen: TasksScene }
}, {
  swipeEnabled: true,
  animationEnabled: true
})
