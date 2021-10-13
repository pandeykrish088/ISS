import * as React from 'react';
import HomeScreen from './Screens/Home';
import ISSLocationScreen from './Screens/ISS-location';
import MeteorsScreen from './Screens/Meteors';
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

function App(){
return(
<NavigationContainer>
<Stack.Navigator initialRouteName = "Home" screenOptions = {{
headerShown:false
}}>

  <Stack.Screen name = "Home" component = {HomeScreen}/>
  <Stack.Screen name = "ISS-location" component = {ISSLocationScreen}/>
  <Stack.Screen name = "Meteors" component = {MeteorsScreen}/>

</Stack.Navigator>
</NavigationContainer>
)
}
export default App;
