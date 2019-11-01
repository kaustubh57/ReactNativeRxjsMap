import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';


const StackNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Map: {screen: MapScreen},
});

export default createAppContainer(StackNavigator);
