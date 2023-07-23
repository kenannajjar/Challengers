import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Trivia4MultipleChoice from '../pages/Trivia4MultipleChoice';

const Stack = createStackNavigator();

const TriviaQuestionNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Trivia4MultipleChoice" component={Trivia4MultipleChoice} options={{ gestureEnabled: false }} />

    </Stack.Navigator>
);

export default TriviaQuestionNavigator;