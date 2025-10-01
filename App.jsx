import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Register from './screens/Register';
import VehicleList from './screens/VehicleList';
import { SafeAreaView, StatusBar } from 'react-native';
import VehicleEntrance from './screens/VehicleEntrance';
import VehicleExit from './screens/VehicleExit';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';

const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screens: {
    Login: Login,
    Home: VehicleList
  }
})

const Navigation = createStaticNavigation(RootStack)

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <Navigation />
    </SafeAreaView>
  );
}
