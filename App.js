import { View } from 'react-native';
import CategoryPage from './src/pages/CategoryPage';
import Home from './src/pages/Home';

export default function App() {
  return (
    <View style = {{flex: 1}}>
      <CategoryPage />
    </View>
  );
}


