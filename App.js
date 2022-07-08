import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Drawer from './routers/Drawer';
import Home from './screens/Home';

export default function App() {
  return (
    <Drawer />
  );
}

