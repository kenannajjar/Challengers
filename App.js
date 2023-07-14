import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CategoryPage from './src/pages/CategoryPage';
import Home from './src/pages/Home';
import { useUserContext, UserContextProvider } from './src/context/UserContext';
import SignUpSignInNavigator from './src/navigation/SignUpSignInNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import auth from './firebase/auth';
import { getUserData } from './firebase/api';

const Stack = createStackNavigator();

const App = () => {
  const { user, setUser } = useUserContext(); // Access user state from the context

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (u) => {
      setUser(u); // Update the state with the authenticated user (or null if not logged in)

      if (u) {
        const userData = await getUserData(u.uid);
        setUser({ ...user, userData });
      }
    });

    return () => unsubscribe();
  }, []);

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CategoryPage" component={CategoryPage} />
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


