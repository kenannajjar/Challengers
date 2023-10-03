import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useUserContext, UserContextProvider } from './src/context/UserContext';
import SignUpSignInNavigator from './src/navigation/SignUpSignInNavigator';
import HomeNavigator from './src/navigation/HomeNavigator';
import auth from './firebase/auth';
import { getUserData } from './firebase/api';
import * as SplashScreen from 'expo-splash-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import ShopScreen from './src/pages/ShopScreen';
import ProfileScreen from './src/pages/ProfileScreen';


SplashScreen.preventAutoHideAsync();
const Tab = createBottomTabNavigator();

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
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Shop') {
              iconName = 'shopping-cart';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            }

            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeNavigator} options={{ headerShown: false }} />
        <Tab.Screen name="Shop" component={ShopScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
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


