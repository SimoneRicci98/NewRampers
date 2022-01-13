import React from 'react';
import Cartolina from './pages/Cartolina';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RamBolla from './pages/RamBolla';
import Menu from './pages/Menu';
import Giustificazioni from './pages/Giustificazioni';
import CartolinaCalendario from './pages/CartolinaCalendario';

const Stack = createNativeStackNavigator();
export default function App(){
  return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen component={CartolinaCalendario} name="CartolinaCalendario" options={{headerTintColor:'red',headerTitleStyle:{color:'black'}}}/>
      <Stack.Screen component={Menu} name="Menu" options={{headerShown:false,headerTintColor:'red'}}/>
      <Stack.Screen component={Cartolina} name="Cartolina" options={{headerTintColor:'red',headerTitleStyle:{color:'black'}}}/>
      <Stack.Screen component={RamBolla} name="RamBolla"/>
      <Stack.Screen component={Giustificazioni} name="Giustificazioni"/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}