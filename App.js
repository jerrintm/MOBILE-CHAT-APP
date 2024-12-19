import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


// import the screens
import Start from './components/Start';
import Chat from './components/Chat';
import { useEffect } from 'react';

import { useNetInfo }from '@react-native-community/netinfo';

// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { initializeApp } from "firebase/app";
import { getFirestore, disableNetwork, enableNetwork } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Create the navigator
const Stack = createNativeStackNavigator();

const App = () => {
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9CE063a5VV0CWCr1Usr9V471SdabIPG0",
  authDomain: "chat-app-2b3b8.firebaseapp.com",
  projectId: "chat-app-2b3b8",
  storageBucket: "chat-app-2b3b8.firebasestorage.app",
  messagingSenderId: "102886935449",
  appId: "1:102886935449:web:458f3a1cbc5b68a93f6108"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  const storage = getStorage(app);
  
  const connectionStatus = useNetInfo();

  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
      >
        <Stack.Screen
          name="Start"
          component={Start}
        />
        <Stack.Screen
          name="Chat">
 {props => <Chat isConnected={connectionStatus.isConnected} db={db} storage={storage} {...props}  />}
        </Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


