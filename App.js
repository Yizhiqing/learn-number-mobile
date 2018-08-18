import { createStackNavigator, } from 'react-navigation';
import Home from './Home';
import Content from './Content';

const App = createStackNavigator({
  Home: { screen: Home },
  Content: { screen: Content },
});

export default App;
