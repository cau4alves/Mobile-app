import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <Login />
    </SafeAreaView>
  );
}

