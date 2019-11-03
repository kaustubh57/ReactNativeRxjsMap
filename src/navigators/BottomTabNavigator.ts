import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import MapScreen from '../screens/MapScreen';
import HomeScreen from '../screens/HomeScreen';
import MapExampleScreen from '../screens/MapExampleScreen';

const BottomTabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {screen: HomeScreen},
    Map: {screen: MapScreen},
    MapExample: {screen: MapExampleScreen}
  },
  {
    initialRouteName: 'MapExample'
  },
);

export default createAppContainer(BottomTabNavigator);
