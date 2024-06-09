import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
// Importa tus otras pantallas aquí

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* Agrega tus otras pantallas aquí */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
