import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Register from './screens/Register';
import VehicleList from './screens/VehicleList';
import { SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      
      <VehicleList />
    </SafeAreaView>
  );
}
