import React, { useEffect } from 'react';
import { View } from 'react-native';
import Home from './src/pages/Home';
import { useUserContext, UserContextProvider } from './src/context/UserContext';
import SignUpSignInNavigator from './src/navigation/SignUpSignInNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import auth from './src/firebase/auth';

const Stack = createStackNavigator();

const App = () => {
  const { user, setUser } = useUserContext(); // Access user state from the context

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("user changed");
      setUser(user); // Update the state with the authenticated user (or null if not logged in)
    });

    return () => unsubscribe();
  }, [setUser]);

  if (user) {
    return (
      <View style={{ flex: 1 }}>
        <Home />
      </View>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignUpSignIn" component={SignUpSignInNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

const AppWithContext = () => {
  return (
    <UserContextProvider>
      <App />
    </UserContextProvider>
  );
};

export default AppWithContext;


