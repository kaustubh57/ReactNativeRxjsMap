import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import MapScreen from '../screens/MapScreen';
import HomeScreen from '../screens/HomeScreen';

const BottomTabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {screen: HomeScreen},
    Map: {screen: MapScreen},
  },
  {
    initialRouteName: 'Home'
  },
);

export default createAppContainer(BottomTabNavigator);
