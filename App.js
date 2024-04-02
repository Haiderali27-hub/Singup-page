// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigators/RootNavigator'; // Correct path to your RootNavigator

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
