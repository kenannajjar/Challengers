import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryPage from './src/pages/CategoryPage';
import Home from './src/pages/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CategoryPage" component={CategoryPage} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


