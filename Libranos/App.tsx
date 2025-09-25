

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from './src/pages/login';
import Cadastro from './src/pages/cadastro';
import Modulos from './src/pages/modulo';
import Alfabeto from './src/pages/alfabeto';
import Numeros from './src/pages/numeros';

export type RootStackParamList = {
  Login: undefined;
  Cadastro: undefined; 
  Modulo: undefined;
  Alfabeto: undefined;
  Numeros: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator id={undefined}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
        <Stack.Screen name="Modulo" component={Modulos} options={{ headerShown: false }} />
        <Stack.Screen name="Alfabeto" component={Alfabeto} options={{ headerShown: false}} />
        <Stack.Screen name="Numeros" component={Numeros} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
