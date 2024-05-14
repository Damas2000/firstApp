import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {
  NavigationContainer,
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CoursesScreen from './src/screens/CoursesScreen';
import CoursesInfo from './src/screens/CoursesInfo';
const Stack = createNativeStackNavigator();
export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Ana Sayfa" component={HomeScreen}/>
        <Stack.Screen name="Bilgilerim" component={CoursesScreen}/>
        <Stack.Screen name="Kurs bilgilerim" component={CoursesInfo}/>

      </Stack.Navigator>
    </NavigationContainer>
  );


}
//lists




const styles = StyleSheet.create({

});
