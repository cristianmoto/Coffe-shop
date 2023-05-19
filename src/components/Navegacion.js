import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CartScreen from '../screens/CartScreen';
import MenuScreen from '../screens/MenuScreen';
import DetalleScreen from '../screens/DetalleScreen';
import LoginScreen from '../screens/login/LoginScreen';
import RegisterScreen from '../screens/login/RegisterScreen';
const Stack = createNativeStackNavigator();

function Navegacion() {
  return (
   
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#451717',
       
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
       
      },
      
    }}initialRouteName='Login' >
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name='Registro' component={RegisterScreen}/>
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Detalle" component={DetalleScreen} />
        <Stack.Screen name="Orden" component={CartScreen} />
      </Stack.Navigator>
    
  );
}
export default Navegacion;