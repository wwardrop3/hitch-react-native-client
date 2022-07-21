import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppStack from './routers/AppStack';
import Drawer from './routers/Drawer';

export const host = "https://hitch-capstone-server.herokuapp.com"
// export const host = "http://localhost:8000"



export default function App() {
  const [userToken, setUserToken] = useState()
  return (
    <AppStack userToken={userToken} setUserToken={setUserToken} />
  );
}

