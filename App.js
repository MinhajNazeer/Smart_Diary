import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import Home from './screens/home';
import Register from './screens/register';
import Dashboard from './screens/dashboard.js';
import OfficeWork from './screens/officeWork';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Register" component={Register}/>  
        <Stack.Screen name="Dashboard" component={Dashboard}/>  
        <Stack.Screen name="OfficeWork" component={OfficeWork}/>
  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center',
  }
});
