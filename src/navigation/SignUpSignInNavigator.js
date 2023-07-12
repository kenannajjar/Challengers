import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInPage from '../pages/SignIn';
import SignUpPage from '../pages/SignUp';

const Stack = createStackNavigator();

const SignUpSignInNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
    </Stack.Navigator>
);

export default SignUpSignInNavigator;