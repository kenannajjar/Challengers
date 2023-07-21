import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CategoryPage from './src/pages/CategoryPage';
import Home from './src/pages/Home';
import { useUserContext, UserContextProvider } from './src/context/UserContext';
import SignUpSignInNavigator from './src/navigation/SignUpSignInNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import auth from './firebase/auth';
import { getUserData } from './firebase/api';
import Trivia4MultipleChoice from './src/pages/Trivia4MultipleChoice';

const Stack = createStackNavigator();

const App = () => {
  const { user, setUser } = useUserContext(); // Access user state from the context
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (u) => {
      setUser(u); // Update the state with the authenticated user (or null if not logged in)

      if (u) {
        const userData = await getUserData(u.uid);
        setUser({ ...user, userData });
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <<Text>Loading...</Text>>
      </View>
    );
  }
  else if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CategoryPage" component={CategoryPage} />
          <Stack.Screen name="Trivia4MultipleChoice" component={Trivia4MultipleChoice} />
        </Stack.Navigator>
      </NavigationContainer>
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


