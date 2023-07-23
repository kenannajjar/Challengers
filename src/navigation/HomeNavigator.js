import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import CategoryPage from '../pages/CategoryPage';
import TriviaQuestionNavigator from '../navigation/TriviaQuestionNavigator';

const Stack = createStackNavigator();

const HomeNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CategoryPage" component={CategoryPage} />
        <Stack.Screen name="TriviaQuestionNavigator" component={TriviaQuestionNavigator} />
    </Stack.Navigator>
);

export default HomeNavigator;