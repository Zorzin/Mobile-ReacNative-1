import {createStackNavigator, createAppContainer} from 'react-navigation';

import Form from './Views/Form/Form'
import Summary from './Views/Summary/Summary'

const MainNavigator = createStackNavigator({
  Home: {screen: Form},
  Summary: {screen: Summary},
});

const App = createAppContainer(MainNavigator);

export default App;