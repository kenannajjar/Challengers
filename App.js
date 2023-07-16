import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from './src/pages/Home';
import CategoryPage from './src/pages/CategoryPage';
import ModalScreen from './src/components/BuyBitsModal.js';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="CategoryPage" component={CategoryPage} />
    </MainStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen 
          name="Main" 
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen 
          name="BuyBitsModal" 
          component={ModalScreen}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}





