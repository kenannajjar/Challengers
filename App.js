import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useUserContext, UserContextProvider } from './src/context/UserContext';
import SignUpSignInNavigator from './src/navigation/SignUpSignInNavigator';
import HomeNavigator from './src/navigation/HomeNavigator';
import auth from './firebase/auth';
import { getUserData } from './firebase/api';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();

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
    SplashScreen.preventAutoHideAsync();
  }
  else if (user) {
    SplashScreen.hideAsync();
    return (
      <HomeNavigator />
    );
  } else {
    SplashScreen.hideAsync();
    return (
      <SignUpSignInNavigator />
    );
  }
};

const AppWithContext = () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </UserContextProvider>
  );
};

export default AppWithContext;


